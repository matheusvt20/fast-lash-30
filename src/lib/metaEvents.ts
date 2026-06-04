type MetaEventName =
  | 'PageView'
  | 'ViewContent'
  | 'InitiateCheckout'
  | 'Purchase'
  | 'LeadAulaGratuita'

type MetaPixelMethod = 'track' | 'trackCustom'

type MetaEventOptions = {
  customData?: Record<string, unknown>
  userData?: Record<string, unknown>
  pixelMethod?: MetaPixelMethod
}

declare global {
  interface Window {
    __META_EVENT_IDS__?: Record<string, string>
    fbq?: (
      method: MetaPixelMethod,
      eventName: string,
      parameters?: Record<string, unknown>,
      eventOptions?: { eventID: string },
    ) => void
  }
}

const META_CAPI_ENDPOINT = '/api/meta-capi'

function createBrowserEventId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return `${Date.now()}.${Math.random().toString(36).slice(2)}`
}

async function getServerEventId(eventName: MetaEventName) {
  if (eventName !== 'ViewContent') {
    return createBrowserEventId()
  }

  const storedEventId = window.__META_EVENT_IDS__?.[eventName]

  if (storedEventId) {
    delete window.__META_EVENT_IDS__?.[eventName]
    return storedEventId
  }

  try {
    const response = await fetch(META_CAPI_ENDPOINT, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
    const data = await response.json().catch(() => ({}))
    const eventId = typeof data.event_id === 'string' ? data.event_id : undefined

    if (response.ok && eventId) {
      return eventId
    }
  } catch (error) {
    console.error('[Meta CAPI] Failed to create server event_id', error)
  }

  return createBrowserEventId()
}

function readCookie(name: string) {
  if (typeof document === 'undefined') {
    return undefined
  }

  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`))

  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : undefined
}

function getFbcFromUrl() {
  if (typeof window === 'undefined') {
    return undefined
  }

  const fbclid = new URLSearchParams(window.location.search).get('fbclid')

  if (!fbclid) {
    return undefined
  }

  return `fb.1.${Date.now()}.${fbclid}`
}

function getTestEventCode() {
  if (typeof window === 'undefined') {
    return undefined
  }

  return new URLSearchParams(window.location.search).get('test_event_code') || undefined
}

function sendCapiEvent(payload: Record<string, unknown>) {
  const body = JSON.stringify(payload)

  if (typeof navigator !== 'undefined' && 'sendBeacon' in navigator) {
    const blob = new Blob([body], { type: 'application/json' })

    if (navigator.sendBeacon(META_CAPI_ENDPOINT, blob)) {
      return
    }
  }

  void fetch(META_CAPI_ENDPOINT, {
    body,
    headers: {
      'Content-Type': 'application/json',
    },
    keepalive: true,
    method: 'POST',
  }).catch((error) => {
    console.error('[Meta CAPI] Failed to send event', error)
  })
}

export function trackMetaEvent(
  eventName: MetaEventName,
  options: MetaEventOptions = {},
) {
  if (typeof window === 'undefined') {
    return
  }

  const customData = options.customData ?? {}
  const userData = options.userData ?? {}
  const pixelMethod = options.pixelMethod ?? 'track'
  const shouldDelayServerCookieRead = eventName === 'PageView'
  const initialFbp = shouldDelayServerCookieRead ? undefined : readCookie('_fbp')
  const fbc = readCookie('_fbc') ?? getFbcFromUrl()
  const testEventCode = getTestEventCode()

  async function dispatchEvent(eventId: string) {
    if (typeof window.fbq === 'function') {
      window.fbq(pixelMethod, eventName, customData, { eventID: eventId })
    }

    if (shouldDelayServerCookieRead) {
      await new Promise((resolve) => setTimeout(resolve, 300))
    }

    const fbp = shouldDelayServerCookieRead ? readCookie('_fbp') : initialFbp

    sendCapiEvent({
      custom_data: customData,
      event_id: eventId,
      event_name: eventName,
      event_source_url: window.location.href,
      fbc,
      fbp,
      test_event_code: testEventCode,
      user_data: userData,
    })
  }

  if (eventName === 'ViewContent') {
    void getServerEventId(eventName).then(dispatchEvent)
    return
  }

  void dispatchEvent(createBrowserEventId())
}
