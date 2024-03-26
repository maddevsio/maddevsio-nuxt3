import type { FilledLinkToWebField, ImageField } from '@prismicio/types'
import type { BooleanField, DateField, KeyTextField, NumberField, RichTextField, SelectField } from '@prismicio/client'
import type {
  GlossaryDocumentData,
  VacancyDocumentDataBodySlice,
} from '~/prismicio-types'

export interface IntersectionObserverInstance {
  observe: (target: Element) => void
  unobserve: (target: Element) => void
  disconnect: () => void
}

export interface ResizeObserverInstance extends IntersectionObserverInstance {}

export interface ISwiperOptions {
  speed: number
  slidesPerView: number
  slidesPerGroup: number
  loop: boolean
  grabCursor: boolean
  allowTouchMove: boolean
  spaceBetween: number
  navigation: {
    nextEl: string
    prevEl: string
    disabledClass: string
  },

  breakpoints: {
    550?: {
      spaceBetween: number
      slidesPerView: number
      slidesPerGroup: number
    },

    640?: {
      spaceBetween: number,
      slidesPerView: number,
      slidesPerGroup: number,
    },

    900?: {
      spaceBetween: number
      slidesPerView: number
      slidesPerGroup: number
    },

    960?: {
      spaceBetween: number
      slidesPerView: number
      slidesPerGroup: number
    },

    1150?: {
      spaceBetween: number
      slidesPerView: number
      slidesPerGroup: number
    },
  },
}

interface Embed {
  embed?: {
    type?: string
    html?: string
    thumbnail_url?: string
  }
}

interface TechAndTools {
  title?: string
  description?: string
}

interface OrderedList {
  list_item?: {
    text?: string | RichTextField
  }
}

interface Repeatable extends Embed, TechAndTools, OrderedList {}

export interface SchemaOrgSnippet {
  singleSnippet: {
    text: string
  }[]
  single_snippet: {
    text: string
  }[]
}

export interface AuthorSocialNetwork {
  network: string
  link: {
    url: string
  }
}

export interface Author {
  id: string
  type: string
  uid: string
  data: {
    firstName: string
    lastName: string
    phoneNumber: string
    company: string
    email: string
    location: string
    name: string
    position: string
    description: string
    thumbnail_image: ImageField
    image: ImageField & {
      header: ImageField
      thumbnail: ImageField
    }
    meta_title: string
    meta_description: string
    noindex: boolean
    schema_org_snippets: SchemaOrgSnippet[]
    social_networks: AuthorSocialNetwork[]
    header_plate_text: string
    header_plate_button_text: string
    header_plate_link: {
      url: string
    }
    header_plate_background_color: string
  }
}

export interface TransformedAuthorSocialNetwork {
  key: string
  title: string
  link: FilledLinkToWebField
}

export interface TransformedAuthor {
  type: string
  id: string
  uid: string
  name: string
  position: string
  description: string
  thumbnailImage: ImageField
  image: ImageField & {
    thumbnail: ImageField
  }
  metaTitle: string
  metaDescription: string
  noindex: boolean
  schemaOrgSnippet: SchemaOrgSnippet[]
  personalPageLink: string
  socialNetworks: TransformedAuthorSocialNetwork[]
}

export interface BlogPost {
  data?: {
    body?: {
      slice_type?: string
      slice_variation?: string
      primary: {
        text?: RichTextField
        quote?: RichTextField
        tableRich?: RichTextField
      }
      items?: Repeatable[]
    }[]
    featured_image?: ImageField
    title?: RichTextField
    date?: string
    header_plate_background_color?: string
    header_plate_button_text?: string
    header_plate_link?: string
    header_plate_text?: string
    introduction_paragraph?: RichTextField
    meta_description?: RichTextField
    meta_title?: RichTextField
    post_author?: Author
    post_coauthor?: Author
    post_with_form?: boolean
    schema_org_snippets?: SchemaOrgSnippet[]
    subtitle?: RichTextField
    updated_date?: string
  }
  uid: string
  first_publication_date?: string
  last_publication_date?: string
  id: string
  tags: string[]
  type: string
  isBroken?: boolean | undefined
  description?: string
  formattedDate?: string
  readTime?: string
  recommendedPosts?: any[]
  chapter_name?: any[]
  cu_post?: {
    id: string
    uid: string
  }
  clusterData?: any
  title?: string
  articleLink?: string
  cover?: ImageField
  author?: TransformedAuthor
}

export interface TableOfContent {
  primary: {
    color_theme: string
  }
  items: {
    lable: RichTextField
  }[]
  slice_type: string
}

export interface Ebook {
  variation: string
  version: string
  items: any[]
  primary: {
    background: string
    gradientColor: string
    image: ImageField
    rightImage: ImageField
    imageOpacity: string | null | boolean,
    title: RichTextField
    subtitle: RichTextField,
    btnText: string
    btnLink: FilledLinkToWebField
    modal: string
    ebookPath: string
    ebookName: string
    ebookImage: ImageField
    sendPulseTemplateId: number
  },
  id: string
  slice_type: string
  slice_label: string | null
}

export interface TransformedCaseStudy {
  uid: string
  url: string
  metaTitle: string
  metaDescription: string
  ogImage: string
  schemaOrg: any[]
  slices: any[]
  tagCloud: any
  released: boolean
  title: string
  description: string
  image: ImageField
  headerPlate: {
    text: string
    btnText: string
    btnLink: string
    backgroundColor: string
  }
}
export interface TransformedCaseStudyCard {
  uid: string
  title: KeyTextField
  description: KeyTextField
  logotype: ImageField
  posterLink: KeyTextField
  videoLink: KeyTextField
  tags: string[]
  height: NumberField
}

export interface TransformedChecklist {
  uid: string
  url: string
  metaTitle: KeyTextField
  metaDescription: KeyTextField
  ogImage: string
  schemaOrg: ({ type: string; innerHTML: string; } | null)[] | null
  slices: any[]
  tagCloud: any
  released: boolean
  title: KeyTextField
  description: KeyTextField
  image: ImageField
}

export interface TransformedCustomType {
  id: string
  uid: string
  routePrefix: string
  released: boolean
  showFooter: boolean
  slices: any[]
  metaTitle: KeyTextField
  metaDescription: KeyTextField
  ogImage: string
  schemaOrgSnippet: ({ type: string; innerHTML: string; } | null)[] | null
  emailSubject: KeyTextField
  headerPlate: {
    text: KeyTextField
    btnText: KeyTextField
    btnLink: KeyTextField
    backgroundColor: KeyTextField
  }
}

export interface DigestPost {
  data: {
    body: {
      slice_type?: string
      slice_variation?: string
      primary: {
        text?: RichTextField | undefined
        post?: BlogPost | undefined
        readTime?: string | undefined
      }
      items?: Repeatable[]
    }[]
    featuredImage?: ImageField
    title?: RichTextField
    subtitle?: RichTextField
    date?: string
    header_plate_background_color?: string
    header_plate_button_text?: string
    header_plate_link?: string
    header_plate_text?: string
    metaTitle?: RichTextField
    metaDescription?: RichTextField
    schemaOrgSnippets?: SchemaOrgSnippet[]
    updated_date?: string
  }
  uid: string
  first_publication_date?: string
  last_publication_date?: string
  id: string
  type: string
  digestsList: string[]
  ogImageUrl: string | undefined
}

export interface TransformedVacancy {
  type: string
  id: string
  uid: string
  huntflowVacancyId: KeyTextField
  position: KeyTextField
  title: KeyTextField
  subtitle: KeyTextField
  labels: {
    remote: boolean
    relocation: boolean
  }
  tags: string[]
  slices: VacancyDocumentDataBodySlice[]
  metaTitle: KeyTextField
  metaDescription: KeyTextField
  date: KeyTextField
  schemaOrgSnippet: ({ type: string; innerHTML: string; } | null)[] | null
  released: boolean
}

export interface WriteupPost {
  uid: string
  data?: {
    body?: {
      slice_type?: string
      slice_variation?: string
      primary: {
        text?: RichTextField
      }
    }[]
    title?: KeyTextField
    date?: string
    header_plate_background_color?: SelectField
    header_plate_button_text?: KeyTextField
    header_plate_link: KeyTextField
    header_plate_text: KeyTextField
    meta_description: KeyTextField
    meta_title?: KeyTextField
    author?: Author
    schema_org_snippets: SchemaOrgSnippet[]
    updated_date?: DateField
    created_date?: DateField
    released: BooleanField
    og_image: ImageField
  }
  first_publication_date?: string
  last_publication_date?: string
  tags: string[]
}

export interface GlossaryPage {
  uid: string
  data: {
    body: GlossaryDocumentData['body']
    word_title: KeyTextField
    word_page_title: KeyTextField
    word_page_description: RichTextField
    image: ImageField
    title: KeyTextField
    subtitle: KeyTextField
    description: KeyTextField
    header_plate_background_color: SelectField
    header_plate_button_text: KeyTextField
    header_plate_link: KeyTextField
    header_plate_text: KeyTextField
    meta_description: KeyTextField
    meta_title: KeyTextField
    author: Author
    co_author: Author
    schema_org_snippets: SchemaOrgSnippet[]
    updated_date?: DateField
    created_date?: DateField
    released: BooleanField
    og_image: ImageField
  }
  first_publication_date?: string
  last_publication_date?: string
  tags: string[]
}

export interface TransformedGlossaryPost {
  uid: string
  wordTitle: KeyTextField
  wordPageTitle: KeyTextField
  wordPageDescription: RichTextField
  slices: any[]
  tableOfContents: TableOfContent
  createdDate: string
  updatedDate: string
  author: Author
  coAuthor: Author
}

export interface TransformedGlossaryPageData {
  uid: string
  url: string
  metaTitle: KeyTextField
  metaDescription: KeyTextField
  ogImage: string
  schemaOrg: ({
    type: string
    innerHTML: string
  } | null)[] | null
  released: boolean
}

export interface TransformedGlossaryAuthor {
  image?: ImageField | undefined
  name?: string | undefined
  position?: string | undefined
  link?: string | undefined
}
