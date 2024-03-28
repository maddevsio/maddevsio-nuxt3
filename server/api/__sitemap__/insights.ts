export default defineSitemapEventHandler(async () => {
  const { insights } = await getSitemapRoutes('insights')
  if (insights) {
    return [
      ...insights,
    ]
  }
  return []
})
