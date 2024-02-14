import type {
  IButton,
  ICheckbox,
  IField,
  IRadioButtonGroup,
} from '~/components/Widgets/Form/interfaces/formElements'

export interface FormBuilderReturnProps {
  fields: {
    [key: string]: IField
  }
  buttons: {
    [key: string]: IButton
  }
  radioButtonGroups: {
    [key: string]: IRadioButtonGroup
  }
  checkBoxes: {
    [key: string]: ICheckbox
  }
  textarea: {
    [key: string]: IField
  }
}

export interface IFormBuilder {
  props: FormBuilderReturnProps
  setFields(fields?: IField[]): IFormBuilder
  addButton(button?: IButton): IFormBuilder
  addRadioButtonGroup(radioButtonGroup?: IRadioButtonGroup): IFormBuilder
  addCheckBoxes(checkBoxes?: ICheckbox[]): IFormBuilder
  addTextarea(textarea?: IField): IFormBuilder
  build(): FormBuilderReturnProps
}
