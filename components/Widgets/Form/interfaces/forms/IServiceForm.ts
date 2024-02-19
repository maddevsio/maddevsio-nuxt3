import type { RuntimeConfig } from 'nuxt/schema'
import type { FormBuilderReturnProps, IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type { OnSubmitFromProps } from '~/components/Widgets/Form/interfaces/forms/IContactMeForm'
import type { IBaseForm } from '~/components/Widgets/Form/interfaces/forms/IBaseForm'

export interface ServiceFormProps {
  formTitle: string
  formDescription: string
  formBuilder: IFormBuilder['props']
}

export interface IServiceForm extends IBaseForm {
  config: RuntimeConfig
  formTitle: string
  formDescription: string
  buttons: FormBuilderReturnProps['buttons']
  onSubmitVerifiedForm(props: OnSubmitFromProps): Promise<void>
}
