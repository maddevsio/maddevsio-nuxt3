export const reformatToHtml = (text: string, type = 'string') => {
  if (type === 'string' && text) { return text.replace(/\n/g, '<br />') }
  if (type === 'array' && text) { return text.split(/\n/g) }
  return text
}
