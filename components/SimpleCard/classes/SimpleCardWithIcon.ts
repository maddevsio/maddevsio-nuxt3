import type { Router } from 'vue-router'
import type {
  ISimpleCardWithIcon,
  SimpleCard,
  SimpleCardWithIconProps,
} from '~/components/SimpleCard/interfaces/ISimpleCardWithIcon'

export class SimpleCardWithIcon implements ISimpleCardWithIcon {
  cards: SimpleCard[]
  sliceBackgroundColor: string
  animatedCards: boolean
  fourAnimatedCards: boolean
  router: Router

  constructor(props: SimpleCardWithIconProps) {
    this.cards = props.items || []

    this.sliceBackgroundColor = props.primary.backgroundColor || 'white'

    // @ts-ignore
    this.animatedCards = props.items.some((item: SimpleCard) => item.description.length && item.description[0]!.text)
    this.fourAnimatedCards = props.items.length === 4 && this.animatedCards

    this.router = props.router
  }

  getCardClassNames(card: SimpleCard) {
    return [colorConverterToClass('bg', card.backgroundColor || this.sliceBackgroundColor),
      { 'simple-card-with-icon__card--big': card.bigCard },
      // @ts-ignore
      { 'simple-card-with-icon__card--animated': card.description.length && card.description[0].text },
      { 'simple-card-with-icon__card--static': !this.animatedCards },
      { 'simple-card-with-icon__card--4-animated-items': this.fourAnimatedCards },
      card.bigCard && card.positionAtRow ? `simple-card-with-icon__card--${ card.positionAtRow }` : '']
  }

  getCardDescriptionClassNames({
    descriptionColor,
  }: { descriptionColor: string }) {
    return `simple-card-with-icon__card-description-wrapper--${ descriptionColor || 'white' }`
  }

  setRowId(item: { bigCard: boolean }, index: number) {
    if (!item.bigCard) { return false }

    const position = index + 1
    const rows = {
      'first-row': [1, 2, 3],
      'second-row': [4, 5, 6],
      'third-row': [7, 8, 9, 10],
    }

    for (const [id, positions] of Object.entries(rows)) {
      if (positions.includes(position)) {
        return id
      }
    }

    return false
  }

  redirectToUrl($event: { target: { tagName: string, href: any } }, { tag, link }: { tag: string, link: string }) {
    if (tag === 'a') {
      // eslint-disable-next-line no-console
      if (link) { this.router.push(link).catch(console.error) }
    } else if ($event.target.tagName === 'A') {
      const { href } = $event.target
      if (href.includes('maddevs.io')) {
        const path = href.replace(/^https?:\/\/[^/]*/, '')
        // eslint-disable-next-line no-console
        this.router.push(path).catch(console.error)
      } else {
        window.open(href, '_blank')
      }
    }
  }
}
