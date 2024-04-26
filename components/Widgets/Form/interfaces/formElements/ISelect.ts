import type { Ref } from 'vue'

export interface SelectProps {
  objectKeyName: string
  elementId: string
  label: string
  defaultValue: boolean
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
  selectedOption: Ref<boolean>
  required: boolean
  error: Ref<string>
  validationOnSubmit(): void
}
