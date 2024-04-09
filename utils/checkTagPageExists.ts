import { tagsDescriptions } from '~/components/Tags/constants/tagsConstants'

export const checkTagPageExists = (tagName: string): boolean => {
  const convertedTag = tagName === 'ML' ? 'Machine Learning' : tagName
  return tagsDescriptions.some(item => item.title.toLowerCase() === convertedTag.toLowerCase())
}
