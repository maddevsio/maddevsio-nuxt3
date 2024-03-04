import type { PrismicPlugin } from '@prismicio/vue'
import type { ImageField, Query } from '@prismicio/client'
import { fetchLinks } from '~/config/constants'
import type { CaseStudiesDocument } from '~/prismicio-types'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { SchemaOrgSnippet, TransformedCaseStudyCard } from '~/interfaces/common/commonInterfaces'

export class CaseStudiesService {
  prismic: PrismicPlugin

  constructor(prismic: PrismicPlugin) {
    this.prismic = prismic
  }

  async getCaseStudiesPageContent() {
    return await this.prismic.client.getByUID('case-studies', 'case-studies', { fetchLinks })
  }

  extractCaseStudiesHomePageData(caseStudiesPageData: CaseStudiesDocument, domain: string) {
    const ogImageWithoutCrop = caseStudiesPageData.data.ogImage?.url?.replace('compress,', '')
    return {
      uid: caseStudiesPageData.uid,
      url: caseStudiesPageData.uid === 'case-studies' ? `${ domain }/case-studies/` : `${ domain }/case-studies/${ caseStudiesPageData.uid }/`,
      metaTitle: caseStudiesPageData.data?.metaTitle,
      metaDescription: caseStudiesPageData.data?.metaDescription,
      ogImage: ogImageWithoutCrop || 'https://maddevsio.s3.eu-west-1.amazonaws.com/images/Cases/common/webp/case-studies-og.webp',
      schemaOrg: extractSchemaOrg(caseStudiesPageData.data?.schemaOrgSnippets as SchemaOrgSnippet[]),
      slices: caseStudiesPageData.data?.body.filter(slice => slice.slice_type !== 'tag_cloud_slice'),
      tagCloud: caseStudiesPageData.data?.body.filter(slice => slice.slice_type === 'tag_cloud_slice'),
      released: caseStudiesPageData.data?.released,
      title: caseStudiesPageData.data?.title,
      description: caseStudiesPageData.data?.description,
      image: caseStudiesPageData.data?.image,
      headerPlate: {
        text: caseStudiesPageData.data?.header_plate_text,
        btnText: caseStudiesPageData.data?.header_plate_button_text,
        btnLink: caseStudiesPageData.data?.header_plate_link,
        backgroundColor: caseStudiesPageData.data?.header_plate_background_color,
      },
    }
  }

  async getCaseStudiesPages({
    tags = ['Case Studies'],
    pageSize = 11,
    page = 1,
    ffEnvironment,
  }: {
    tags: string[]
    pageSize: number
    page: number
    ffEnvironment: string
  }): Promise<Query<CaseStudiesDocument>> {
    try {
      return await this.prismic.client.get({
        filters: [
          this.prismic.filter.any('document.type', ['case-studies']),
          this.prismic.filter.any('document.tags', tags),
          ffEnvironment === 'production' ? this.prismic.filter.at('my.case-studies.released', true) : '',
        ].filter(Boolean),
        orderings: {
          field: 'my.case-studies.publish_date',
          direction: 'desc',
        },
        page,
        pageSize,
      })
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async loadCasesPagesData(pageSize = 11, route: any, ffEnvironment: string) {
    const checkedTag = checkTagCloudName(route.query.tag)
    let allCasePages
    if ('page' in route.query && !('tag' in route.query)) {
      allCasePages = await this.getCaseStudiesPages({
        tags: ['Case studies'],
        pageSize,
        page: Number(route.query.page),
        ffEnvironment,
      })
    }

    if ('page' in route.query && 'tag' in route.query) {
      allCasePages = await this.getCaseStudiesPages({
        tags: [checkedTag],
        pageSize,
        page: Number(route.query.page),
        ffEnvironment,
      })
    }

    if ('tag' in route.query && !('page' in route.query)) {
      allCasePages = await this.getCaseStudiesPages({
        tags: [checkedTag],
        pageSize,
        page: 1,
        ffEnvironment,
      })
    }

    if (!('tag' in route.query) && !('page' in route.query)) {
      allCasePages = await this.getCaseStudiesPages({
        tags: ['Case studies'],
        pageSize,
        page: 1,
        ffEnvironment,
      })
    }

    return allCasePages
  }

  transformationCasesDataForCards(cases: Query<CaseStudiesDocument>): TransformedCaseStudyCard[] | [] {
    return cases.results && cases.results.length
      ? cases.results.map(caseStudy => ({
        uid: caseStudy?.uid,
        title: caseStudy?.data?.title,
        description: caseStudy?.data?.description,
        logotype: caseStudy?.data?.card_logo,
        posterLink: caseStudy?.data?.card_poster_link,
        videoLink: caseStudy?.data?.card_video_link,
        tags: caseStudy.tags.filter((tag: string) => tag !== 'Case studies'),
        height: caseStudy?.data?.card_height,
      }))
      : []
  }
}
