import type { TransformedGlossaryTag } from '~/components/Glossary/Post/interfaces/IGlossaryPostFooter'

export const transformGlossaryTags = (tags: string[]): TransformedGlossaryTag[] => tags
  .filter(tag => !tag.includes('Glossary') && !tag.includes('Words'))
  .map(tag => (tag === 'Software Development ' ? 'Software Development' : tag))
  .map(tag => ({ name: tag, link: `/tag/${ tag.split(' ').join('-').toLowerCase() }/` }))
