export const exceptKeys = (obj: any, exceptKeys: string[] = []) => Object.fromEntries(
  Object.entries(obj).filter(([key]) => !exceptKeys.includes(key)),
)
