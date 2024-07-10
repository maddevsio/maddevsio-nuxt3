import type { ImageField } from '@prismicio/client'
import type { IHeaderMenuPost } from '~/components/Widgets/Header/interfaces/IHeaderMenuPost'
import type { Author } from '~/interfaces/common/commonInterfaces'

export class HeaderMenuPost implements IHeaderMenuPost {
  uid: string
  type: string
  date: string
  tags: string[]
  title: string
  paragraph: string
  image: ImageField
  author: Author
  link: string
  isCustomPage: boolean

  constructor(
    uid: string,
    type: string,
    date: string,
    tags: string[],
    title: string,
    slices: any[],
    description: string,
    image: ImageField,
    author: Author,
    isCustomPage: boolean,
  ) {
    this.uid = uid
    this.type = type
    this.date = date
    this.tags = tags
    this.title = title
    this.paragraph = description || this.postParagraph(slices)
    this.image = image
    this.author = author
    this.link = this.getPostPath()
    this.isCustomPage = isCustomPage
    this.getPostPath = this.getPostPath.bind(this)
  }

  postParagraph(slices: any[]) {
    const limit = 120
    return getFirstParagraph(slices, limit)
  }

  getPostPath() {
    if (this.type === 'post' && this.uid) { return `/blog/${ this.uid }/` }
    if (this.type === 'customer_university' && this.uid) { return `/customer-university/${ this.uid }/` }
    if (this.type === 'custom_page' && this.uid) { return `/${ this.uid }/` }
    return '/'
  }
}
