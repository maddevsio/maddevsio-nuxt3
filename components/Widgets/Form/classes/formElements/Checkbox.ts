import type { Ref } from 'vue'
import type { CheckboxProps, ICheckbox } from '~/components/Widgets/Form/interfaces/formElements'

export class Checkbox implements ICheckbox {
  objectKeyName: string
  elementId: string
  label: string
  name: string
  checkboxValue: Ref<boolean>
  required: boolean
  error: Ref<string>

  type = 'checkbox'

  private errorMessages = {
    required: 'This value is required.',
  }

  constructor({
    objectKeyName = '',
    elementId = '',
    label = '',
    name = '',
    defaultValue = false,
    required = false,
  }: CheckboxProps) {
    this.objectKeyName = objectKeyName
    this.elementId = elementId
    this.label = label
    this.name = name
    this.checkboxValue = ref(defaultValue)
    this.required = required
    this.error = ref('')

    this.validationOnSubmit = this.validationOnSubmit.bind(this)
  }

  validationOnSubmit() {
    if (this.required && !this.checkboxValue.value) { this.error.value = this.errorMessages.required }
  }
}
