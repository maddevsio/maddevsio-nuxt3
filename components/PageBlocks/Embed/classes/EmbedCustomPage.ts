import type { EmbedCustomPageProps, IEmbedCustomPage } from '~/components/PageBlocks/Embed/interfaces/IEmbedCustomPage'
import type { EmbedBlogProps } from '~/components/PageBlocks/Embed/interfaces/IEmbedBlog'

export class EmbedCustomPage implements IEmbedCustomPage {
  slice: EmbedBlogProps

  constructor(props: EmbedCustomPageProps) {
    this.slice = props
  }
}
