import type { Router } from 'vue-router'
import type { FormBuilderReturnProps, IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { IBaseForm } from '~/components/Widgets/Form/interfaces/forms/IBaseForm'

export interface ContactMeFromProps {
  formTitle?: string
  formBuilder: IFormBuilder['props']
  formLocation: string
  emailSubject: string
}

export interface OnSubmitFromProps {
  token: string
  router?: Router
  route?: any
  $eventBus?: any
}

export interface IContactMeForm extends IBaseForm {
  formTitle: string
  buttons: FormBuilderReturnProps['buttons']
  formLocation: string
  onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
  submitToAnalytics(location: string): void
}
