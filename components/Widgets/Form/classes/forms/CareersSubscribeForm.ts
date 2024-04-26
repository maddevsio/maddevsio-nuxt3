import type {
  CareersSubscribeFormProps,
  ICareersSubscribeForm,
} from '~/components/Widgets/Form/interfaces/forms/ICareersSubscribeForm'
import { BaseForm } from '~/components/Widgets/Form/classes/forms/BaseForm'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'

export class CareersSubscribeForm extends BaseForm implements ICareersSubscribeForm {
  type: string
  formTitle: string
  formDescription: string
  buttons: FormBuilderReturnProps['buttons']

  constructor({
    formTitle = '',
    formDescription = '',
    formBuilder,
  }: CareersSubscribeFormProps) {
    super({ emailTitle: 'Create new vacancy subscriber' })
    this.type = 'careers-subscribe-form'
    this.formTitle = formTitle
    this.formDescription = formDescription
    this.successMessage = {
      ...this.successMessage,
      title: 'Thank you!',
      description: '',
      showSuccessfulMessage: true,
      showImage: true,
      imagePath: 'images/core/forms/success-message-hand.svg',
      imageAlt: 'Checkmark',
    }
    this.fields = formBuilder.fields
    this.checkBoxes = formBuilder.checkBoxes
    this.buttons = formBuilder.buttons
  }
}
