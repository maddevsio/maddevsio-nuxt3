export default defineEventHandler(async event => {
  if (!event.path.startsWith('/api')) {
    const url = getRequestURL(event)
    if (url.pathname.startsWith('/insights/blog/')) { await sendRedirect(event, '/blog/', 301) }
  }
})
