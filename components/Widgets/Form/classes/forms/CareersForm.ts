import axios from 'axios'
import type { Ref } from 'vue'
import { BaseForm } from '~/components/Widgets/Form/classes/forms/BaseForm'
import type { CareersFormProps, ICareersForm } from '~/components/Widgets/Form/interfaces/forms/ICareersForm'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import { parseUserAgentForLeads } from '~/components/Widgets/Form/helpers/parseUserAgentForLeads'
import { addUserType } from '~/analytics/Event'
import { submitCvFormEvent } from '~/analytics/events'
import { smartlookSubmitCv } from '~/analytics/smartlookEvents'

export class CareersForm extends BaseForm implements ICareersForm {
  formTitle: string
  buttons: FormBuilderReturnProps['buttons']
  formLocation: string
  vacancyPosition: string
  errorModal: Ref<any>

  constructor({
    formBuilder,
    vacancyPosition,
  }: CareersFormProps) {
    super({ emailTitle: '' })
    this.templateId = 848895
    this.formID = 'careers-form'
    this.formTitle = 'Tell us about yourself'
    this.fields = formBuilder.fields
    this.buttons = formBuilder.buttons
    this.radioButtonGroups = formBuilder.radioButtonGroups
    this.formLocation = '\'I want to work for Mad Devs\' button, vacancy page'
    this.vacancyPosition = vacancyPosition
    this.successMessage = {
      ...this.successMessage,
      title: 'Your resume has been sent!',
      description: 'It is stored in our database of candidates.',
      showSuccessfulMessage: true,
      showImage: true,
      imagePath: 'images/core/forms/success-message-hand.svg',
      imageAlt: 'Hand',
    }
    this.errorModal = ref(null)
  }

  async onSubmitVerifiedForm({
    token,
    route,
  }: OnSubmitFromProps) {
    this.formSends.value = true
    if (this.fields?.cvFile && this.fields?.linkedin) {
      this.fields.cvFile.required = !this.fields.linkedin.fieldValue.value
      this.fields.linkedin.required = !this.fields.cvFile.fieldValue.value
      if (this.fields.cvFile.fieldValue.value) {
        this.fields.linkedin.fieldValue.value = 'No'
      }
    }
    if (!this.validationBeforeSend(token)) { return }
    try {
      const fieldsData = this.collectData()
      const payload = this.buildApplicantData(fieldsData)

      await this.sendVacancy(payload)
      this.sendCareersAnalytics(this.vacancyPosition)
      this.resetRecaptcha()
      this.resetForm()
      if (this.successMessage.showSuccessfulMessage) {
        this.successMessage.show.value = true
      }
      this.formSends.value = false
    } catch (error: any) {
      if (this.errorModal.value && this.errorModal.value.show) {
        this.errorModal.value.show()
      }
      await catchAndSendError({
        route,
        error: JSON.stringify(error),
        from: 'формы вакансий',
      })
      this.error.value = error
      this.formSends.value = false
    }
  }

  buildApplicantData(fieldsValue: any) {
    const {
      userBrowser,
      userOS,
      userPlatform,
    } = parseUserAgentForLeads()

    return {
      body: {
        token: fieldsValue.token,
        email: {
          type: 'careers-form',
          templateId: 848895, // Required
          variables: {
            fullName: fieldsValue.fullName,
            email: fieldsValue.email,
            linkedinProfile: fieldsValue.linkedin || 'No',
            positionTitle: this.vacancyPosition,
            phoneNumber: fieldsValue.phoneNumber,
            subject: `Job Candidate Application for ${ this.vacancyPosition }`,
            modalTitle: 'Mad Devs Website Careers Form',
            pageUrl: (window && window.location.href) || 'Unknown',
            userBrowser,
            userOS,
            userPlatform,
            formLocation:
              '\'I want to work for Mad Devs\' button, vacancy page',
          },

          attachment: {
            base64: null,
            name: fieldsValue.cvFile.name,
          },
        },
      },

      cvFile: fieldsValue.cvFile,
    }
  }

  async sendVacancy(payload: any) {
    const formData = new FormData()
    formData.append('cvFile', payload.cvFile)
    formData.append('payload', JSON.stringify(payload.body))
    await axios.post('/api/careers', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  sendCareersAnalytics(position: string) {
    addUserType('hr_candidate')
    submitCvFormEvent.send()
    smartlookSubmitCv.send({ location: position })
  }
}
