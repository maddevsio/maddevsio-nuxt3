import type { KeyTextField } from '@prismicio/client'
export interface QAPageSchemaData {
  title: KeyTextField | undefined
  description: string | null
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
