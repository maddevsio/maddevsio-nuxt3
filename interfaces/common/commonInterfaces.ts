export interface IntersectionObserverInstance {
  observe: (target: Element) => void
  unobserve: (target: Element) => void
  disconnect: () => void
}
