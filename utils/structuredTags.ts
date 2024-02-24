import type { PrismicPlugin } from '@prismicio/vue'
import type { RichTextField } from '@prismicio/client'

interface StructuredTag {
  category_title: RichTextField
  tags: RichTextField
}

export const structuredTags = (tags: StructuredTag[], prismic: PrismicPlugin) => tags.map(tag => ({
  name: prismic.asText(tag.category_title),
  tags: prismic.asText(tag.tags)
    ? prismic.asText(tag.tags)
      .split(', ').map(tagItem => (tagItem === 'Software Development' ? 'Software Development ' : tagItem))
    : [],
  icon: (tagName: string) => {
    switch (tagName.toLowerCase()) {
    case 'fintech':
      return 'fintech-tag'
    case 'blockchain':
      return 'blockchain-tag'
    case 'cost optimization':
      return 'cost-optimization-tag'
    default: return null
    }
  },
}))
