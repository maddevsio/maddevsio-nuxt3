import type { RichTextField } from '@prismicio/types'

export interface GridWithAnimationOptionCard {
  title: string
  titleTag: string
  content: RichTextField
  lottieAnimation: string
  lottieHeight: string
  lottiePosition: string
  width: string | null
  height: string | null
  background: string
  alignText: string
  fullWidth: boolean | string
  classNameWithoutLottie?: string
}

export interface GridWithAnimationOptionProps {
  items: GridWithAnimationOptionCard[]
}

export interface IGridWithAnimationOption {
  cards: GridWithAnimationOptionCard[]
  checkAvailableData(gridData: GridWithAnimationOptionCard[]): GridWithAnimationOptionCard[]
}
