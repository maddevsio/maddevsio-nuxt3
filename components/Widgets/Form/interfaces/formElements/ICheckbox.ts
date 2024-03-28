import type { Ref } from 'vue'

export interface CheckboxProps {
  objectKeyName: string
  elementId: string
  label: string
  name: string
  defaultValue: boolean
  required?: boolean
}

export interface ICheckbox {
  [key: string]: any
  objectKeyName: string
  elementId: string
  label: string
  name: string
  checkboxValue: Ref<boolean>
  required: boolean
  error: Ref<string>
  validationOnSubmit(): void
}
