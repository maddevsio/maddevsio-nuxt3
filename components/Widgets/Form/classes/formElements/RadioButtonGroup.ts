import type { Ref } from 'vue'
import type {
  IRadioButton,
  IRadioButtonGroup,
  RadioButtonGroupProps,
} from '~/components/Widgets/Form/interfaces/formElements'

export class RadioButtonGroup implements IRadioButtonGroup {
  objectKeyName: string
  elementId: string
  description: string
  radioButtons: IRadioButton[]
  radioButtonValue: Ref<string>
  error: Ref<string>
  required: boolean
  validationType: string

  private errorMessages = {
    required: 'Please select the correct value.',
  }

  constructor({
    objectKeyName = '',
    elementId = '',
    description = '',
    radioButtons = [],
    validationType = '',
    required = true,
  }: RadioButtonGroupProps) {
    this.objectKeyName = objectKeyName
    this.elementId = elementId
    this.description = description
    this.radioButtons = this.checkRadioButtonsOnHaveValue(radioButtons)
    this.radioButtonValue = ref('')
    this.error = ref('')
    this.required = this.checkRadioButtonsOnHaveValue(radioButtons).length ? required : false
    this.validationType = validationType

    this.onChangeRadioState = this.onChangeRadioState.bind(this)
    this.validationOnSubmit = this.validationOnSubmit.bind(this)
    this.checkRadioButtonsOnHaveValue = this.checkRadioButtonsOnHaveValue.bind(this)
    this.checkPrechekedRadioButtons = this.checkPrechekedRadioButtons.bind(this)
  }

  onChangeRadioState(value: string, $eventBus: any) {
    this.radioButtonValue.value = value
    this.error.value = ''
    $eventBus.$emit('resume-type', value)
  }

  validationOnSubmit() {
    if (this.required && !this.radioButtonValue.value) { this.error.value = this.errorMessages.required }
  }

  checkRadioButtonsOnHaveValue(radioButtons: IRadioButton[]) {
    return radioButtons.filter(radioButton => Boolean(radioButton.objectKeyName))
  }

  checkPrechekedRadioButtons(radioButtons: IRadioButton[], $eventBus: any) {
    radioButtons.forEach(radioButton => {
      if (radioButton.prechecked) {
        this.radioButtonValue.value = radioButton.label
        $eventBus.$emit('resume-type', radioButton.label)
      }
    })
  }
}
