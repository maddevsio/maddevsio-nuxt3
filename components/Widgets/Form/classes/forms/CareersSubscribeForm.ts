import axios from 'axios'
import type {
  CareersSubscribeFormProps, CareersSubscribePayload,
  ICareersSubscribeForm,
} from '~/components/Widgets/Form/interfaces/forms/ICareersSubscribeForm'
import { BaseForm } from '~/components/Widgets/Form/classes/forms/BaseForm'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import { parseUserAgentForLeads } from '~/components/Widgets/Form/helpers/parseUserAgentForLeads'
import { careersSubscriptionSubmitEvent } from '~/analytics/events'
import { addUserType } from '~/analytics/Event'

export class CareersSubscribeForm extends BaseForm implements ICareersSubscribeForm {
  type: string
  formTitle: string
  formDescription: string
  formLocation: string
  modalTitle: string
  selects: FormBuilderReturnProps['selects']
  buttons: FormBuilderReturnProps['buttons']

  constructor({
    formTitle = '',
    formDescription = '',
    formBuilder,
  }: CareersSubscribeFormProps) {
    super({ emailTitle: 'New vacancy category subscriber' })
    this.type = 'careers-subscribe-form'
    this.formTitle = formTitle
    this.templateId = 980321
    this.modalTitle = 'Mad Devs Website'
    this.formLocation = 'Careers Home Page'
    this.formDescription = formDescription
    this.successMessage = {
      ...this.successMessage,
      title: 'Thank you!',
      description: 'You’ll get an email once a new vacancy appears.',
      showSuccessfulMessage: true,
      showImage: true,
      imagePath: 'images/core/forms/success-message-checkmark.svg',
      imageAlt: 'Checkmark',
    }
    this.fields = formBuilder.fields
    this.checkBoxes = formBuilder.checkBoxes
    this.selects = formBuilder.selects
    this.buttons = formBuilder.buttons
  }

  async sendEmailData(payload: CareersSubscribePayload) {
    try {
      await axios.post('/api/subscribe-vacancies', payload)
    } catch (error: any) {
      this.error.value = error
    }
  }

  async onSubmitVerifiedForm({
    token,
  }: OnSubmitFromProps) {
    if (!this.validationBeforeSend(token)) {
      return
    }

    try {
      this.formSends.value = true
      const fieldsData = this.collectData()
      const dataFromStorage = localStorage.getItem('vacancy_subscriber')
      const subscriber = dataFromStorage ? JSON.parse(dataFromStorage) : {}
      if (fieldsData?.vacancyCategorySubscription in subscriber) {
        if (subscriber[fieldsData?.vacancyCategorySubscription] === fieldsData?.email) {
          this.selects.vacancyCategorySubscription.error.value = 'You are already subscribed to this category.'
          this.selects.vacancyCategorySubscription.alreadySelected.value = true
          this.formSends.value = false
          this.resetRecaptcha()
          return
        }
      }

      subscriber[fieldsData?.vacancyCategorySubscription] = fieldsData?.email
      localStorage.setItem('vacancy_subscriber', JSON.stringify(subscriber))

      const {
        userBrowser,
        userOS,
        userPlatform,
      } = parseUserAgentForLeads()

      const isSubscriberExists = this.checkSubscriberInLocalStorage(fieldsData?.email)
      if (fieldsData?.newsLetter === 'Yes' && !isSubscriberExists) {
        this.pushSubscriberToLocalStorage(fieldsData?.email)
      }

      await this.sendEmailData({
        token: fieldsData?.token,
        email: {
          templateId: this.templateId,
          variables: {
            type: this.type,
            fullName: fieldsData?.fullName,
            email: fieldsData?.email,
            vacancy_category: fieldsData?.vacancyCategorySubscription,
            subject: this.emailTitle,
            modalTitle: this.modalTitle,
            formLocation: this.formLocation,
            newsLetter: fieldsData?.newsLetter,
            alreadySubscribed: isSubscriberExists,
            userBrowser,
            userOS,
            userPlatform,
          },
        },
      })

      this.submitCareersSubscriptionToAnalytics()

      if (this.successMessage.showSuccessfulMessage) {
        this.successMessage.show.value = true
      }
      this.formSends.value = false
    } catch (e: any) {
      this.formSends.value = false
      this.error.value = e
    }
  }

  submitCareersSubscriptionToAnalytics() {
    addUserType('vacancy_subscriber')
    careersSubscriptionSubmitEvent.send(this.formLocation)
  }
}
