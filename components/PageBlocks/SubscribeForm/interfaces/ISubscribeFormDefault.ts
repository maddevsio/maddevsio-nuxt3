import type { SelectField } from '@prismicio/client'
import type { ComputedRef } from 'vue'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'

export interface SubscribeFormDefaultProps {
  primary: {
    backgroundColor: string
  }
}
export interface ISubscribeFormDefault {
  backgroundColor: string
  subscribeFormBlock: ISubscribeFormBlock
  sliceClasses: ComputedRef<string>
  formContentClasses: ComputedRef<string>
}
