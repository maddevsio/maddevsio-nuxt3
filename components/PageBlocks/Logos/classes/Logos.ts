import type { ILogos, LogosProps, TransformedLogo } from '~/components/PageBlocks/Logos/interfaces/ILogos'

export class Logos implements ILogos {
  cards: TransformedLogo[]
  backgroundColor: string

  constructor(props: LogosProps) {
    this.cards = props.items.map(card => ({
      ...card,
      cardBackgroundColor: colorConverterToClass('bg', props.primary.backgroundColor === 'white' ? 'white' : 'black'),
      link: checkAndExtractDomain(card.link.url || ''),
    }))
    this.backgroundColor = colorConverterToClass('slice-bg', props.primary.backgroundColor || 'black')
  }
}
