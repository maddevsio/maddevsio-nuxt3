import type { RuntimeConfig } from 'nuxt/schema'
import { BaseForm } from '~/components/Widgets/Form/classes/forms/BaseForm'
import type { IServiceForm, ServiceFormProps } from '~/components/Widgets/Form/interfaces/forms/IServiceForm'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'

export class ServiceForm extends BaseForm implements IServiceForm {
  config: RuntimeConfig
  formTitle: string
  formDescription: string
  buttons: FormBuilderReturnProps['buttons']

  constructor({
    formTitle = '',
    formDescription = '',
    formBuilder,
  }: ServiceFormProps) {
    super({ emailTitle: 'Cost Optimization form' })
    this.config = useRuntimeConfig()
    this.formID = 'service-form'
    this.formTitle = formTitle
    this.formDescription = formDescription
    this.fields = formBuilder.fields
    this.buttons = formBuilder.buttons
    this.radioButtonGroups = formBuilder.radioButtonGroups
    this.checkBoxes = formBuilder.checkBoxes
    this.formType = 'Cost Saving'
    this.addressBookId = Number(this.config.public.sendPulseAddressBooksId)
    this.successMessage = {
      ...this.successMessage,
      title: 'Thank you!',
      description: 'We will process your request and get back to you as soon as possible.',
    }

    this.onSubmitVerifiedForm = this.onSubmitVerifiedForm.bind(this)

    markRaw(this)
  }

  async onSubmitVerifiedForm({ token }: OnSubmitFromProps) {
    if (!this.validationBeforeSend(token)) { return }
    const location = `Form in Post: ${ document?.title }`
    try {
      await this.submitLead({
        templateId: this.templateId,
        subject: this.emailTitle,
        title: this.emailTitle,
        variables: this.collectData(),
      })
      if (this.checkBoxes!.newsLetter.checkboxValue.value) {
        // submitNewsletterSubscription.send(location)
        // smartlookSubmitNewsletter.send({ location })
      }
      // addUserType('lead')
      // submitPostForm.send(location)
      // smartlookSubmitPostForm.send({ location })
    } catch (e: any) {
      this.error.value = e
    }
  }
}
