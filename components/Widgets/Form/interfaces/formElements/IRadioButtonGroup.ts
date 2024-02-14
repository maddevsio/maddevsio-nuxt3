import type { Ref } from 'vue'
import type { IRadioButton } from '~/components/Widgets/Form/interfaces/formElements/IRadioButton'

export interface RadioButtonGroupProps {
  objectKeyName: string
  elementId: string
  description: string
  radioButtons: IRadioButton[]
  validationType?: string
  required: boolean
}

export interface IRadioButtonGroup {
  objectKeyName: string
  elementId: string
  description: string
  radioButtons: IRadioButton[]
  radioButtonValue: Ref<string>
  error: Ref<string>
  required: boolean
  validationType: string
  onChangeRadioState(value: string): void
  validationOnSubmit(): void
  checkRadioButtonsOnHaveValue(radioButtons: IRadioButton[]): IRadioButton[]
}
