import type { FilledLinkToWebField } from '@prismicio/types'
import type { ImageField } from '@prismicio/client'
import { FooterNavbarMenu } from '~/components/Widgets/Footer/classes/FooterNavbarMenu'
import { FooterNavbarSection } from '~/components/Widgets/Footer/classes/FooterNavbarSection'
import { FooterNavbarColumn } from '~/components/Widgets/Footer/classes/FooterNavbarColumn'
import { MenuLink } from '~/components/Widgets/shared/classes/MenuLink'
import { FooterContacts } from '~/components/Widgets/Footer/classes/FooterContacts'
import { PresentationLinks } from '~/components/Widgets/Footer/classes/PresentationLinks'
import { SocialNetworks } from '~/components/Widgets/SocialNetworks/classes/SocialNetworks'
import type { PresentationLink } from '~/components/Widgets/Footer/interfaces/IPresentationLinks'
import type { IFooterNavbarSection } from '~/components/Widgets/Footer/interfaces/IFooterNavbarSection'
import type { IFooterNavbarMenu } from '~/components/Widgets/Footer/interfaces/IFooterNavbarMenu'
import type { SocialNetwork } from '~/components/Widgets/SocialNetworks/interfaces/ISocialNetworks'

interface FooterPrismicDataBodyItem {
  slice_type: string
  primary: {
    column_number: string
    nav_section: string
  }
  items: SocialNetwork[] | PresentationLink[]
}

export interface FooterPrismicData {
  body: FooterPrismicDataBodyItem[]
  column_icons: {
    icon: ImageField
  }[]
  emailTitle: string
  email: string
}

export const transformationFooterData = (rawData: FooterPrismicData) => {
  try {
    if (!rawData.body.length && !Object.keys(rawData).length) { return [] }
    const sortedDataByColumns: { [key: string]: any } = {}
    let socialNetworks: SocialNetwork[] = []
    let presentationLinks: PresentationLink[] = []
    rawData.body.forEach(item => {
      if (item.slice_type === 'navigation_list') {
        const key = item.primary.column_number
        if (!sortedDataByColumns[key]) { sortedDataByColumns[key] = [] }
        sortedDataByColumns[key].push(item)
      }

      if (item.slice_type === 'social_networks') {
        socialNetworks = item.items as SocialNetwork[]
      }
      if (item.slice_type === 'presentation_links') {
        presentationLinks = item.items as PresentationLink[]
      }
    })

    const columns = Object.values(sortedDataByColumns).map(column => {
      const sections: IFooterNavbarSection[] = []
      const sortedSections: { [key: string]: any } = {}
      column.forEach((section: any) => {
        const navSectionKey = section.primary.nav_section
        if (!sortedSections[navSectionKey]) { sortedSections[navSectionKey] = [] }
        sortedSections[navSectionKey].push(section)
      })

      Object.entries(sortedSections).forEach(entry => {
        const [sectionName, sectionMenus] = entry
        const menus: IFooterNavbarMenu[] = []
        sectionMenus.forEach((menu: any) => {
          const links = menu.items.map((item: { label: string, link: FilledLinkToWebField }) => new MenuLink(item.label, `${ item.link.url.replace(/^https?:\/\/[^/]*/, '') }`, false, undefined))
          menus.push(new FooterNavbarMenu(menu.primary.name, links))
        })
        const sectionLink = sectionMenus[0].primary.link.length && sectionMenus[0].primary.link[0].text ? sectionMenus[0].primary.link[0].text : ''
        sections.push(new FooterNavbarSection(sectionName, sectionLink, menus))
      })
      return new FooterNavbarColumn(sections)
    })

    const icons = rawData.column_icons.map(item => ({ url: item.icon.url, alt: item.icon.alt }))

    return {
      contacts: new FooterContacts(rawData.emailTitle, rawData.email),
      socials: new SocialNetworks(socialNetworks),
      presentations: new PresentationLinks(presentationLinks),
      icons,
      columns,
    }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
    return []
  }
}
