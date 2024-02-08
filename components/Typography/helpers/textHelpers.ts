interface SizesProps {
  title?: string
  showAnchorLink?: boolean
  maxWidth?: string
  position?: string
  tag?: string
  colorTheme?: string
  'size-xl': string
  'size-lg': string
  'size-md': string
  'size-sm': string
  'size-xs': string
}

export const getTextSizes = (sizes: SizesProps) => ({
  '--text-size-xl': sizes['size-xl']?.split('-')?.join(''),
  '--text-size-lg': sizes['size-lg']?.split('-')?.join(''),
  '--text-size-md': sizes['size-md']?.split('-')?.join(''),
  '--text-size-sm': sizes['size-sm']?.split('-')?.join(''),
  '--text-size-xs': sizes['size-xs']?.split('-')?.join(''),
})

export const getTextClassNames = (sizes: { [key: string]: string }, name: string) => Object.keys(sizes)
  .filter(filterSize => sizes[filterSize])
  .map(size => `${ name }${ size }--${ sizes[size] }`)
