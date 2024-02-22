import type { IBaseForm } from '~/components/Widgets/Form/interfaces/forms/IBaseForm'
import type { FormBuilderReturnProps, IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'

export interface SubscribeFormProps {
  templateId: number
  formTitle?: string
  formBuilder: IFormBuilder['props']
  formLocation: string
  lineBreakForSuccess: boolean
}

export interface ISubscribeForm extends IBaseForm {
  subject: string
  formTitle: string
  formLocation: string
  lineBreakForSuccess: string
  buttons: FormBuilderReturnProps['buttons']
  type: string
  onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
  submitNewsletterSubscriptionToAnalytics(location: string): void
}
