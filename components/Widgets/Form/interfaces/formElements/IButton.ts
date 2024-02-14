import type { Ref } from 'vue'

export interface FormButtonProps {
  objectKeyName: string
  elementId: string
  label?: string
  type: string
}

export interface IButton {
  objectKeyName: string
  elementId: string
  label?: string
  type: string
  disabled: Ref<boolean>
}
