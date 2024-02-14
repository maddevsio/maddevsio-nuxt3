import type { Ref } from 'vue'
import type { FormButtonProps, IButton } from '~/components/Widgets/Form/interfaces/formElements'

export class Button implements IButton {
  objectKeyName: string
  elementId: string
  label?: string
  type: string
  disabled: Ref<boolean>

  constructor({
    objectKeyName = '',
    elementId = '',
    label,
    type,
  }: FormButtonProps) {
    this.objectKeyName = objectKeyName
    this.elementId = elementId
    this.label = label
    this.type = type
    this.disabled = ref(false)
  }
}
