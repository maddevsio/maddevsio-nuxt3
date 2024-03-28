export const createAnchorID = (text: string | null) => {
  if (!text) { return null }
  return stripTags(text)
    .trim()
    .toLowerCase()
    .replace(/[^+\w]/g, ' ') // Change all symbols to space
    .replace(/_/g, '') // Removed symbol "_"
    .trim() // Remove spaces from start & end string
    .replace(/\s+/g, '-')
}
