import mitt from 'mitt'

export default defineNuxtPlugin(() => {
  const emitter = mitt()

  return {
    provide: {
      eventBus: {
        $on: emitter.on,
        $off: emitter.off,
        $emit: emitter.emit,
        $clearAll: emitter.all.clear,
      },
    },
  }
})
