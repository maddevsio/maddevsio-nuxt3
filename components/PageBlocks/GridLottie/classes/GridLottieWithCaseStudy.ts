import type {
  GridLottieWithCaseStudyCard,
  GridLottieWithCaseStudyProps,
  GridLottieWithCaseStudyTransformedCard,
  IGridLottieWithCaseStudy,
} from '~/components/PageBlocks/GridLottie/interfaces/IGridLottieWithCaseStudy'

export class GridLottieWithCaseStudy implements IGridLottieWithCaseStudy {
  cards: GridLottieWithCaseStudyTransformedCard[]

  constructor(props: GridLottieWithCaseStudyProps) {
    this.cards = this.setClassNames(props.items)
  }

  setClassNames(cards: GridLottieWithCaseStudyCard[]) {
    return cards.reduce((acc: GridLottieWithCaseStudyTransformedCard[], card: any) => {
      card.classNames = {
        all: card.fullWidth ? 'card-item--full-width' : null,
        solution: [],
        caseStudy: [],
        textAlignment: [],
      }
      if (!card.cardType) {
        card.classNames.solution = [
          !card.lottieAnimation ? 'card-item--without-lottie' : null,
          card.lottiePosition ? `card-item-${ card.lottiePosition }` : 'card-item-top',
        ]
        card.classNames.textAlignment = [
          card.alignText ? `card-item--text-${ card.alignText }` : 'card-item--text-left',
        ]
      } else {
        card.classNames.caseStudy = [`card-item--case-study ${ card.fullWidth && 'card-item--case-study-full' }`]
      }

      acc.push(card)
      return acc
    }, [])
  }
}
