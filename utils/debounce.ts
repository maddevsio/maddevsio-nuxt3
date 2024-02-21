export const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | undefined
  return (...args: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  }
}
