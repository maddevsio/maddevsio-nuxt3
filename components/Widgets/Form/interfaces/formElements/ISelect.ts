import type { Ref } from 'vue'
import type { SelectOption } from '~/interfaces/common/commonInterfaces'

export interface SelectProps {
  objectKeyName: string
  elementId: string
  label: string
  required?: boolean
  colorTheme: string
  options: string[]
}

export interface ISelect {
  [key: string]: any
  objectKeyName: string
  elementId: string
  label: string
  options: string[]
  selectedOption: Ref<string>
  required: boolean
  error: Ref<string>
  validationOnSubmit(): void
  setSelectedOption(option: SelectOption): void
}
