// import type { SendEmailPayload } from '~/components/Widgets/Form/interfaces/forms/FormTypes'
// import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { SelectOption } from '~/interfaces/common/commonInterfaces'

export interface CareersSubscribeFormProps {
  formTitle: string
  formDescription: string
  selectOptions: SelectOption[]
  formBuilder: IFormBuilder['props']
}

export interface ICareersSubscribeForm {
  type: string
  formTitle: string
  formDescription: string
  // sendEmail(payload: SendEmailPayload): Promise<any>
  // onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
}
