export const removeCompressFromPrismicImage = (imageUrl: string) => (imageUrl ? imageUrl.replace('compress,', '') : imageUrl)
