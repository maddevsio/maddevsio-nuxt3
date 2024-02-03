interface Slices {
  slice_type: string
  primary: {
    text: {
      type: string
      text: string
    }[]
  }
}
export const getFirstParagraph = (slices: Slices[], limit: number) => {
  let paragraph = ''
  let haveFirstParagraph = false
  slices.forEach(slice => {
    if (haveFirstParagraph || slice.slice_type !== 'text') { return }

    slice.primary.text.filter(block => block.type === 'paragraph').forEach(block => {
      paragraph += block.text.replace(/`(.*?)`/g, '<code class="inline-code">$1</code>')
      // the second parameter of function excludes tags
      paragraph = convertTagsToText(paragraph, ['code', 'strong', 'em'])
      haveFirstParagraph = true
    })
  })

  return textEllipsis(paragraph, { limit })
}
