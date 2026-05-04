const GRAPH_API_VERSION = 'v19.0'
const META_EVENTS_URL = `https://graph.facebook.com/${GRAPH_API_VERSION}`

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json',
    },
    status,
  })
}

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for')

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  return request.headers.get('cf-connecting-ip') ?? undefined
}

function normalize(value) {
  if (typeof value !== 'string') {
    return undefined
  }

  const normalized = value.trim().toLowerCase()

  return normalized || undefined
}

async function sha256(value) {
  const normalized = normalize(value)

  if (!normalized) {
    return undefined
  }

  const data = new TextEncoder().encode(normalized)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)

  return [...new Uint8Array(hashBuffer)]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function cleanObject(input) {
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => value !== undefined && value !== ''),
  )
}

async function buildUserData(request, body) {
  const userData = body.user_data && typeof body.user_data === 'object'
    ? body.user_data
    : {}

  return cleanObject({
    client_ip_address: getClientIp(request),
    client_user_agent: request.headers.get('user-agent') ?? undefined,
    city: await sha256(userData.city),
    country: await sha256(userData.country),
    ct: await sha256(userData.ct),
    em: await sha256(userData.email ?? userData.em),
    external_id: await sha256(userData.external_id),
    fbc: body.fbc ?? userData.fbc,
    fbp: body.fbp ?? userData.fbp,
    fn: await sha256(userData.first_name ?? userData.fn),
    ln: await sha256(userData.last_name ?? userData.ln),
    ph: await sha256(userData.phone ?? userData.ph),
    st: await sha256(userData.state ?? userData.st),
    zp: await sha256(userData.zip ?? userData.zp),
  })
}

function buildCustomData(body) {
  const customData = body.custom_data && typeof body.custom_data === 'object'
    ? body.custom_data
    : {}

  return cleanObject({
    ...customData,
    currency: customData.currency ?? (
      customData.value !== undefined ? 'BRL' : undefined
    ),
  })
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      Allow: 'GET, POST, OPTIONS',
    },
    status: 204,
  })
}

export async function onRequestGet() {
  return jsonResponse({
    event_id: crypto.randomUUID(),
  })
}

export async function onRequestPost({ request, env }) {
  const pixelId = env.META_PIXEL_ID
  const accessToken = env.META_ACCESS_TOKEN

  if (!pixelId || !accessToken) {
    console.error('[Meta CAPI] Missing META_PIXEL_ID or META_ACCESS_TOKEN')
    return jsonResponse({ error: 'Meta CAPI is not configured' }, 500)
  }

  try {
    const body = await request.json()

    if (!body.event_name) {
      return jsonResponse({ error: 'event_name is required' }, 400)
    }

    const eventId = body.event_id || crypto.randomUUID()

    const event = {
      action_source: 'website',
      custom_data: buildCustomData(body),
      event_id: eventId,
      event_name: body.event_name,
      event_source_url: body.event_source_url,
      event_time: Math.floor(Date.now() / 1000),
      user_data: await buildUserData(request, body),
    }

    const metaPayload = {
      data: [event],
      test_event_code: body.test_event_code,
    }

    const response = await fetch(
      `${META_EVENTS_URL}/${pixelId}/events?access_token=${accessToken}`,
      {
        body: JSON.stringify(metaPayload),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    )

    const result = await response.json().catch(() => ({}))

    if (!response.ok) {
      console.error('[Meta CAPI] Graph API error', result)
      return jsonResponse({ error: 'Meta CAPI request failed' }, response.status)
    }

    return jsonResponse({ ok: true })
  } catch (error) {
    console.error('[Meta CAPI] Unexpected error', error)
    return jsonResponse({ error: 'Unexpected Meta CAPI error' }, 500)
  }
}

export async function onRequest() {
  return jsonResponse({ error: 'Method not allowed' }, 405)
}
