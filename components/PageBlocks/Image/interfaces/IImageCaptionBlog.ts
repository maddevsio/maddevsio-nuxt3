import type { Ref } from 'vue'
import type { ImageField, RichTextField } from '@prismicio/client'
import type { PrismicPlugin } from '@prismicio/vue'

export interface ImageCaptionBlogProps {
  primary: {
    enablezoom: string
    image: ImageField
    caption: string | RichTextField
  }
  containerSize?: string | number
}

export interface ImageDimensions {
  imageHeight: number | string
  imageWidth: number
}

export interface IImageCaptionBlog {
  defaultContainerSize: number
  zoom: Ref<{ show(): void } | null>
  isEnableZoom: boolean
  imageDimensions: {
    imageHeight: number | string
    imageWidth: number
  }
  caption: string | RichTextField
  image: ImageField
  openModal(): void
  getImage(): ImageField
  getImageDimensions(props: { containerSize: number, image: ImageField }): ImageDimensions
  getCaption($prismic: PrismicPlugin): string
}
