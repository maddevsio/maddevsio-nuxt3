export const checkAndExtractDomain = (url: string) => {
  const ourDomain = url.includes('maddevs.io')
  return {
    ourDomain,
    url: ourDomain ? url.replace(/^(?:https?:\/\/)?(?:www\.)?maddevs\.io/, '') : url,
  }
}
