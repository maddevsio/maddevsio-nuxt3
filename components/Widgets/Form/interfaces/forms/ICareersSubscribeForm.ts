import type { SendEmailPayload } from '~/components/Widgets/Form/interfaces/forms/FormTypes'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { FormBuilderReturnProps, IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { SelectOption } from '~/interfaces/common/commonInterfaces'
import type { IBaseForm } from '~/components/Widgets/Form/interfaces/forms/IBaseForm'

export interface CareersSubscribeFormProps {
  formTitle: string
  formDescription: string
  selectOptions: SelectOption[]
  formBuilder: IFormBuilder['props']
}

export interface ICareersSubscribeForm extends IBaseForm {
  type: string
  formTitle: string
  formDescription: string
  buttons: FormBuilderReturnProps['buttons']
  selects: FormBuilderReturnProps['selects']
  sendEmail(payload: SendEmailPayload): Promise<any>
  onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
}
