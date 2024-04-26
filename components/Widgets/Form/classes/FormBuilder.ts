import type { FormBuilderReturnProps, IFormBuilder } from '~/components/Widgets/Form/interfaces/IFormBuilder'
import type {
  IButton,
  ICheckbox,
  IField,
  IRadioButtonGroup,
  ISelect,
} from '~/components/Widgets/Form/interfaces/formElements'

export class FormBuilder implements IFormBuilder {
  props: FormBuilderReturnProps

  constructor() {
    this.props = {
      fields: {},
      buttons: {},
      radioButtonGroups: {},
      checkBoxes: {},
      textarea: {},
      select: {},
    }
  }

  setFields(fields: IField[] = []) {
    fields.forEach(field => {
      this.props.fields = {
        ...this.props.fields,
        [field.objectKeyName]: field,
      }
    })
    return this
  }

  addButton(button: IButton) {
    this.props.buttons = {
      ...this.props.buttons,
      [button.objectKeyName]: button,
    }
    return this
  }

  addRadioButtonGroup(radioButtonGroup: IRadioButtonGroup) {
    this.props.radioButtonGroups = {
      ...this.props.radioButtonGroups,
      [radioButtonGroup.objectKeyName]: radioButtonGroup,
    }
    return this
  }

  addCheckBoxes(checkBoxes: ICheckbox[] = []) {
    checkBoxes.forEach(checkBox => {
      this.props.checkBoxes = {
        ...this.props.checkBoxes,
        [checkBox.objectKeyName]: checkBox,
      }
    })
    return this
  }

  addTextarea(textarea: IField) {
    this.props.textarea = {
      ...this.props.textarea,
      [textarea.objectKeyName]: textarea,
    }

    return this
  }

  addSelect(select: ISelect) {
    this.props.select = {
      ...this.props.select,
      [select.objectKeyName]: select,
    }

    return this
  }

  build() {
    return this.props
  }
}
