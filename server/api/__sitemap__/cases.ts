export default defineSitemapEventHandler(async () => {
  const { caseStudies } = await getSitemapRoutes('caseStudies')
  if (caseStudies) {
    return [
      ...caseStudies,
    ]
  }
  return []
})
