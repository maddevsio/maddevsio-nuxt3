export const LOCAL_STORAGE_KEYS = {
  ACCEPT_COOKIE: 'accept_cookie',
}

export const saveState = (state: any, name: string) => {
  try {
    const res = JSON.stringify(state)
    window.localStorage.setItem(name, res)
  } catch (e) {
    // Ignoring
  }
}
export const loadState = (name: string) => {
  try {
    const jsonState = window.localStorage.getItem(name)
    return JSON.parse(jsonState || '')
  } catch (e) {
    return undefined
  }
}
