import axios from 'axios'
import { BaseForm } from '~/components/Widgets/Form/classes/forms/BaseForm'
import { checklistSubmitEvent } from '~/analytics/events'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { ChecklistFormProps, IChecklistForm } from '~/components/Widgets/Form/interfaces/forms/IChecklistForm'
import type { SendEmailPayload } from '~/components/Widgets/Form/interfaces/forms/FormTypes'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'

export class ChecklistForm extends BaseForm implements IChecklistForm {
  type: string
  marketingSendpulseTemplateID: number
  buttons: FormBuilderReturnProps['buttons']
  formLocation: string
  sendpulseTemplateID: number
  checklistPathOnS3: string
  checklistName: string
  subject: string
  isModalChecklist: boolean

  constructor({
    formBuilder,
    formLocation,
    sendpulseTemplateID,
    checklistPathOnS3,
    checklistName,
    isModalChecklist,
  }: ChecklistFormProps) {
    super({ emailTitle: `Request a PDF file from the ${ checklistName || 'Checklist' } page` })
    this.type = 'checklist'
    this.marketingSendpulseTemplateID = 953955
    this.fields = formBuilder.fields
    this.buttons = formBuilder.buttons
    this.formLocation = formLocation
    this.sendpulseTemplateID = sendpulseTemplateID
    this.checklistPathOnS3 = checklistPathOnS3
    this.checklistName = checklistName
    this.subject = `Request a PDF file from the ${ checklistName || 'Checklist' } page`
    this.baseEmailTitle = 'Checklist downloads from MD website'
    this.successMessage = {
      ...this.successMessage,
      title: 'Thank you!',
      description: 'The PDF file was successfully sent to your email.',
      showSuccessfulMessage: true,
      showImage: true,
      imagePath: 'images/core/forms/success-message-hand.svg',
      imageAlt: 'Hand',
    }
    this.isModalChecklist = isModalChecklist

    this.onSubmitVerifiedForm = this.onSubmitVerifiedForm.bind(this)
  }

  async sendEmail(payload: SendEmailPayload) {
    try {
      await axios.post('/api/send-checklist', payload)
    } catch (error) {
      return error
    }
  }

  async onSubmitVerifiedForm({
    token,
    $eventBus,
  }: OnSubmitFromProps) {
    if (!this.validationBeforeSend(token)) { return }
    if (!this.sendpulseTemplateID || !this.checklistPathOnS3 || !this.checklistName) {
      this.error.value = 'The required parameters for sending a checklist are not passed to the CMS.'
      return
    }

    const emailForSuccessMessage = this.fields!.email.fieldValue.value

    this.successMessage.description = `The PDF file was successfully sent to your email ${ emailForSuccessMessage }.`

    try {
      await this.sendEmail({
        body: {
          email: {
            templateId: Number(this.sendpulseTemplateID),
            variables: {
              modalTitle: 'Mad Devs Team',
              subject: `Your "${ this.checklistName }" Checklist by Mad Devs`,
              emailTo: this.fields!.email.fieldValue.value,
              checklistName: this.checklistName,
              checklistPathOnS3: this.checklistPathOnS3,
            },
          },
        },
      })

      await this.submitLead({
        templateId: this.marketingSendpulseTemplateID,
        title: this.emailTitle,
        subject: this.subject,
        formLocation: this.formLocation,
        variables: {
          ...this.collectData(),
          checklistName: this.checklistName,
          type: this.type,
        },
      })

      this.submitChecklistToAnalytics()
      this.resetForm()

      if (this.isModalChecklist) {
        $eventBus.$emit('success-send', this.successMessage.show.value)
      }
    } catch (e: any) {
      this.error.value = e
    }
  }

  submitChecklistToAnalytics() {
    checklistSubmitEvent.send(this.formLocation)

    // @ts-ignore
    if (window.lintrk) {
      // @ts-ignore
      window.lintrk('track', { conversion_id: 18316833 })
    }
  }
}
