import axios from 'axios'
import { BaseForm } from '~/components/Widgets/Form/classes/forms/BaseForm'
import type { FormBuilderReturnProps, IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type {
  OnSubmitFromProps,
} from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import { addUserType } from '~/analytics/Event'
import { feedBackFormSubmitEvent } from '~/analytics/events'
import type { IFeedbackForm } from '~/components/Widgets/Form/interfaces/forms/IFeedbackForm'
import type { SendFeedbackEmail } from '~/components/Widgets/Form/interfaces/forms/FormTypes'

interface FeedbackFormProps {
  formBuilder: IFormBuilder['props']
  formLocation: string
  emailSubject: string
  formID: string
  successMessageTitle: string
  successMessageDescription: string
}

export class FeedbackForm extends BaseForm implements IFeedbackForm {
  buttons: FormBuilderReturnProps['buttons']
  formLocation: string

  constructor({
    formBuilder,
    formLocation,
    emailSubject,
    formID,
    successMessageTitle,
    successMessageDescription,
  }: FeedbackFormProps) {
    super({ emailTitle: emailSubject })
    this.formID = formID || 'feedback-form'
    this.fields = formBuilder.fields
    this.buttons = formBuilder.buttons
    this.textarea = formBuilder.textarea
    this.formLocation = formLocation
    this.successMessage = {
      ...this.successMessage,
      title: successMessageTitle || 'Thank you!',
      description: successMessageDescription || 'We will process your feedback and get back to you as soon as possible.',
      showSuccessfulMessage: true,
      showImage: true,
      imagePath: 'images/core/forms/success-message-hand.svg',
      imageAlt: 'Hand',
    }

    this.onSubmitVerifiedForm = this.onSubmitVerifiedForm.bind(this)
    this.submitToAnalytics = this.submitToAnalytics.bind(this)
  }

  async onSubmitVerifiedForm({
    token,
  }: OnSubmitFromProps) {
    this.formSends.value = true
    if (!this.validationBeforeSend(token)) {
      this.formSends.value = false
      return
    }
    const location = this.formLocation
    try {
      await this.sendEmail({
        feedback: this.textarea!.feedback.fieldValue.value,
        fullName: this.fields!.fullName.fieldValue.value,
        email: this.fields!.email.fieldValue.value,
        subject: this.emailTitle,
        token,
      })
      this.submitToAnalytics(location)
      if (this.successMessage.showSuccessfulMessage) {
        this.successMessage.show.value = true
      }
      this.resetForm()
      this.formSends.value = false
    } catch (e: any) {
      this.error.value = e
      this.formSends.value = false
    }
  }

  async sendEmail(payload: SendFeedbackEmail) {
    try {
      await axios.post('/api/send-feedback-email', payload)
    } catch (error: any) {
      this.error.value = error
    }
  }

  submitToAnalytics(location: string) {
    addUserType('feedback')
    feedBackFormSubmitEvent.send(location)
  }
}
