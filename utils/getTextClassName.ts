export const getTextClassNames = (sizes: { [key: string]: string }, name: string) => Object.keys(sizes)
  .filter(filterSize => sizes[filterSize])
  .map(size => `${ name }${ size }--${ sizes[size] }`)
