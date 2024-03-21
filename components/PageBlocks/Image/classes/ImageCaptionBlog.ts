import type { Ref } from 'vue'
import type { ImageField, RichTextField } from '@prismicio/client'
import type { PrismicPlugin } from '@prismicio/vue'
import type {
  IImageCaptionBlog,
  ImageCaptionBlogProps,
} from '~/components/PageBlocks/Image/interfaces/IImageCaptionBlog'
import { manageScrollOnBody } from '~/utils/manageScrollOnBody'

export class ImageCaptionBlog implements IImageCaptionBlog {
  zoom: Ref<{ show(): void } | null>
  isEnableZoom: boolean
  caption: string | RichTextField
  image: ImageField
  imageDimensions: {
    imageHeight: number | string
    imageWidth: number
  }

  defaultContainerSize = 680

  constructor(props: ImageCaptionBlogProps) {
    this.zoom = ref(null)
    this.isEnableZoom = props.primary.enablezoom === null ? true : props.primary.enablezoom === 'enable'
    this.imageDimensions = this.getImageDimensions({
      containerSize: Number(props?.containerSize) || this.defaultContainerSize,
      image: props.primary.image,
    })
    this.caption = props.primary.caption
    this.image = props.primary.image

    this.openModal = this.openModal.bind(this)
    this.getImage = this.getImage.bind(this)
    this.getImageDimensions = this.getImageDimensions.bind(this)
    this.getCaption = this.getCaption.bind(this)
  }

  openModal() {
    if (this.isEnableZoom && this.zoom.value) {
      manageScrollOnBody.disableScrollOnBody()
      this.zoom.value.show()
    }
  }

  getImageDimensions({ containerSize, image }: { containerSize: number, image: ImageField }) {
    if (!image?.dimensions) { return { imageHeight: 0, imageWidth: 0 } }
    const dimensionWidth = image.dimensions.width
    const dimensionHeight = image.dimensions.height
    const proportion = dimensionWidth / dimensionHeight
    return {
      imageHeight: proportion ? (containerSize / proportion).toFixed(3) : dimensionHeight,
      imageWidth: containerSize,
    }
  }

  getImage() {
    return {
      ...this.image,
      url: this.image.url!.endsWith('.svg') || this.image.url!.endsWith('.gif') ? this.image.url : `${ this.image.url }&w=${ this.imageDimensions.imageWidth }&h=${ this.imageDimensions.imageHeight }&dpr=2`,
    } as ImageField
  }

  getCaption($prismic: PrismicPlugin) {
    return (typeof this.caption === 'string' ? this.caption : $prismic.asText(this.caption))
  }
}
