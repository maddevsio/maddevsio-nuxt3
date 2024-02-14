import type {
  GridLottieLinkCard,
  GridLottieLinkProps, GridLottieLinkTransformedCard,
  IGridLottieLink,
} from '~/components/PageBlocks/GridLottie/interfaces/IGridLottieLink'

export class GridLottieLink implements IGridLottieLink {
  cards: GridLottieLinkTransformedCard[]

  constructor(props: GridLottieLinkProps) {
    this.cards = this.setClassNames(props.items)
  }

  setClassNames(cards: GridLottieLinkCard[]) {
    return cards.reduce((acc: GridLottieLinkTransformedCard[], card: any) => {
      card.element = card.link && card.link.url ? 'NuxtLink' : 'div'
      card.linkParams = {
        url: (card.link && card.link.url) ? this.getLink(card.link.url) : null,
        target: (card.link && card.link.url) ? '_self' : null,
      }

      card.classNames = [
        `card-item--lottie-${ card.lottiePosition }`,
        card.alignText ? `card-item--text-${ card.alignText }` : null,
        card.fullWidth ? 'card-item--full-width' : null,
      ]

      acc.push(card)

      return acc
    }, [])
  }

  getLink(link: string) {
    return link.replace(/^https?:\/\/[^/]+/, '')
  }
}
