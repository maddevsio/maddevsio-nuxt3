import axios from 'axios'
import { config } from 'dotenv'

config()

const getPosts = async (pageUrl: string) => {
  let posts: any[] = []
  const response = await axios.get(pageUrl)

  posts = posts.concat(response.data.results)
  if (response.data.next_page) {
    posts = posts.concat(await getPosts(response.data.next_page))
  }
  return posts
}

export const convertToSlug = (text: string | undefined) => {
  if (typeof text !== 'string') { return '' }
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, '')
    .replace(/\s+/g, '-')
}

export const getRoutePrefix = (routePrefix: string | undefined) => ((typeof routePrefix !== 'string' || !routePrefix)
  ? ''
  : routePrefix.replace(/^\/|\/$/g, ''))

const getDynamicRoutes = async () => {
  // Getting data from prismic
  const prismicData = await axios.get(process.env.NODE_PRISMIC_API!)

  // Getting posts of all types from prismic
  const { ref } = prismicData.data.refs[0]
  const prismicPosts = await getPosts(`${ process.env.NODE_PRISMIC_API }/documents/search?ref=${ ref }&pageSize=100`)

  // Creating a list of routes
  const blogPageRoutes = prismicPosts
    .filter(post => post.type === 'post')
    .map(post => `/blog/${ post.uid }`)

  const cuPageRoutes = prismicPosts
    .filter(post => post.type === 'customer_university')
    .map(post => `/customer-university/${ post.uid }`)

  const ebooks = prismicPosts
    .filter(post => (
      post.type === 'custom_page' &&
    post.data.released === true &&
    (post.uid === 'ebooks' ||
      post.data.route_prefix === 'ebooks'
    )))
    .map(page => `/${ getRoutePrefix(page.data.route_prefix) }/${ page.uid }`)

  const authorPageRoutes = prismicPosts
    .filter(post => post.type === 'author')
    .map(author => `/blog/authors/${ author.uid }`)

  const careerPageRoutes = prismicPosts
    .filter(post => post.type === 'vacancy')
    .map(vacancy => `/careers/${ vacancy.uid }`)

  const tagPageRoutes = prismicPosts
    .filter(post => post.type === 'tags')[0]
    .data.tags.map((tag: { tag_name: string }) => `/tag/${ convertToSlug(tag.tag_name) }`)

  /* Custom pages from production */
  const excludePages = [
    'about',
    'ebooks',
    'team',
    'contact-us',
    'authors',
    'sustainability-policy',
  ]

  const customPageRoutes = prismicPosts
    .filter(post => (
      post.type === 'custom_page' &&
    post.data.released === true &&
    post.data.route_prefix !== 'ebooks' &&
    post.data.route_prefix !== 'blog' &&
    !excludePages.includes(post.uid)
    ))
    .map(page => `${ getRoutePrefix(page.data.route_prefix) === '' ? '' : `/${ getRoutePrefix(page.data.route_prefix) }` }/${ page.uid }`)

  const writeups = prismicPosts
    .filter(writeup => writeup.type === 'writeup' && writeup.released)
    .map(page => `/writeups/${ page.uid }/`)

  return {
    blogPageRoutes,
    cuPageRoutes,
    authorPageRoutes,
    careerPageRoutes,
    tagPageRoutes,
    customPageRoutes,
    ebooks,
    writeups,
  }
}

export const getStructuredRoutes = async () => {
  const dynamicRoutes = await getDynamicRoutes()

  return {
    main: [
      '/',
      '/gdpr',
      '/nda',
      '/privacy',
      '/faq',
      '/team',
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
    ],
    caseStudies: [
      '/case-studies/',
      '/case-studies/peklo',
      '/case-studies/namba-taxi',
      '/case-studies/citycam',
      '/case-studies/R4TCA-web-application',
      '/case-studies/namba-food',
      '/case-studies/sir-john-monash-centre',
      '/case-studies/godee',
      '/case-studies/yourcast',
      '/case-studies/veeqo',
      '/case-studies/clutch',
      '/case-studies/bandpay',
      '/case-studies/guardrails',
      '/case-studies/lido',
      '/case-studies/megauni',
      '/case-studies/bilimapp',
      '/case-studies/mobile-banking',
    ],
    insights: [
      '/open-source/',
      ...dynamicRoutes.cuPageRoutes,
      ...dynamicRoutes.ebooks,
      ...dynamicRoutes.writeups,
    ],
    blog: [
      '/blog/',
      ...dynamicRoutes.blogPageRoutes,
      ...dynamicRoutes.tagPageRoutes,
    ],
    authors: [
      '/blog/authors/',
      ...dynamicRoutes.authorPageRoutes,
    ],
    careers: [
      '/careers/',
      ...dynamicRoutes.careerPageRoutes,
    ],
    services: [
      ...dynamicRoutes.customPageRoutes,
    ],
  }
}

export const getRoutes = async () => {
  const structuredRoutes = await getStructuredRoutes()
  return Object.values(structuredRoutes).flat()
}
