import { CountUp } from 'countup.js'

export const countDown = (entry: any, observer: any) => {
  const { id } = entry.target
  const { endValue, startValue } = entry.target.dataset
  const animation = new CountUp(id, startValue, { startVal: endValue, duration: 3 })

  animation.start()
  observer.unobserve(entry.target)
}
