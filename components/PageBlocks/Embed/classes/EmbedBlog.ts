import type { EmbedField } from '@prismicio/types'
import type { Ref } from 'vue'
import type { Embed, EmbedBlogProps, IEmbedBlog } from '~/components/PageBlocks/Embed/interfaces/IEmbedBlog'

export class EmbedBlog implements IEmbedBlog {
  item: Embed | null

  embedImage: {
    url: string
    width: number
    height: number
  }

  embedFieldData: Ref<EmbedField & { html: string } | undefined>
  isTag: {
    is: string
    target?: string
    href?: string | undefined
    class: string
  }

  constructor(props: EmbedBlogProps) {
    this.item = Object.keys(props.items[0].embed).length ? props.items[0] : null
    this.embedImage = {
      url: !props.items[0].embed?.embed_url?.includes('sir-john-monash-centre') ? `${ props.items[0]?.embed?.thumbnail_url }?w=400&h=218` : 'https://images.prismic.io/superpupertest/6b7fea0c-453b-4259-8b16-44d24b78076f_sjmc-case.png?w=400&h218',
      width: 200,
      height: 109,
    }

    this.embedFieldData = ref()
    // @ts-ignore
    this.isTag = props.items[0].embed?.type === 'link'
      ? {
        is: 'a',
        target: '_self',
        href: props.items[0].embed?.url,
        class: `embed__${ props.items[0].embed?.type }`,
      }
      : {
        is: 'div',
        class: `embed__${ props.items[0].embed?.type }`,
      }

    this.onResize = this.onResize.bind(this)
    this.setRawEmbed = this.setRawEmbed.bind(this)
    this.setEmbedWithVideo = this.setEmbedWithVideo.bind(this)
  }

  onResize() {
    if (this.item && this.item?.embed?.type === 'link') {
      const changeEmbedImage = (urlParams: string, width: number, height: number) => {
        this.embedImage.url = `${ this.item?.embed?.thumbnail_url }?${ urlParams }`
        this.embedImage.width = width
        this.embedImage.height = height
      }
      if (window && window.innerWidth < 1024) { changeEmbedImage('w=1164&h=632', 582, 316) } else { changeEmbedImage('w=400&h=218', 200, 109) }
    }
  }

  setRawEmbed() {
    if (this.item) {
      const {
        embed: {
          title: rawTitle,
          html: rawHtml,
        },
        // @ts-ignore
        embedTitle,
        // @ts-ignore
        embedDescription,
      } = this.item

      const matchDescription = rawHtml!.match('<p>(.*?)</p>')
      const description = matchDescription ? matchDescription[1] || '' : ''

      const html = `
        <div class="embed__title">${ embedTitle || rawTitle!.split(' | ')[0] }</div>
        <p class="embed__description">${ embedDescription || description }</p>
      `

      // @ts-ignore
      this.embedFieldData.value = {
        ...this.item.embed,
        html,
      }
    }
  }

  setEmbedWithVideo() {
    if (this.item) {
      const {
        embed: {
          html: rawHtml,
        },
      } = this.item

      const html = rawHtml!
        .replace(/height="[0-9]*"/, 'height="500"')
        .replace(/width="[0-9]*"/, 'width="100%"')

      // @ts-ignore
      this.embedFieldData.value = {
        ...this.item?.embed,
        html,
      }
    }
  }
}
