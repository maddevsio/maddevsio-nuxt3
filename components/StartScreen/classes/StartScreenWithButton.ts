import type {
  IStartScreenWithButton,
  StartScreenWithButtonProps,
} from '~/components/StartScreen/interfaces/IStartScreenWithButton'
import { StartScreenDefault } from '~/components/StartScreen/classes/StartScreenDefault'

export class StartScreenWithButton extends StartScreenDefault implements IStartScreenWithButton {
  btnText: string
  constructor(props: StartScreenWithButtonProps) {
    super(props)
    this.btnText = props.primary.btnText || 'Let`s talk'
  }
}
