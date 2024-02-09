import type { TechAndToolsCard, TechAndToolsLittleCard } from '~/components/TechAndTools/interfaces/ITechAndToolsCards'

export const getLittleCards = (cards: TechAndToolsCard[], colorTheme: string) => cards.reduce((acc: TechAndToolsLittleCard[], card: any) => {
  if (!card.isBig) {
    card.className = {
      wrapper: [`technologies__little-card--${ colorTheme }`],
      title: [`technologies__little-card-title--${ colorTheme }`],
    }
    acc.push(card)
  }
  return acc
}, [])
