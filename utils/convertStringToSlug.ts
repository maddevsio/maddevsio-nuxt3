export const convertStringToSlug = (text: string) => text.toLowerCase()
  .trim()
  .replace(/[^\w ]+/g, '')
  .replace(/ +/g, '-')
