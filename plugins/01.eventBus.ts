import mitt from 'mitt'

type AppTypes = {
  [key: string]: any
}
export default defineNuxtPlugin(() => {
  const emitter = mitt<AppTypes>()

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
