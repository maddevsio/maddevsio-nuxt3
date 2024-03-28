import type {
  FooterStaticPageLink,
  IFooterStaticPagesLinks,
} from '~/components/Widgets/Footer/interfaces/IFooterStaticPagesLinks'

export class FooterStaticPagesLinks implements IFooterStaticPagesLinks {
  links: FooterStaticPageLink[]

  constructor() {
    this.links = [
      {
        title: 'GDPR Compliance Commitment',
        link: '/gdpr/',
      },
      {
        title: 'Non-Disclosure Agreement (NDA)',
        link: '/nda/',
      },
    ]
  }
}
