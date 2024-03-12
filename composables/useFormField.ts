import type { IField } from '~/components/Widgets/Form/interfaces/formElements'

export const useFormField = (props: { formFieldInstance: IField }) => {
  const formField = ref<HTMLInputElement | null>(null)
  const { styles } = useStyleFormElement()
  const formUid = inject('formUid')
  const formSends = inject('formSends')
  const wrapperClasses = computed(() => [
    // @ts-ignore
    styles['form-field__wrapper'],
    // @ts-ignore
    props.formFieldInstance.error.value && styles['form-field__wrapper--error'],
  ].filter(Boolean))
  const focusField = () => {
    if (formField.value?.type === 'file') {
      formField.value?.click()
    } else {
      formField.value?.focus()
    }
  }
  const onChangeValue = (event: InputEvent) => props.formFieldInstance.onChangeValue(event)
  const onBlurField = () => props.formFieldInstance.onBlurInput()
  const onFocusField = () => props.formFieldInstance.onFocusInput()
  const handleFile = (event: Event) => props.formFieldInstance.handleFileSelect(event)

  return {
    formField,
    formUid,
    styles,
    wrapperClasses,
    focusField,
    onChangeValue,
    onBlurField,
    onFocusField,
    elementId: `${ props.formFieldInstance.elementId }-${ formUid }`,
    type: props.formFieldInstance.type,
    name: props.formFieldInstance.name,
    value: props.formFieldInstance.fieldValue,
    required: props.formFieldInstance.required,
    placeholder: props.formFieldInstance.placeholder,
    error: props.formFieldInstance.error,
    verifiedSuccess: props.formFieldInstance.verifiedSuccess,
    showCheckMark: props.formFieldInstance.showCheckMark,
    formSends,
    handleFile,
  }
}
