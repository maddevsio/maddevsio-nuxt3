import type { EmbedField } from '@prismicio/types'
import type { Ref } from 'vue'

export interface Embed {
  embed: EmbedField & {
    type: string
    thumbnail_url: string
  }
}

export interface EmbedBlogProps {
  items: Embed[]
}

export interface IEmbedBlog {
  item: Embed | null
  embedImage: {
    url: string
    width: number
    height: number
  }
  embedFieldData: Ref<EmbedField & { html: string } | undefined>
  isTag: {
    is: string
    target?: string | undefined
    href?: string | undefined
    class: string
  }
  onResize(): void
  setRawEmbed(): void
  setEmbedWithVideo(): void
}
