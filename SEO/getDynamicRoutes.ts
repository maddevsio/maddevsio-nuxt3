import axios from 'axios'
import { config } from 'dotenv'

config()

const getPages = async (pageUrl: string) => {
  let posts: any[] = []
  const response = await axios.get(pageUrl)

  posts = posts.concat(response.data.results)
  if (response.data.next_page) {
    posts = posts.concat(await getPages(response.data.next_page))
  }
  return posts
}

const convertToSlug = (text: string | undefined) => {
  if (typeof text !== 'string') { return '' }
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, '')
    .replace(/\s+/g, '-')
}

const getRoutePrefix = (routePrefix: string | undefined) => ((typeof routePrefix !== 'string' || !routePrefix)
  ? ''
  : routePrefix.replace(/^\/|\/$/g, ''))

const getPrismicRef = async () => {
  const prismicData = await axios.get(process.env.NODE_PRISMIC_API!)
  const { ref } = prismicData.data.refs[0]
  return ref
}

const getBlogPostsUrls = async (ref: string) => {
  const blogPostsUrls = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["post", "tags"])]]&pageSize=100`,
  )
  return {
    blog: [
      '/blog/',
      ...blogPostsUrls
        .filter(post => post.type === 'post' && post.data.released !== false)
        .map(post => `/blog/${ post.uid }/`),
      ...blogPostsUrls
        .filter(post => post.type === 'tags')[0]
        .data.tags.map((tag: any) => `/tag/${ convertToSlug(tag.tag_name) }/`),
    ],
  }
}

const getMainUrls = async (ref: string) => {
  const expertPages = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["expert"])]]&pageSize=100`,
  )

  return {
    main: [
      '/',
      '/gdpr/',
      '/nda/',
      '/privacy/',
      '/faq/',
      '/team/',
      ...expertPages
        .filter(page => page.type === 'expert' && page.data.released === true)
        .map(expert => `/team/${ expert.uid }/`),
      '/contact-us/',
      '/sustainability-policy/',
      '/delivery-models/',
      '/delivery-models/staff-augmentation/',
      '/delivery-models/dedicated-team/',
      '/delivery-models/temp-to-hire/',
      '/delivery-models/technical-assessment/',
      '/delivery-models/team-supervision/',
      '/delivery-models/transferring-projects/',
      '/our-philosophy/',
      '/transparency/',
    ],
  }
}

const getCaseStudiesUrls = async (ref: string) => {
  const caseStudiesUrls = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["case-studies"])]]&pageSize=100`,
  )
  return {
    caseStudies: [
      ...caseStudiesUrls.filter(post => post.type === 'case-studies' && post.data.released === true)
        .map(page => (page.uid === 'case-studies' ? `/${ page.uid }/` : `/case-studies/${ page.uid }/`)),
    ],
  }
}

const getInsightUrls = async (ref: string) => {
  const insightUrls = await getPages(

    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["customer_university", "custom_page", "writeup", "checklists", "glossary"])]]&pageSize=100`,
  )

  return {
    insights: [
      '/open-source/',
      ...insightUrls
        .filter(post => post.type === 'customer_university' && post.data.released !== false)
        .map(post => `/customer-university/${ post.uid }/`),
      ...insightUrls
        .filter(post => (
          post.type === 'custom_page' &&
        post.data.released === true &&
        (post.uid === 'ebooks' ||
          post.data.route_prefix === 'ebooks'
        )))
        .map(page => `/${ getRoutePrefix(page.data.route_prefix) }/${ page.uid }/`),
      ...insightUrls
        .filter(post => post.type === 'writeup' && post.data.released === true)
        .map(page => (page.uid === 'writeups' ? `/${ page.uid }/` : `/writeups/${ page.uid }/`)),
      ...insightUrls
        .filter(checklist => checklist.type === 'checklists' && checklist.data.released === true)
        .map(checklist => (checklist.uid === 'checklists' ? `/${ checklist.uid }` : `/checklists/${ checklist.uid }/`)),
      ...insightUrls.filter(post => post.type === 'glossary' && post.data.released === true)
        .map(page => (page.uid === 'glossary' ? `/${ page.uid }/` : `/glossary/${ page.uid }/`)),
    ],
  }
}

const getAuthorsUrls = async (ref: string) => {
  const authorsUrls = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["author"])]]&pageSize=100`,
  )

  return {
    authors: [
      '/blog/authors/',
      ...authorsUrls
        .filter(post => post.type === 'author' && !post.data.noindex)
        .map(author => `/blog/authors/${ author.uid }/`),
    ],
  }
}

const getCareersUrls = async (ref: string) => {
  const careersUrls = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["vacancy"])]]&pageSize=100`,
  )

  return {
    careers: [
      '/careers/',
      ...careersUrls
        .filter(post => post.type === 'vacancy' && (post.data.released === true || post.data.released === null))
        .map(vacancy => `/careers/${ vacancy.uid }/`),
    ],
  }
}

const getCustomPageUrls = async (ref: string) => {
  const customPageUrls = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["custom_page"])]]&pageSize=100`,
  )

  /* Custom pages from production */
  const excludePages = [
    'about',
    'ebooks',
    'team',
    'contact-us',
    'authors',
    'sustainability-policy',
  ]

  return {
    services: [
      ...customPageUrls
        .filter(post => (
          post.type === 'custom_page' &&
        post.data.released === true &&
        post.data.route_prefix !== 'ebooks' &&
        post.data.route_prefix !== 'blog' &&
        !excludePages.includes(post.uid)
        ))
        .map(page => `${ getRoutePrefix(page.data.route_prefix) === '' ? '' : `/${ getRoutePrefix(page.data.route_prefix) }` }/${ page.uid }/`),
    ],
  }
}

export const getPrismicRoutes = async () => {
  const ref = await getPrismicRef()
  const structuredRoutes = await Promise.all([
    getMainUrls(ref),
    getCustomPageUrls(ref),
    getBlogPostsUrls(ref),
    getCareersUrls(ref),
    getCaseStudiesUrls(ref),
    getInsightUrls(ref),
    getAuthorsUrls(ref),
  ])
  const pages = structuredRoutes.reduce((acc, route) => {
    acc = {
      ...acc,
      ...route,
    }
    return acc
  }, {})
  return Object.values(pages).flat()
}
