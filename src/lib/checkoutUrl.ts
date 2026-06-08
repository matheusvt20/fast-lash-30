function getCookie(name: string): string {
  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  )
  return match ? decodeURIComponent(match[2]) : ""
}

function buildFbc(): string {
  const params = new URLSearchParams(window.location.search)
  const fbclid = params.get("fbclid")
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : ""
}

export function getCheckoutUrl(baseUrl: string): string {
  try {
    const fbp = getCookie("_fbp")
    const fbc = getCookie("_fbc") || buildFbc()
    const url = new URL(baseUrl)
    if (fbp) url.searchParams.set("s1", fbp)
    if (fbc) url.searchParams.set("s2", fbc)
    return url.toString()
  } catch {
    return baseUrl
  }
}
