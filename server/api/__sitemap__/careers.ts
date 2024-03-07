export default defineSitemapEventHandler(async () => {
  const { careers } = await getSitemapRoutes('careers')
  if (careers) {
    return [
      ...careers,
    ]
  }
  return []
})
