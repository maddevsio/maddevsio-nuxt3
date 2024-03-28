import type { ComputedRef } from 'vue'
import type {
  ButtonFullFilledProps,
  IButtonFullFilled,
} from '~/components/PageBlocks/ButtonSlice/interfaces/IButtonFullFilled'

export class ButtonFullFilled implements IButtonFullFilled {
  alignment: ComputedRef<string>
  backgroundColor: string | null
  link: string
  text: string
  buttonStyles: string
  target: string
  fullWidth: boolean
  constructor(props: ButtonFullFilledProps) {
    this.alignment = computed(() => {
      if (props.primary.alignment === 'center') { return 'center' }
      if (props.primary.alignment === 'right') { return 'right' }
      return 'left'
    })
    this.backgroundColor = setSliceBackground(props.primary.background || 'black')
    this.link = props.primary.link.url
    this.buttonStyles = `max-width: ${ props.primary.maxWidth ? props.primary.maxWidth : '' }; ${ props.primary.maxWidth ? 'width: 100%' : '' };`
    this.text = props.primary.text
    this.target = props.primary.target ? '_blank' : '_self'
    this.fullWidth = props.primary.fullWidth
  }
}
