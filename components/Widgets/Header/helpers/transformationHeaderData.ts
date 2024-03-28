import type { FilledLinkToWebField } from '@prismicio/types'
import { HeaderMenuChapter } from '~/components/Widgets/Header/classes/HeaderMenuChapter'
import { MenuLink } from '~/components/Widgets/shared/classes/MenuLink'
import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'
import { HeaderMenuItem } from '~/components/Widgets/Header/classes/HeaderMenuItem'
import { HeaderMenuPost } from '~/components/Widgets/Header/classes/HeaderMenuPost'

interface Link { label: string, link: FilledLinkToWebField }

const getObjectSectionKey = (section: string) => {
  if (!section) { return null }
  return section
    .toLowerCase().split(' ').join('')
}

export const transformationHeaderData = (data: any) => {
  if (!Object.keys(data).length) { return [] }
  try {
    const menuChapters: { [key: string]: any } = {}
    data.body.forEach((menuItem: any) => {
      if (getObjectSectionKey(menuItem.primary.nav_section)) {
        if (!menuChapters[getObjectSectionKey(menuItem.primary.nav_section)!]) {
          menuChapters[getObjectSectionKey(menuItem.primary.nav_section)!] = []
        }

        if (menuItem.items.length) {
          menuChapters[getObjectSectionKey(menuItem.primary.nav_section)!]
            .push(
              new HeaderMenuChapter(
                menuItem.primary.name,
                menuItem.items
                  .map((menuLink: Link) => new MenuLink(
                    menuLink.label,
                    `${ menuLink.link.url.replace(/^https?:\/\/[^/]*/, '') }`,
                  )),
              ),
            )
        }
      }
    })

    return data.body.reduce((acc: IHeaderMenuItem[], menuItem: any) => {
      if (acc.length && acc[acc.length - 1].mainNav.name === menuItem.primary.nav_section) { return acc }
      acc.push(
        new HeaderMenuItem(
          new MenuLink(
            menuItem.primary.nav_section,
            menuItem.primary.link.length ? menuItem.primary.link[0].text : '',
            menuItem.primary?.show_icon || false,
            menuItem.primary?.main_link_icon || {},
          ),
          menuChapters[getObjectSectionKey(menuItem.primary.nav_section)!],
          data[`${ getObjectSectionKey(menuItem.primary.nav_section) }_blog_post`]?.uid &&
          new HeaderMenuPost(
            data[`${ getObjectSectionKey(menuItem.primary.nav_section) }_blog_post`].uid,
            data[`${ getObjectSectionKey(menuItem.primary.nav_section) }_blog_post`].type,
            formatDate(data[`${ getObjectSectionKey(menuItem.primary.nav_section) }_blog_post`].data.date),
            data[`${ getObjectSectionKey(menuItem.primary.nav_section) }_blog_post`].tags,
            data[`${ getObjectSectionKey(menuItem.primary.nav_section) }_blog_post`].data.title,
            data[`${ getObjectSectionKey(menuItem.primary.nav_section) }_blog_post`].data.body,
            data[`${ getObjectSectionKey(menuItem.primary.nav_section) }_blog_post`].data.featured_image,
            data[`${ getObjectSectionKey(menuItem.primary.nav_section) }_blog_post`].data.post_author.data,
          ),
        ),
      )
      return acc
    }, [])
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
    return [] // show empty header if any problem with request header data
  }
}
