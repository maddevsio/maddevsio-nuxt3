import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { ICheckbox, IField, IRadioButtonGroup } from '~/components/Widgets/Form/interfaces/formElements'

export interface BaseFormPayload {
  templateId: number
  type: string
  token: string
  variables: {
    subject: string
    modalTitle: string
    projectDescriber: string
    agreeToGetMadDevsDiscountOffers: string
    agreeWithPrivacyPolicy: string
    consent_to_mailing: string
    formLocation: string
    interest: string
    pageUrl: string
    userBrowser: string
    userOS: string
    userPlatform: string
    page: string
    [key: string]: any
  }
  [key: string]: any
}

export interface SubmitLeadProps {
  templateId: number
  title?: string
  subject?: string
  variables: BaseFormPayload['variables']
}

export interface IBaseForm {
  baseEmailTitle: string
  formID: string
  payload: BaseFormPayload
  reCaptchaSiteKey: string
  templateId: number
  formType: string
  emailTitle: string
  addressBookId: number
  recaptchaRef: Ref<any>
  successMessage: {
    show: Ref<boolean>
    title: string
    description: string
    showSuccessfulMessage: boolean
  }
  error: Ref<string>
  fields: IField
  radioButtonGroups: IRadioButtonGroup
  checkBoxes: ICheckbox
  textarea: IField
  formSends: Ref<boolean>
  onError(err: string): void
  onExpired(): void
  requestRecaptcha(): void
  resetRecaptcha(): void
  getArrayFormElements(): void
  validationBeforeSend(token: string): boolean
  validationFormElementsBeforeSend(): boolean
  redirectToSuccessAndFaq(router: Router, route: any): Promise<void>
  resetForm(): void
  submitNewsletterSubscriptionToAnalytics(location: string): void
  submitLead(props: SubmitLeadProps): Promise<void>
  sendLead(): Promise<void>
}
