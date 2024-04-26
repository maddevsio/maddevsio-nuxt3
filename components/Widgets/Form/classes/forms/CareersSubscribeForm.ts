import axios from 'axios'
import type {
  CareersSubscribeFormProps,
  ICareersSubscribeForm,
} from '~/components/Widgets/Form/interfaces/forms/ICareersSubscribeForm'
import { BaseForm } from '~/components/Widgets/Form/classes/forms/BaseForm'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { SendEmailPayload } from '~/components/Widgets/Form/interfaces/forms/FormTypes'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'

export class CareersSubscribeForm extends BaseForm implements ICareersSubscribeForm {
  type: string
  formTitle: string
  formDescription: string
  selects: FormBuilderReturnProps['selects']
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
    this.selects = formBuilder.selects
    this.buttons = formBuilder.buttons
  }

  async sendEmail(payload: SendEmailPayload) {
    try {
      await axios.post('/api/subscribe-vacancies', payload)
    } catch (error: any) {
      this.error.value = error
    }
  }

  async onSubmitVerifiedForm({
    token,
    route,
    $eventBus,
  }: OnSubmitFromProps) {
    if (!this.validationBeforeSend(token)) { }
  }
}
