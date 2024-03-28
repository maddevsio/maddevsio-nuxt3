import type { Ref } from 'vue'
import type {
  IImageWithCaption,
  ImageWithCaptionProps,
} from '~/components/PageBlocks/Image/interfaces/IImageWithCaption'

export class ImageWithCaption implements IImageWithCaption {
  slice: ImageWithCaptionProps
  containerSize: string
  videoUrl: string
  videoSpeed: number

  constructor(props: ImageWithCaptionProps) {
    this.slice = this.setImageWithoutCrop(this.checkProperties(props))
    this.containerSize = this.setContainerSize(props.primary.containerSize || '816')
    this.videoUrl = props.primary.linkToVideo.url!
    this.videoSpeed = props.primary.videoSpeed || 1

    this.openFullScreenVideo = this.openFullScreenVideo.bind(this)
  }

  setContainerSize(size: string) {
    switch (size) {
    case '816':
      return 'small'
    case '1240':
      return 'big'
    default:
      return 'small'
    }
  }

  setImageWithoutCrop(sliceData: ImageWithCaptionProps) {
    if (sliceData.primary.image.url) {
      if (sliceData.primary.image.url.includes('.gif?')) {
        sliceData.primary.image.url = sliceData.primary.image.url.replace('?auto=compress,format', '')
      } else {
        sliceData.primary.image.url = sliceData.primary.image.url.replace('compress,', '')
      }
    }
    return sliceData
  }

  checkProperties(slice: ImageWithCaptionProps) {
    slice.primary.enablezoom = slice.primary.enablezoom || 'enable'
    slice.primary.backgroundColor = slice.primary.backgroundColor || 'white'
    return slice
  }

  async openFullScreenVideo(video: Ref<HTMLVideoElement>) {
    if (video.value) {
      if (video.value.requestFullscreen) {
        await video.value.requestFullscreen()
        // @ts-ignore
      } else if (video.value.mozRequestFullScreen) {
        // @ts-ignore
        await video.value.mozRequestFullScreen()
        // @ts-ignore
      } else if (video.value.webkitRequestFullscreen) {
        // @ts-ignore
        await video.value.webkitRequestFullscreen()
        // @ts-ignore
      } else if (video.value.msRequestFullscreen) {
        // @ts-ignore
        await video.value.msRequestFullscreen()
      }
    }
  }
}
