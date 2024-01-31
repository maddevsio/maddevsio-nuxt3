export const formatDate = (raw: string | unknown, withoutDay = false, withoutComma = false) => {
  if (typeof raw !== 'string') { return 'Invalid Date' }

  const options = { year: 'numeric', month: 'short', day: '2-digit' }
  const optionsWithoutDay = { year: 'numeric', month: 'long' }
  const date = new Date(raw)

  if (Number.isNaN(date.valueOf())) { return 'Invalid Date' }

  if (withoutDay) {
    if (withoutComma) {
      // @ts-ignore
      return date.toLocaleString('en-US', optionsWithoutDay).split(' ').join(' ')
    }
    // @ts-ignore
    return date.toLocaleString('en-US', optionsWithoutDay).split(' ').join(', ')
  }
  // @ts-ignore
  return date.toLocaleString('en-US', options)
}
