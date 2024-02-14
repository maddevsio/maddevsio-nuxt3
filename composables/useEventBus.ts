import mitt from 'mitt'

export const useEventBus = () => ({
  $on: (name: string, cb: () => void) => mitt().on(name, cb),
  $off: (name: string, cb?: () => void) => mitt().off(name, cb),
  $emit: (name: string, value: any) => mitt().emit(name, value),
  $clearAll: () => mitt().all.clear(),
})
