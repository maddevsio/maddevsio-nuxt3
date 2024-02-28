import type { ImageField } from '@prismicio/client'
import type { FilledLinkToWebField } from '@prismicio/types'
import type { Author, TransformedAuthor, TransformedAuthorSocialNetwork } from '~/interfaces/common/commonInterfaces'

export interface AuthorContributor {
  contributorImage: ImageField
  contributorLink: FilledLinkToWebField
}

export interface PostAuthorsProps {
  primary: {
    author: Author
    coAuthor: Author | null
  }
  openGraphUrl: string
  metaTitle: string
  items: AuthorContributor[]
}

export interface IPostAuthors {
  openGraphUrl: string
  metaTitle: string
  author: TransformedAuthor | null
  coAuthor: TransformedAuthor | null
  authorSocialNetworks: TransformedAuthorSocialNetwork[] | []
  coAuthorSocialNetworks: TransformedAuthorSocialNetwork[] | []
  contributors: AuthorContributor[]
  getAuthorData(author: TransformedAuthor, type: string): {
    [key: string]: any
  }
}
