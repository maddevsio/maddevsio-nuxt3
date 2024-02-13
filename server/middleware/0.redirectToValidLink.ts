export default defineEventHandler(async event => {
  if (!event.path.startsWith('/api')) {
    const headers = getHeaders(event)
    const secure = getRequestProtocol(event)
    const method = event.method
    const url = getRequestURL(event)
    let link = ''
    let queryString = ''
    const startQueryStringIndex = url.searchParams.toString()

    if (startQueryStringIndex) {
      queryString = `?${ startQueryStringIndex }/`
    }

    // Skip trailing slash for sitemaps
    if (url.href.endsWith('.xml/')) { await sendRedirect(event, `https://${ headers.host }${ url.pathname.slice(0, -1) }`, 301) }

    // Add trailing slash to the URL if it's missing
    if (url.href.slice(-1) !== '/' &&
      method === 'GET' &&
      !url.href.endsWith('.xml')
    ) {
      if (link) {
        link = `${ link }/${ queryString }`
      } else {
        link = `${ secure === 'https' ? 'https://' : 'http://' }${ headers.host }${ url.pathname }/${ queryString }`
      }
    }

    if (link) { await sendRedirect(event, link, 301) }
  }
})
