import type { SelectField } from '@prismicio/client'
import type { ComputedRef } from 'vue'
import type {
  ISubscribeFormDefault,
  SubscribeFormDefaultProps,
} from '~/components/PageBlocks/SubscribeForm/interfaces/ISubscribeFormDefault'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'
import { SubscribeFormBlock } from '~/components/Widgets/Form/classes/forms/SubscribeFormBlock'

export class SubscribeFormDefault implements ISubscribeFormDefault {
  backgroundColor: SelectField
  subscribeFormBlock: ISubscribeFormBlock
  sliceClasses: ComputedRef<string>
  formContentClasses: ComputedRef<string>

  constructor(props: SubscribeFormDefaultProps) {
    this.backgroundColor = props.primary?.backgroundColor

    this.subscribeFormBlock = new SubscribeFormBlock({
      colorTheme: this.backgroundColor,
      options: {
        formLocation: 'Slice',
        bigTitle: true,
        submitButtonSizeInPercentage: 30,
        formMaxWidth: '58%',
        showButton: true,
        lineBreakForSuccess: true,
      },
    })

    this.sliceClasses = computed(() => (this.backgroundColor === 'black' ? 'subscribe-form-slice--dark-theme' : 'subscribe-form-slice--light-theme'))
    this.formContentClasses = computed(() => (this.backgroundColor === 'black' ? 'subscribe-form-content--dark-theme' : 'subscribe-form-content--light-theme'))
  }
}
