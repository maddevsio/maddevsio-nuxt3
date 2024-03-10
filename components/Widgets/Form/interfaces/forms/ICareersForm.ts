import type { Ref } from 'vue'
import type { FormBuilderReturnProps, IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { IBaseForm } from '~/components/Widgets/Form/interfaces/forms/IBaseForm'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'

export interface CareersFormProps {
  formBuilder: IFormBuilder['props']
  vacancyPosition: string
}

export interface ICareersForm extends IBaseForm {
  formTitle: string
  buttons: FormBuilderReturnProps['buttons']
  formLocation: string
  vacancyPosition: string
  errorModal: Ref<any>
  onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
}
