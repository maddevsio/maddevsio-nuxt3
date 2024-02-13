export default defineEventHandler(async event => {
  if (!event.path.startsWith('/api')) {
    const url = getRequestURL(event)
    if (url.pathname.startsWith('/qa-software-testing/')) { await sendRedirect(event, url.pathname.replace(/\/qa-software-testing\//ig, '/software-testing/'), 301) }
  }
})
