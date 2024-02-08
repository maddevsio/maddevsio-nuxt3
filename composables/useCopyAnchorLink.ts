export const useCopyAnchorLink = (event: MouseEvent | TouchEvent) => {
  const route = useRoute()
  const target = event.target as HTMLElement
  const copyText = target.getAttribute('data-id')
  if (!copyText) { return null }
  const tooltip = target.nextElementSibling as HTMLElement
  const link = `${ window.location.origin }${ route.path }#${ copyText }`

  if (tooltip) {
    tooltip.innerText = 'Copied!'
    setTimeout(() => {
      tooltip.innerText = 'Copy link'
    }, 3000)
  }
  copyToClipboard(link)
  return link
}
