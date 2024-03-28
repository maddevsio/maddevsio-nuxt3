export default defineSitemapEventHandler(async () => {
  const { authors } = await getSitemapRoutes('authors')
  if (authors) {
    return [
      ...authors,
    ]
  }
  return []
})
