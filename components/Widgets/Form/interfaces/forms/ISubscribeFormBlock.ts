import type { Ref } from 'vue'

export type TitleClass = string | { [className: string]: boolean };

export interface SubscribeFormBlockProps {
  colorTheme: string
  options: {
    formLocation?: string
    formMaxWidth?: string
    bigTitle?: boolean
    mediumTitle?: boolean
    showButton?: boolean
    showBackgroundImage?: boolean
    submitButtonSizeInPercentage?: number
    lineBreakForSuccess?: boolean
    lineBreakForLink?: boolean
  }
}

export interface ISubscribeFormBlock {
  title: string
  colorTheme: string
  isActive: Ref<boolean>
  formLocation: string
  formMaxWidth: string
  bigTitle: boolean
  mediumTitle: boolean
  showButton: boolean
  showBackgroundImage: boolean
  submitButtonSizeInPercentage: number
  lineBreakForSuccess: boolean
  lineBreakForLink: boolean
  titleClasses: TitleClass[]
  linkClasses: string
  setIsActive(): void
  showSubscribeForm(): void
}
