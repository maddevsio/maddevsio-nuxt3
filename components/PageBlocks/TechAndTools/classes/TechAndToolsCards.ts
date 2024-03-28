import type {
  ITechAndToolsCards,
  TechAndToolsBigCard, TechAndToolsCardsProps,
  TechAndToolsLittleCard,
} from '~/components/PageBlocks/TechAndTools/interfaces/ITechAndToolsCards'
import { getBigCards } from '~/components/PageBlocks/TechAndTools/helpers/getBigCards'
import { getLittleCards } from '~/components/PageBlocks/TechAndTools/helpers/getLittleCards'

export class TechAndToolsCards implements ITechAndToolsCards {
  maxCards: number
  countCards: string
  colorTheme: string
  isPostPage: boolean
  addBorderToIcons: boolean
  bigCards: TechAndToolsBigCard[]
  littleCards: TechAndToolsLittleCard[]

  constructor(props: TechAndToolsCardsProps, maxCards: number, countCards: string) {
    this.maxCards = maxCards
    this.countCards = countCards
    this.colorTheme = props.primary.theme || 'black'
    this.isPostPage = props.primary.isPostPage || false
    this.addBorderToIcons = props.primary.addBorder
    this.bigCards = getBigCards(props.items, this.maxCards, this.countCards, this.colorTheme, this.isPostPage, this.addBorderToIcons)
    this.littleCards = getLittleCards(props.items, this.colorTheme)
  }
}
