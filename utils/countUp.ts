import { CountUp } from 'countup.js'

export const countUp = (entry: IntersectionObserverEntry, observer: IntersectionObserver, options: any = undefined) => {
  const { id } = entry.target
  // @ts-ignore
  const { endValue } = entry.target.dataset
  const animation = new CountUp(id, endValue, options)

  animation.start()
  observer.unobserve(entry.target)
}
