export const createAnchorID = (text: string | null) => {
  if (!text) { return null }
  return text.trim()
    .toLowerCase()
    .replace(/[^+\w]/g, ' ')
    .replace(/_/g, '')
    .trim()
    .replace(/\s+/g, '-')
}
