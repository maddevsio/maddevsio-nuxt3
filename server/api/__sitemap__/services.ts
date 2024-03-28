export default defineSitemapEventHandler(async () => {
  const { services } = await getSitemapRoutes('services')
  if (services) {
    return [
      ...services,
    ]
  }
  return []
})
