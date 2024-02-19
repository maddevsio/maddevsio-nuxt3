import type { Ref } from 'vue'
import type { ImageField } from '@prismicio/client'
import type { ImageCaptionBlogProps } from '~/components/PageBlocks/Image/interfaces/IImageCaptionBlog'

export interface ImageWithCaptionProps {
  primary: ImageCaptionBlogProps['primary'] & {
    linkToVideo: ImageField
    videoSpeed: number
    containerSize?: string
    backgroundColor?: string
  }
}

export interface IImageWithCaption {
  slice: ImageWithCaptionProps
  containerSize: string
  videoUrl: string
  videoSpeed: number
  openFullScreenVideo(video: Ref<HTMLVideoElement>): void
}
