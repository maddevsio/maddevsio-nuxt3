import type { Ref } from 'vue'
import type { ImageField, RichTextField } from '@prismicio/client'
import type { PrismicPlugin } from '@prismicio/vue'

export interface ImageCaptionBlogProps {
  primary: {
    enablezoom?: string
    enable_zoom?: string
    image: ImageField
    initial_size: boolean
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
  zoomProperty: string | undefined
  isEnableZoom: boolean
  initialSize: boolean
  imageDimensions: {
    imageHeight: number | string
    imageWidth: number
  }
  caption: string | RichTextField
  image: ImageField
  openModal(): void
  getImage(): ImageField
  getImageDimensions(props: { containerSize: number, image: ImageField, initialSize: boolean }): ImageDimensions
  getCaption($prismic: PrismicPlugin): string
}
