const observerDefaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
}

export function useIntersectionObserver(idList: string[], callbackFn: Function, observerOptions = observerDefaultOptions) {
  const initIntersectionObserver = () => {
    idList.forEach(id => {
      const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
          if (entry.target.id === id) {
            if (entry.isIntersecting) {
              callbackFn(entry, observer)
            }
          }
        })
      }
      const element = document.getElementById(id)
      if (!element) { return }
      const observer = new IntersectionObserver(callback, observerOptions)
      observer.observe(element)
    })
  }

  onMounted(() => {
    initIntersectionObserver()
  })
}
