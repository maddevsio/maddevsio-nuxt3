export const clearImageParamsFromPrismic = (imageUrl: string) => imageUrl.replace(/\?.*/, '?auto=compress,format')
