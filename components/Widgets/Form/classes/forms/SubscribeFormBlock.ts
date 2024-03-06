import type { Ref } from 'vue'
import type { SelectField } from '@prismicio/client'
import type {
  ISubscribeFormBlock,
  SubscribeFormBlockProps,
  TitleClass,
} from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'

export class SubscribeFormBlock implements ISubscribeFormBlock {
  colorTheme: string | SelectField
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

  title = 'Subscribe to our monthly Newsletter'

  constructor({ colorTheme, options }: SubscribeFormBlockProps) {
    this.colorTheme = colorTheme || 'white'
    this.isActive = ref(false)
    this.formLocation = options.formLocation || 'Unknown'
    this.formMaxWidth = options.formMaxWidth || '199px'
    this.bigTitle = options.bigTitle || false
    this.mediumTitle = options.mediumTitle || false
    this.showButton = options.showButton || false
    this.showBackgroundImage = options.showBackgroundImage || false
    this.submitButtonSizeInPercentage = options.submitButtonSizeInPercentage || 30
    this.lineBreakForSuccess = options.lineBreakForSuccess || false
    this.lineBreakForLink = options.lineBreakForLink || false

    this.titleClasses = [
      'subscribe-form-block__title',
      {
        'subscribe-form-block__title--big': this.bigTitle,
        'subscribe-form-block__title--medium': this.mediumTitle,
      },
      this.colorTheme === 'black' ? 'subscribe-form-block__title--dark-theme' : 'subscribe-form-block__title--light-theme']

    this.linkClasses = this.colorTheme === 'black' ? 'subscribe-form-block__link--dark-theme' : 'subscribe-form-block__link--light-theme'

    this.setIsActive = this.setIsActive.bind(this)
    this.showSubscribeForm = this.showSubscribeForm.bind(this)

    markRaw(this)
  }

  showSubscribeForm() {
    this.isActive.value = !this.isActive.value
  }

  setIsActive() {
    if (!this.showButton) { this.isActive.value = true }
  }
}
