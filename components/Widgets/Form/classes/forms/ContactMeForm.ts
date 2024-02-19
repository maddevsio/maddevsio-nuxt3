import type { RuntimeConfig } from 'nuxt/schema'
import { BaseForm } from '~/components/Widgets/Form/classes/forms/BaseForm'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type {
  ContactMeFromProps,
  IContactMeForm,
  OnSubmitFromProps,
} from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import { addUserType } from '~/analytics/Event'
import { contactMeSubmitEvent } from '~/analytics/events'
import { smartlookSubmitContactMe } from '~/analytics/smartlookEvents'

export class ContactMeForm extends BaseForm implements IContactMeForm {
  formTitle: string
  buttons: FormBuilderReturnProps['buttons']
  formLocation: string
  config: RuntimeConfig

  constructor({
    formTitle = '',
    formBuilder,
    formLocation,
    emailSubject,
  }: ContactMeFromProps) {
    super({ emailTitle: emailSubject })
    this.config = useRuntimeConfig()
    this.formID = 'contact-me'
    this.formTitle = formTitle
    this.fields = formBuilder.fields
    this.buttons = formBuilder.buttons
    this.textarea = formBuilder.textarea
    this.radioButtonGroups = formBuilder.radioButtonGroups
    this.checkBoxes = formBuilder.checkBoxes
    this.formLocation = formLocation
    this.addressBookId = Number(this.config.public.sendPulseAddressBooksId)
    this.successMessage = {
      ...this.successMessage,
      title: 'Thank you!',
      description: 'We will process your request and get back to you as soon as possible.',
      showSuccessfulMessage: false,
    }

    this.onSubmitVerifiedForm = this.onSubmitVerifiedForm.bind(this)
    this.submitToAnalytics = this.submitToAnalytics.bind(this)
  }

  async onSubmitVerifiedForm({
    token,
    router,
    route,
    $eventBus,
  }: OnSubmitFromProps) {
    if (!this.validationBeforeSend(token)) { return }
    const location = this.formLocation
    try {
      await this.submitLead({
        templateId: this.templateId,
        subject: this.emailTitle,
        title: this.emailTitle,
        variables: this.collectData(),
      })
      this.submitNewsletterSubscriptionToAnalytics(location)
      this.submitToAnalytics(location)
      $eventBus.$emit('modal-close', this.resetRecaptcha)
      await this.redirectToSuccessAndFaq(router!, route)
    } catch (e: any) {
      this.error.value = e
    }
  }

  submitToAnalytics(location: string) {
    addUserType('lead')
    contactMeSubmitEvent.send(location)
    smartlookSubmitContactMe.send({ location })
  }
}
