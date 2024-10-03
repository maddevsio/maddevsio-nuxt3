import type { SelectField } from '@prismicio/types'
import type {
  ComparisonCard, ComparisonDefaultProps,
  IComparisonDefault,
} from '~/components/PageBlocks/Comparison/inrefaces/IComparisonDefault'

export class ComparisonDefault implements IComparisonDefault {
  colorTheme: SelectField
  columnNumber: number
  cards: ComparisonCard[]

  constructor(
    props: ComparisonDefaultProps) {
    this.colorTheme = props.primary?.colorTheme
    this.columnNumber = props.primary?.columnNumber
    this.cards = props.primary?.cards
  }
}
