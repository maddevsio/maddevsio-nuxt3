import type { SelectField } from '@prismicio/client'
import type { ComputedRef } from 'vue'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'

export interface SubscribeFormDefaultProps {
  primary: {
    backgroundColor: SelectField
  }
}
export interface ISubscribeFormDefault {
  backgroundColor: SelectField
  subscribeFormBlock: ISubscribeFormBlock
  sliceClasses: ComputedRef<string>
  formContentClasses: ComputedRef<string>
}
