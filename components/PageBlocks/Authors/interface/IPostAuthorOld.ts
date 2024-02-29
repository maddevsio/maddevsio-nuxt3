import type { ImageField } from '@prismicio/client'
import type { FilledLinkToWebField } from '@prismicio/types'
import type { TransformedAuthor } from '~/interfaces/common/commonInterfaces'
import type { AuthorContributor } from '~/components/PageBlocks/Authors/interface/IPostAuthors'

export interface PostAuthorOldProps {
  items: { link: FilledLinkToWebField, image: ImageField }[]
}

export interface IPostAuthorOld {
  author: TransformedAuthor
  coAuthor: TransformedAuthor | null
  contributors: AuthorContributor[]
  metaTitle: string
  openGraphUrl: string
  getAuthorData(author: TransformedAuthor, type: string): {
    [key: string]: any
  }
  transformContributors(contributors: { link: FilledLinkToWebField, image: ImageField }[]): AuthorContributor[]
}
