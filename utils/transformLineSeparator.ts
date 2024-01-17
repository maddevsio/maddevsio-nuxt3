export const transformLineSeparator = (text: string, type = 'string'): string | string[] => {
  if (type === 'string' && text) { return text.replace(/\n/g, '<br />') }
  if (type === 'array' && text) { return text.split(/\n/g) }
  return text
}
