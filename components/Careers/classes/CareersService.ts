import type { PrismicPlugin } from '@prismicio/vue'
import type { Query } from '@prismicio/client'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { VacancyDocument } from '~/prismicio-types'
import type { SchemaOrgSnippet, TransformedVacancy } from '~/interfaces/common/commonInterfaces'

export class CareersService {
  prismic: PrismicPlugin
  domain: string

  constructor(prismic: PrismicPlugin, domain: string) {
    this.prismic = prismic
    this.domain = domain
  }

  async getCareersHome() {
    return await this.prismic.client.getSingle('careers_home')
  }

  async getVacancies() {
    return await this.prismic.client.get({
      filters: [
        this.prismic.filter.at('document.type', 'vacancy'),
      ],
      orderings: {
        field: 'my.vacancy.date',
        direction: 'desc',
      },
      pageSize: 100,
    }) as Query<VacancyDocument>
  }

  async getVacancy(uid: string) {
    return await this.prismic.client.getByUID('vacancy', uid)
  }

  extractVacancyData(vacancy: VacancyDocument): TransformedVacancy {
    return {
      type: vacancy.type,
      id: vacancy.id,
      uid: vacancy.uid,
      huntflowVacancyId: vacancy.data.huntflow_vacancy_id,
      position: vacancy.data.position,
      title: vacancy.data.title,
      subtitle: vacancy.data.subtitle,
      labels: {
        remote: vacancy.data.remote_label,
        relocation: vacancy.data.relocation_label,
      },
      tags: vacancy.tags,
      slices: vacancy.data.body,
      metaTitle: vacancy.data.meta_title,
      metaDescription: vacancy.data.meta_description,
      date: formatDate(vacancy.data.date),
      schemaOrgSnippet: extractSchemaOrg(vacancy.data.schema_org_snippets as SchemaOrgSnippet[]),
      released: vacancy.data.released === null ? true : vacancy.data.released,
      headerPlate: vacancy.data.header_plate_text
        ? {
          text: vacancy.data.header_plate_text,
          btnText: vacancy.data.header_plate_button_text,
          btnLink: vacancy.data.header_plate_link,
          backgroundColor: vacancy.data.header_plate_background_color,
        }
        : null,
    }
  }
}
