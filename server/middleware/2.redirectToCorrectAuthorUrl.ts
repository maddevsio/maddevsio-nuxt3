export default defineEventHandler(async event => {
  if (!event.path.startsWith('/api')) {
    const url = getRequestURL(event)
    if (url.pathname.startsWith('/authors/')) { await sendRedirect(event, url.pathname.replace(/\/authors\//ig, '/blog/authors/'), 301) }
    if (url.pathname.startsWith('/author/')) { await sendRedirect(event, url.pathname.replace(/\/author\//ig, '/blog/authors/'), 301) }
    if (url.pathname.startsWith('/blog/author/')) { await sendRedirect(event, url.pathname.replace(/\/author\//ig, '/authors/'), 301) }
  }
})
