import type { IRadioButton, RadioButtonProps } from '~/components/Widgets/Form/interfaces/formElements'

export class RadioButton implements IRadioButton {
  objectKeyName: string
  elementId: string
  label: string
  name: string
  radioValue: string
  required: boolean
  prechecked: boolean

  type = 'radio'

  constructor({
    objectKeyName = '',
    elementId = '',
    label,
    name = 'radio',
    defaultValue = '',
    prechecked = false,
    required = true,
  }: RadioButtonProps) {
    this.objectKeyName = objectKeyName
    this.elementId = `${ elementId }-${ this.convertGroupName(name) }`
    this.label = label
    this.name = this.convertGroupName(name)
    this.radioValue = defaultValue
    this.required = required
    this.prechecked = prechecked

    this.onChangeState = this.onChangeState.bind(this)
    this.convertGroupName = this.convertGroupName.bind(this)
  }

  onChangeState = (event: InputEvent, emit: any) => {
    const currentTarget = event.currentTarget as HTMLInputElement
    emit('changeRadioState', currentTarget.value)
  }

  convertGroupName(name: string) {
    return name && name?.split(' ').join('-').toLowerCase()
  }
}
