import axios from 'axios'
import { config } from 'dotenv'
import mainRedirects from '../../SEO/mainRedirects.json'
import { convertToSlug, getRoutePrefix, getStructuredRoutes } from './getRoutes'

config()

const MAIN = '/main.xml'
const CASES = '/cases.xml'
const INSIGHTS = '/insights.xml'
const BLOG = '/blog.xml'
const AUTHORS = '/authors.xml'
const CAREERS = '/careers.xml'
const SERVICES = '/services.xml'

export const SITEMAP_PATHS = {
  MAIN,
  CASES,
  INSIGHTS,
  BLOG,
  AUTHORS,
  CAREERS,
  SERVICES,
}

const EXCLUDE_ROUTES: {
  [key: string]: number
} = {
  '/': 1,
  '/gdpr': 0.7,
  '/nda': 0.7,
  '/privacy': 0.7,
  '/faq': 0.7,
}

const IGNORE_ROUTES = [
  '/tag/featured-post',
  '/tag/copywriter',
  '/tag/marketing',
  '/tag/it',
  '/tag/django',
  '/tag/go',
  '/tag/golang',
  '/tag/ios',
  '/tag/hr',
  '/tag/assistant',
  '/tag/hr-department',
  '/tag/assistant-delivery-manager',
  '/tag/software-features',
  '/tag/customer-university',
  '/blog/mad-devs-devops',
  '/blog/middle-python-developer',
  '/blog/vue-vuetify-middle-v-saas-proekt',
  '/blog/senior-android-developer',
  '/blog/project-manager-v-finteh-proekt',
  '/blog/middle-ios-developer',
  '/blog/golang-middle-senior-developer-v-finteh-proekt',
  '/blog/senior-ios-developer',
  '/blog/mad-devs-ishet-senior-python-developer-v-proekt-clutch',
  '/blog/middle-android-developer',
  '/blog/ios-middle-senior-developer-v-finteh-proekt',
  '/blog/it-recruiter-middle-maddevs',
  '/blog/mad-devs-ishet-golang-razrabotchika',
  '/mad-devs-ishet-golang-razrabotchika',
  '//success-and-faq',
  '/success-and-faq',
  '/about',
  '//about',
]

/** The priority of the route depends on the nesting. More nesting has a lower priority
 Nesting is equal to minus 0.1 unit. Consistent with Seo * */
const getRoutePriority = (path: string) => 1 - (((path.split('/').length) - 1) * 0.1)

const generateRoute = (name: string) => {
  if (IGNORE_ROUTES.includes(name)) {
    return null
  }

  const priority = EXCLUDE_ROUTES[name] || getRoutePriority(name)

  return {
    priority,
    url: `${ name }/`,
    changefreq: 'daily',
    lastmod: new Date().toISOString(),
  }
}

const getPages = async (pageUrl: string) => {
  let pages: any[] = []
  const response = await axios.get(pageUrl)

  pages = pages.concat(response.data.results)
  if (response.data.next_page) {
    pages = pages.concat(await getPages(response.data.next_page))
  }
  return pages
}

const getPrismicRef = async () => {
  const prismicData = await axios.get(process.env.NODE_PRISMIC_API!)
  const { ref } = prismicData.data.refs[0]
  return ref
}

const getBlogPostsUrls = async () => {
  const ref = await getPrismicRef()
  const blogPostsUrls = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["post", "tags"])]]&pageSize=100`,
  )
  return {
    blog: [
      '/blog/',
      ...blogPostsUrls
        .filter(post => post.type === 'post')
        .map(post => `/blog/${ post.uid }`),
      ...blogPostsUrls
        .filter(post => post.type === 'tags')[0]
        .data.tags.map((tag: { tag_name: string }) => `/tag/${ convertToSlug(tag.tag_name) }`),
    ],
  }
}

const getMainUrls = async () => {
  const ref = await getPrismicRef()
  const expertPages = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["expert"])]]&pageSize=100`,
  )

  return {
    main: [
      '/',
      '/gdpr',
      '/nda',
      '/privacy',
      '/faq',
      '/team',
      ...expertPages
        .filter(page => page.type === 'expert' && page.data.released === true)
        .map(expert => `/team/${ expert.uid }`),
      '/contact-us',
      '/sustainability-policy',
      '/delivery-models',
      '/delivery-models/staff-augmentation',
      '/delivery-models/dedicated-team',
      '/delivery-models/temp-to-hire',
      '/delivery-models/technical-assessment',
      '/delivery-models/team-supervision',
      '/delivery-models/transferring-projects',
      '/our-philosophy',
      '/transparency',
    ],
  }
}

const getCaseStudiesUrls = async () => {
  const ref = await getPrismicRef()
  const caseStudiesUrls = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["case-studies"])]]&pageSize=100`,
  )
  return {
    caseStudies: [
      ...caseStudiesUrls.filter(post => post.type === 'case-studies' && post.data.released === true)
        .map(page => (page.uid === 'case-studies' ? `/${ page.uid }/` : `/case-studies/${ page.uid }`)),
    ],
  }
}

const getInsightUrls = async () => {
  const ref = await getPrismicRef()
  const insightUrls = await getPages(

    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["customer_university", "custom_page", "writeup", "checklists", "glossary"])]]&pageSize=100`,
  )

  return {
    insights: [
      '/open-source/',
      ...insightUrls
        .filter(post => post.type === 'customer_university')
        .map(post => `/customer-university/${ post.uid }`),
      ...insightUrls
        .filter(post => (
          post.type === 'custom_page' &&
        post.data.released === true &&
        (post.uid === 'ebooks' ||
          post.data.route_prefix === 'ebooks'
        )))
        .map(page => `/${ getRoutePrefix(page.data.route_prefix) }/${ page.uid }`),
      ...insightUrls
        .filter(post => post.type === 'writeup' && post.data.released === true)
        .map(page => (page.uid === 'writeups' ? `/${ page.uid }/` : `/writeups/${ page.uid }`)),
      ...insightUrls
        .filter(checklist => checklist.type === 'checklists' && checklist.data.released === true)
        .map(checklist => (checklist.uid === 'checklists' ? `/${ checklist.uid }` : `/checklists/${ checklist.uid }`)),
      ...insightUrls.filter(post => post.type === 'glossary' && post.data.released === true)
        .map(page => (page.uid === 'glossary' ? `/${ page.uid }/` : `/glossary/${ page.uid }`)),
    ],
  }
}

const getAuthorsUrls = async () => {
  const ref = await getPrismicRef()
  const authorsUrls = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["author"])]]&pageSize=100`,
  )

  return {
    authors: [
      '/blog/authors/',
      ...authorsUrls
        .filter(post => post.type === 'author' && !post.data.noindex)
        .map(author => `/blog/authors/${ author.uid }`),
    ],
  }
}

const getCareersUrls = async () => {
  const ref = await getPrismicRef()
  const careersUrls = await getPages(
    `${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&q=[[any(document.type, ["vacancy"])]]&pageSize=100`,
  )

  return {
    careers: [
      '/careers/',
      ...careersUrls
        .filter(post => post.type === 'vacancy' && (post.data.released === true || post.data.released === null))
        .map(vacancy => `/careers/${ vacancy.uid }`),
    ],
  }
}

const getCustomPageUrls = async () => {
  const ref = await getPrismicRef()
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
    'faq',
    'main-page',
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
        .map(page => `${ getRoutePrefix(page.data.route_prefix) === '' ? '' : `/${ getRoutePrefix(page.data.route_prefix) }` }/${ page.uid }`),
    ],
  }
}

interface Sitemap {
  main?: string[]
  services?: string[]
  careers?: string[]
  authors?: string[]
  insights?: string[]
  caseStudies?: string[]
  blog?: string[]
}

export const getSitemapRoutes = async (sitemapName: string): Promise<Sitemap> => {
  let structuredRoutes: Sitemap = {}
  const urls = mainRedirects.map(({ from }) => from.replace(/\/+$/g, ''))

  switch (sitemapName) {
  case 'main':
    structuredRoutes = await getMainUrls()
    break
  case 'blog':
    structuredRoutes = await getBlogPostsUrls()
    break
  case 'caseStudies':
    structuredRoutes = await getCaseStudiesUrls()
    break
  case 'insights':
    structuredRoutes = await getInsightUrls()
    break
  case 'authors':
    structuredRoutes = await getAuthorsUrls()
    break
  case 'careers':
    structuredRoutes = await getCareersUrls()
    break
  case 'services':
    structuredRoutes = await getCustomPageUrls()
    break
  default:
    structuredRoutes = await getStructuredRoutes()
    break
  }

  Object.keys(structuredRoutes)
    .forEach(routeGroup => {
      if (Object.prototype.hasOwnProperty.call(structuredRoutes, routeGroup)) {
        // @ts-ignore
        structuredRoutes[routeGroup] = structuredRoutes[routeGroup].map(route => generateRoute(route.trim()))
          .filter(Boolean)
        // @ts-ignore
          .filter(route => !urls.includes(route.url.replace(/\/+$/g, '')))
      }
    })

  return structuredRoutes
}
