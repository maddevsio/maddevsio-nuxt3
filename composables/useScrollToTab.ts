export const useScrollToTab = async ($event: any, indentFromHeader: number) => {
  if ($event) {
    await delay(50) // Waiting for content to open in the tab
    const content = $event.target.parentNode.getBoundingClientRect().top
    const scrollTop = window.scrollY + content - indentFromHeader
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth',
    })
  }
}
