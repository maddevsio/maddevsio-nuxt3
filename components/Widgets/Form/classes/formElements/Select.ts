import type { Ref } from 'vue'
import type { ISelect, SelectProps } from '~/components/Widgets/Form/interfaces/formElements'
import type { SelectOption } from '~/interfaces/common/commonInterfaces'

export class Select implements ISelect {
  objectKeyName: string
  elementId: string
  label: string
  selectedOption: Ref<string>
  required: boolean
  error: Ref<string>
  colorTheme: string
  options: string[]

  private errorMessages = {
    required: 'This value is required.',
  }

  constructor({
    objectKeyName = '',
    elementId = '',
    label = '',
    required = false,
    colorTheme = 'white',
    options,
  }: SelectProps) {
    this.objectKeyName = objectKeyName
    this.elementId = elementId
    this.label = label
    this.selectedOption = ref('')
    this.required = required
    this.error = ref('')
    this.colorTheme = colorTheme
    this.options = options

    this.validationOnSubmit = this.validationOnSubmit.bind(this)
    this.setSelectedOption = this.setSelectedOption.bind(this)
  }

  validationOnSubmit() {
    if (this.required && !this.selectedOption.value) { this.error.value = this.errorMessages.required }
  }

  setSelectedOption(option: SelectOption) {
    this.selectedOption.value = option.label
    if (this.selectedOption.value) { this.error.value = '' }
  }
}
