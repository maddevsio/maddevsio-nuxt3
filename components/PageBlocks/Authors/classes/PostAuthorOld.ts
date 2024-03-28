import type { FilledLinkToWebField } from '@prismicio/types'
import type { ImageField } from '@prismicio/client'
import type { IPostAuthorOld, PostAuthorOldProps } from '~/components/PageBlocks/Authors/interface/IPostAuthorOld'
import type { TransformedAuthor } from '~/interfaces/common/commonInterfaces'
import type { AuthorContributor } from '~/components/PageBlocks/Authors/interface/IPostAuthors'

export class PostAuthorOld implements IPostAuthorOld {
  author: TransformedAuthor
  coAuthor: TransformedAuthor | null
  contributors: AuthorContributor[]
  metaTitle: string
  openGraphUrl: string

  constructor(props: PostAuthorOldProps, moreData: any) {
    this.author = moreData.author && extractAuthorData(moreData.author)
    this.coAuthor = moreData.coAuthor && extractAuthorData(moreData.coAuthor)
    this.contributors = this.transformContributors(props.items.filter(contributor => (contributor.image && contributor.image.url)))
    this.metaTitle = moreData.metaTitle
    this.openGraphUrl = moreData.openGraphUrl

    this.getAuthorData = this.getAuthorData.bind(this)
  }

  getAuthorData(author: TransformedAuthor, type = 'author') {
    return author && {
      [`${ type }Image`]: author?.image || {},
      [`${ type }Link`]: linkResolver({ type: 'author', uid: author?.uid }),
      [`${ type }SocialNetworks`]: author?.socialNetworks?.filter(network => network.key === 'linkedin') || [],
    }
  }

  transformContributors(contributors: { link: FilledLinkToWebField, image: ImageField }[]) {
    return contributors.map(contributor => ({
      contributorLink: contributor.link || '',
      contributorImage: contributor?.image,
    }))
  }
}
