import type { KeyTextField } from '@prismicio/client'
import type { RichTextField } from '@prismicio/types'
export interface QAPageSchemaData {
  title: KeyTextField | undefined
  description: RichTextField | undefined
  authorName: KeyTextField | undefined
  pageLink: string
  authorPageLink: string
}
export const buildQAPageSchema = ({ title, description, authorName, pageLink, authorPageLink }: QAPageSchemaData) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: title,
      text: title,
      answerCount: '1',
      acceptedAnswer: {
        '@type': 'Answer',
        text: description,
        url: pageLink,
        author: {
          '@type': 'Person',
          name: authorName,
          url: authorPageLink,
        },
      },
    },
  }
}
