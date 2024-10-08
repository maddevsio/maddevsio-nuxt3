import type { PrismicPlugin } from '@prismicio/vue'
import type { Query } from '@prismicio/client'
import type { VacancyDocument } from '~/prismicio-types'
import type { TransformedVacancy } from '~/interfaces/common/commonInterfaces'

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
      date: formatDate(vacancy.data.date),
      released: vacancy.data.released === null ? true : vacancy.data.released,
    }
  }
}
