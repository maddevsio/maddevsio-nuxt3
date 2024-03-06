export default defineSitemapEventHandler(async () => {
  const { main } = await getSitemapRoutes('main')
  if (main) {
    return [
      ...main,
    ]
  }
  return []
})
