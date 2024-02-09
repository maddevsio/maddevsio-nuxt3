import type { TechAndToolsBigCard, TechAndToolsCard } from '~/components/TechAndTools/interfaces/ITechAndToolsCards'

export const getBigCards = (cards: TechAndToolsCard[], maxCards: number, countCards: string, colorTheme: string, isPostPage: boolean, addBorder: boolean) => cards.reduce((acc: TechAndToolsBigCard[], card: any) => {
  if (card.isBig && acc.length <= maxCards) {
    card.splittedDescription = card.description && card.description.length ? card.description.split('\n') : []

    card.classNames = {}
    card.classNames.mainSection = [
      `technologies__big-card--${ countCards }-big-cards`,
      `technologies__big-card--${ colorTheme }`,
    ]

    card.classNames.titleColor = [`technologies__big-card-title--${ colorTheme }`]
    card.classNames.descriptionColor = [`technologies__big-card-description--${ colorTheme }`]

    if (isPostPage) {
      card.classNames.iconWrapper = !addBorder ? ['technologies__big-card-icon-wrapper--without-border', 'technologies__big-card-icon-wrapper--post'] : ['technologies__big-card-icon-wrapper--post']
      card.classNames.cardInfo = ['technologies__big-card-info--post']

      if (maxCards === 2) {
        card.classNames.mainSection.push('technologies__big-card--two-big-cards-post')
      } else if (maxCards === 1) {
        card.classNames.mainSection.push('technologies__big-card--one-big-cards-post')
      }
    } else {
      if (addBorder === null) { card.classNames.iconWrapper = '' }
      card.classNames.iconWrapper = addBorder === false ? ['technologies__big-card-icon-wrapper--without-border'] : ''
    }

    acc.push(card)
  }
  return acc
}, [])
