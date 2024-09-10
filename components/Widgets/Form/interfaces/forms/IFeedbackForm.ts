import type { IBaseForm } from '~/components/Widgets/Form/interfaces/forms/IBaseForm'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { FormBuilderReturnProps } from '~/components/Widgets/Form/interfaces/IFormBuilder'

export interface IFeedbackForm extends IBaseForm {
  buttons: FormBuilderReturnProps['buttons']
  formLocation: string
  onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
  submitToAnalytics(location: string): void
}
