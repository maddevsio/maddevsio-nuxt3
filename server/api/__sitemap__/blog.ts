export default defineSitemapEventHandler(async () => {
  const { blog } = await getSitemapRoutes('blog')
  if (blog) {
    return [
      ...blog,
    ]
  }
  return []
})
