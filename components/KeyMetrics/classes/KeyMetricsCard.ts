import setSliceBackground from '~/utils/setSliceBackground'
import type {
  IKeyMetricsCard,
  IKeyMetricsProps,
} from '~/components/KeyMetrics/interfaces/IKeyMetricsCard'

export class KeyMetricsCard implements IKeyMetricsCard {
  cards
  backgroundInText
  backgroundColor
  bigCardTitle
  lottieFileName

  constructor(props: IKeyMetricsProps) {
    this.cards = props.items || []
    this.backgroundInText = props.primary.background || 'black'
    this.backgroundColor = setSliceBackground(props.primary.background || 'black')
    this.bigCardTitle = props.primary?.bigCardTitle?.replace(/\n/g, '<br />') || ''
    this.lottieFileName = props.primary.lottieFileName || 'key-metrics'
  }
}
