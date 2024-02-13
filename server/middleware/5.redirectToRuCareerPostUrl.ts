export default defineEventHandler(async event => {
  if (!event.path.startsWith('/api')) {
    const url = getRequestURL(event)
    if (url.pathname.startsWith('/ru/about/careers/')) { await sendRedirect(event, url.pathname.replace(/\/ru\/about\/careers\//ig, '/careers/'), 301) }
    if (url.pathname.startsWith('/about/careers/')) { await sendRedirect(event, url.pathname.replace(/\/about\/careers\//ig, '/careers/'), 301) }
    if (url.pathname.startsWith('/ru/careers/')) { await sendRedirect(event, url.pathname.replace(/\/ru\/careers\//ig, '/careers/'), 301) }
  }
})
