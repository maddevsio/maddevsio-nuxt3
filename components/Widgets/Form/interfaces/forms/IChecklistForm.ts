import type { FormBuilderReturnProps, IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { SendEmailPayload } from '~/components/Widgets/Form/interfaces/forms/FormTypes'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { IBaseForm } from '~/components/Widgets/Form/interfaces/forms/IBaseForm'

export interface ChecklistFormProps {
  formBuilder: IFormBuilder['props']
  formLocation: string
  sendpulseTemplateID: number
  checklistPathOnS3: string
  checklistName: string
  isModalChecklist: boolean
  emailTitle: string
}

export interface IChecklistForm extends IBaseForm {
  type: string
  marketingSendpulseTemplateID: number
  buttons: FormBuilderReturnProps['buttons']
  formLocation: string
  sendpulseTemplateID: number
  checklistPathOnS3: string
  checklistName: string
  subject: string
  isModalChecklist: boolean
  sendEmail(payload: SendEmailPayload): Promise<any>
  onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
  submitChecklistToAnalytics(): void
}
