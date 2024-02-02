import { playVideo } from './playVideo'

export const autoPlayVideo = (htmlVideoElement: HTMLVideoElement) => {
  // @ts-ignore
  const observerCallback = entries => entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) {
      if (target) { target.pause() }
    } else {
      playVideo(target)
    }
  })

  const elements = []
  elements.push(htmlVideoElement)

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    })
    elements.forEach(element => observer.observe(element))
  }
}
