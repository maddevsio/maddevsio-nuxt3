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

export interface CareersSubscribePayload {
  token: string
  email: {
    templateId: number
    variables: {
      type: string
      fullName: string
      email: string
      vacancy_category: string
      modalTitle: string
      subject: string
      formLocation: string
      newsLetter: string
      alreadySubscribed: boolean
      userBrowser: string
      userOS: string
      userPlatform: string
    },
  },
}

export interface ICareersSubscribeForm extends IBaseForm {
  type: string
  formTitle: string
  formDescription: string
  formLocation: string
  buttons: FormBuilderReturnProps['buttons']
  selects: FormBuilderReturnProps['selects']
  sendEmailData(payload: CareersSubscribePayload): Promise<any>
  onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
}
