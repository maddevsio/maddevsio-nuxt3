interface TextEllipsisOptions {
  limit: number
  ellipsis?: boolean
  trimToSpace?: boolean
}

export const textEllipsis = (text: string, { limit, ellipsis = true, trimToSpace = true }: TextEllipsisOptions) => {
  if (!text || !limit || text.length <= limit) { return text }

  const trimmedText = text.substr(0, limit)

  if (trimToSpace) { return `${ text.substr(0, trimmedText.lastIndexOf(' ')) }${ ellipsis ? '...' : '' }` }
  return `${ text.substr(0, ellipsis ? limit - 3 : limit) }${ ellipsis ? '...' : '' }`
}
