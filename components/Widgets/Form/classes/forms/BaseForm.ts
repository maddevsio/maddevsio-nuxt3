import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import axios from 'axios'
import type { RuntimeConfig } from 'nuxt/schema'
import type { BaseFormPayload, IBaseForm, SubmitLeadProps } from '~/components/Widgets/Form/interfaces/forms/IBaseForm'
import { parseUserAgentForLeads } from '~/components/Widgets/Form/helpers/parseUserAgentForLeads'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import { submitNewsletterSubscription } from '~/analytics/events'
import { smartlookSubmitNewsletter } from '~/analytics/smartlookEvents'

export class BaseForm implements IBaseForm {
  private token = ref('')

  private expired = ref(false)

  private verified = ref(false)

  private sleepTimer = 700 // in ms

  formID: string = ''
  payload: BaseFormPayload = {}
  reCaptchaSiteKey: string
  templateId: number = 686633
  formType: string = 'Software development'
  emailTitle: string = 'Contact Me form'
  addressBookId: number
  recaptchaRef: Ref<any> = ref(null)
  successMessage = {
    show: ref(false),
    title: '',
    description: '', // It could contain HTML elements, but it should be inline ones (like <br>, <span>, <em> etc.). That's because parent element is <p>.
    showSuccessfulMessage: true,
    showImage: false,
    imagePath: '',
    imageAlt: '',
  }

  error: Ref<string> = ref('')
  fields?: FormBuilderReturnProps['fields']
  radioButtonGroups?: FormBuilderReturnProps['radioButtonGroups']
  checkBoxes?: FormBuilderReturnProps['checkBoxes']
  textarea?: FormBuilderReturnProps['textarea']
  selects?: FormBuilderReturnProps['selects']
  formSends: Ref<boolean> = ref(false)
  config: RuntimeConfig

  baseEmailTitle = 'New Lead from MD website'

  constructor({ emailTitle }: { emailTitle?: string }) {
    this.config = useRuntimeConfig()
    this.reCaptchaSiteKey = this.config.public.reCaptchaSiteKey
    this.addressBookId = Number(this.config.public.sendPulseAddressBooksId)
    this.emailTitle = emailTitle || this.emailTitle
    this.onError = this.onError.bind(this)
    this.onExpired = this.onExpired.bind(this)
    this.requestRecaptcha = this.requestRecaptcha.bind(this)
    this.resetRecaptcha = this.resetRecaptcha.bind(this)
    this.getArrayFormElements = this.getArrayFormElements.bind(this)
    this.validationBeforeSend = this.validationBeforeSend.bind(this)
    this.validationFormElementsBeforeSend = this.validationFormElementsBeforeSend.bind(this)
    this.redirectToSuccessAndFaq = this.redirectToSuccessAndFaq.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.submitNewsletterSubscriptionToAnalytics = this.submitNewsletterSubscriptionToAnalytics.bind(this)
  }

  async submitLead({
    templateId,
    title = 'Individuals',
    subject = 'Marketing',
    variables,
  }: SubmitLeadProps) {
    if (!templateId) { throw new Error('Template ID was not provided') }
    if (this.error.value) { return }

    try {
      this.formSends.value = true
      const { userBrowser, userOS, userPlatform } = parseUserAgentForLeads()

      this.payload = {
        templateId,
        type: variables?.type, // ebook-form, subscribe-form or another
        variables: {
          subject,
          modalTitle: title ? `${ this.baseEmailTitle } - ${ title }` : this.baseEmailTitle,
          projectDescriber: variables?.description,
          agreeToGetMadDevsDiscountOffers: variables?.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
          agreeWithPrivacyPolicy: variables?.agreeWithPrivacyPolicy ? 'Yes' : 'No',
          consent_to_mailing: variables?.consent_to_mailing || variables?.newsLetter,
          formLocation: variables?.formLocation,
          interest: variables?.interest,
          pageUrl: (window && `${ window.location.origin }${ window.location.pathname }`) || 'Unknown',
          userBrowser,
          userOS,
          userPlatform,
          ...exceptKeys(variables, ['agreeToGetMadDevsDiscountOffers', 'agreeWithPrivacyPolicy']),
        },
      }

      await this.sendLead()
      if (this.successMessage.showSuccessfulMessage) {
        this.successMessage.show.value = true
      }
      this.formSends.value = false
      this.resetForm()
    } catch (e: any) {
      this.error.value = e
      this.formSends.value = false
    }
  }

  async sendLead() {
    try {
      await axios.post('/api/leads', this.payload)
    } catch (error: any) {
      return error
    }
  }

  onExpired() {
    this.verified.value = false
    this.token.value = ''
    this.expired.value = true
  }

  onError(err: string) {
    this.token.value = ''
    this.error.value = err
    this.verified.value = false
  }

  requestRecaptcha() {
    if (this.recaptchaRef.value) { this.recaptchaRef.value.execute() }
  }

  resetRecaptcha() {
    if (this.recaptchaRef.value) { this.recaptchaRef.value.reset() }
  }

  getArrayFormElements() { // Collect all form elements in one array, to work with them (validation, etc.)
    return [
      ...(this.fields ? Object.values(this.fields) : []),
      ...(this.radioButtonGroups ? Object.values(this.radioButtonGroups) : []),
      ...(this.checkBoxes ? Object.values(this.checkBoxes) : []),
      ...(this.selects ? Object.values(this.selects) : []),
      ...(this.textarea ? Object.values(this.textarea) : []),
    ]
  }

  validationFormElementsBeforeSend() {
    const elements = this.getArrayFormElements()
    return !elements.map(element => { // If there is an error in any element, the array is written true. So the form cannot be sent.
      if (element.error.value) { return Boolean(element.error.value) }
      if (element.required && element.validationOnSubmit && element.error) {
        element.validationOnSubmit()
        return Boolean(element.error.value)
      }
      return false
    }).filter(invalidElements => invalidElements).length
  }

  validationBeforeSend(token: string) {
    this.token.value = token
    this.verified.value = Boolean(token && true)
    const valid = this.validationFormElementsBeforeSend()
    if (!valid) { this.resetRecaptcha() }
    return Boolean(valid && this.token.value && this.verified.value)
  }

  collectData() {
    const defaultData: {
      interest: string
      formLocation: string
      agreeWithPrivacyPolicy: boolean
      addressBooksId: number
      token: string
      page: string
      [key: string]: any
    } = {
      interest: this.formType,
      formLocation: document?.title,
      agreeWithPrivacyPolicy: true,
      addressBooksId: Number(this.addressBookId),
      token: this.token.value,
      page: (window && `${ window.location.origin }${ window.location.pathname }`) || 'Unknown',
    }
    const elements = this.getArrayFormElements()
    return elements.reduce((acc, element) => {
      if (element?.fieldValue && !acc[element.objectKeyName]) {
        acc = {
          ...acc,
          type: this.formID,
          formId: this.formID,
          [element.objectKeyName]: element.fieldValue.value,
        }
        return acc
      }
      if ((element?.radioButtonValue || element?.textarea?.description) && !acc?.description) {
        acc = {
          ...acc,
          description: (element?.radioButtonValue.value
            ? `${ element.description }\n${ element?.radioButtonValue.value }`
            : '') ||
            element?.fieldValue.value,
        }
        return acc
      }

      if (element?.checkboxValue && !acc[element.objectKeyName]) {
        acc = {
          ...acc,
          [element.objectKeyName]: element?.checkboxValue.value ? 'Yes' : 'No',
          agreeToGetMadDevsDiscountOffers: element?.checkboxValue.value ? 'Yes' : 'No',
        }
        return acc
      }

      if (element?.selectedOption && !acc[element.objectKeyName]) {
        acc = {
          ...acc,
          [element.objectKeyName]: element?.selectedOption,
        }
        return acc
      }
      return acc
    }, {
      ...defaultData,
    })
  }

  async redirectToSuccessAndFaq(router: Router, route: any) {
    if (!router || route.path === '/success-and-faq/') { return }
    sessionStorage.setItem('canSeeSuccessAndFaqPage', 'yes')
    await delay(this.sleepTimer)
    await router.push('/success-and-faq/')
  }

  resetForm() {
    this.getArrayFormElements().forEach(field => {
      if (field?.fieldValue) {
        field.fieldValue.value = ''
        field.showCheckMark.value = false
      }
      if (field?.checkboxValue) {
        field.checkboxValue.value = true
      }
      if (field?.radioButtonValue) {
        field.radioButtonValue.value = ''
      }
    })
    this.resetRecaptcha()
  }

  submitNewsletterSubscriptionToAnalytics(location: string) {
    if (this.checkBoxes && this.checkBoxes.newsLetter.checkboxValue.value) {
      submitNewsletterSubscription.send(location)
      smartlookSubmitNewsletter.send({ location })
    }
  }
}
