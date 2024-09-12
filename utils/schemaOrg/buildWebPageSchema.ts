import type { KeyTextField } from '@prismicio/client'

export interface WepPageJsonLD {
  '@context': string;
  '@type': string;
  name: KeyTextField | undefined;
  description?: KeyTextField | undefined;
}
export const buildWebPageSchema = (title: KeyTextField | undefined, description: KeyTextField | undefined): WepPageJsonLD => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
  }
}
