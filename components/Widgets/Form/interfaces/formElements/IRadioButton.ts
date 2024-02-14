export interface RadioButtonProps {
  objectKeyName: string
  elementId: string
  label: string
  name: string
  defaultValue?: string
  required?: boolean
}

export interface IRadioButton {
  objectKeyName: string
  elementId: string
  label: string
  name: string
  radioValue: string
  required: boolean
  onChangeState(event: InputEvent, emit: any): void
  convertGroupName(name: string): string
}
