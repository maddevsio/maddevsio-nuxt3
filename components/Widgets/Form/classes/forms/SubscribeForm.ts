import { BaseForm } from '~/components/Widgets/Form/classes/forms/BaseForm'
import { submitNewsletterSubscription } from '~/analytics/events'
import { smartlookSubmitNewsletter } from '~/analytics/smartlookEvents'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { ISubscribeForm, SubscribeFormProps } from '~/components/Widgets/Form/interfaces/forms/ISubscribeForm'

export class SubscribeForm extends BaseForm implements ISubscribeForm {
  subject: string
  formTitle: string
  formLocation: string
  lineBreakForSuccess: string
  buttons: FormBuilderReturnProps['buttons']

  type = 'subscribe-form'

  constructor({
    templateId,
    formTitle = '',
    formBuilder,
    formLocation,
    lineBreakForSuccess,
  }: SubscribeFormProps) {
    super({ emailTitle: 'Create new newsletter subscriber' })
    this.templateId = templateId
    this.subject = 'Create new newsletter subscriber'
    this.baseEmailTitle = 'New Lead from MD website'
    this.formID = 'subscribe-form'
    this.type = 'subscribe-form'
    this.formTitle = formTitle
    this.formLocation = formLocation
    this.lineBreakForSuccess = lineBreakForSuccess ? '<br>' : ''
    this.fields = formBuilder.fields
    this.buttons = formBuilder.buttons
    this.successMessage = {
      ...this.successMessage,
      title: '',
      description: `You are successfully subscribed!
      Thank you! ${ this.lineBreakForSuccess }
      The newsletter will be sent on the first Tuesday of the month.`,
      showSuccessfulMessage: true,
    }

    this.onSubmitVerifiedForm = this.onSubmitVerifiedForm.bind(this)
    markRaw(this)
  }

  async onSubmitVerifiedForm({
    token,
  }: OnSubmitFromProps) {
    if (!this.validationBeforeSend(token)) { return }
    try {
      let subscriber: string[] = []
      if (localStorage.getItem('newsLetter_subscriber')) {
        subscriber = JSON.parse(localStorage.getItem('newsLetter_subscriber')!) || []
      }
      const location = `${ this.formLocation }: ${ document.title }`
      subscriber.push(this.fields!.email.fieldValue.value)
      localStorage.setItem('newsLetter_subscriber', JSON.stringify(subscriber))

      await this.submitLead({
        templateId: this.templateId,
        subject: this.emailTitle,
        title: this.emailTitle,
        variables: {
          ...this.collectData(),
          formLocation: location,
          newsLetter: 'Yes',
          type: this.type,
          addressBooksId: Number(this.templateId),
        },
      })

      this.submitNewsletterSubscriptionToAnalytics(location)
    } catch (e: any) {
      this.error.value = e
    }
  }

  submitNewsletterSubscriptionToAnalytics(location: string) {
    submitNewsletterSubscription.send(location)
    smartlookSubmitNewsletter.send({ location })
  }
}
