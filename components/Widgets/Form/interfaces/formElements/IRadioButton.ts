export interface RadioButtonProps {
  objectKeyName: string
  elementId: string
  label: string
  name: string
  defaultValue?: string
  required?: boolean
  prechecked?: boolean
}

export interface IRadioButton {
  type: string
  objectKeyName: string
  elementId: string
  label: string
  name: string
  radioValue: string
  required: boolean
  prechecked: boolean
  onChangeState(event: InputEvent, emit: any): void
  convertGroupName(name: string): string
}
