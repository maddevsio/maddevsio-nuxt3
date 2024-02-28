import type {
  AuthorContributor,
  IPostAuthors,
  PostAuthorsProps,
} from '~/components/PageBlocks/Authors/interface/IPostAuthors'
import type { TransformedAuthor, TransformedAuthorSocialNetwork } from '~/interfaces/common/commonInterfaces'

export class PostAuthors implements IPostAuthors {
  openGraphUrl: string
  metaTitle: string
  author: TransformedAuthor | null
  coAuthor: TransformedAuthor | null
  authorSocialNetworks: TransformedAuthorSocialNetwork[] | []
  coAuthorSocialNetworks: TransformedAuthorSocialNetwork[] | []
  contributors: AuthorContributor[]

  constructor(props: PostAuthorsProps, openGraphUrl: string, metaTitle: string) {
    this.openGraphUrl = openGraphUrl || ''
    this.metaTitle = metaTitle || ''
    this.author = props.primary.author?.id ? extractAuthorData(props.primary.author) as TransformedAuthor : null
    this.coAuthor = props.primary.coAuthor?.id ? extractAuthorData(props.primary.coAuthor) as TransformedAuthor : null
    this.authorSocialNetworks = this.author ? this.author.socialNetworks.filter(network => network.key === 'linkedin') : []
    this.coAuthorSocialNetworks = this.coAuthor ? this.coAuthor.socialNetworks.filter(network => network.key === 'linkedin') : []
    this.contributors = props.items || []

    this.getAuthorData = this.getAuthorData.bind(this)
  }

  getAuthorData(author: TransformedAuthor, type = 'author') {
    return author && {
      [`${ type }Image`]: author?.image || {},
      [`${ type }Link`]: linkResolver({ type: 'author', uid: author?.uid }),
    }
  }
}
