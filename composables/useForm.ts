import { FormDirector } from '~/components/Widgets/Form/classes/FormDirector'
import { FormBuilder } from '~/components/Widgets/Form/classes/FormBuilder'
import type { FormTypes } from '~/components/Widgets/Form/interfaces/forms/FormTypes'

interface Options {
  methodName: string
  options: any
}

export const useForm = ({
  methodName, // method name in FormDirector for building form
  options, // Any options if needed, but formUid is required
}: Options) => {
  // @ts-ignore
  const form: FormTypes = new FormDirector(new FormBuilder())[methodName](options)
  const styles = useCssModule()
  provide('styles', styles)
  provide('formUid', options.formUid)
  provide('formSends', form.formSends)

  return {
    form,
    styles,
  }
}
