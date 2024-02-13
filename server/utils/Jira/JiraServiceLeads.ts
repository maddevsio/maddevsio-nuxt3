import { ATLASSIAN_PROJECT_KEY } from '~/server/config/envs'
import { JiraVariables } from '~/interfaces/server/JiraServiceInterfaces'

export class JiraServiceLeads {
  private readonly projectKeyLeads = ATLASSIAN_PROJECT_KEY

  private readonly issueType = '10081'

  variables: JiraVariables['variables']

  constructor({ variables }: JiraVariables) {
    this.variables = variables
  }

  getAdditionalDescription = (variables: JiraVariables['variables']) => {
    if (variables.interestedExpertise) { return `Interested expertise in: ${ variables.interestedExpertise }` }
    if (variables.questionsOnItConsulting) { return `I need expert advice: ${ variables.questionsOnItConsulting }` }
    if (variables.needAssistanceWith) { return `I need assistance with: ${ variables.needAssistanceWith }` }
    if (variables.selectedProjectHost) { return `Project hosted on: ${ variables.selectedProjectHost }` }
    if (variables.selectedTeamSize) { return `Expected team size: ${ variables.selectedTeamSize }` }
    return ''
  }

  buildPayloadLeads() {
    const additionalDescription = this.getAdditionalDescription(this.variables)

    const description = this.variables.projectDescription || this.variables.projectDescriber || ''

    return {
      fields: {
        summary: this.variables.fullName, // issue title
        issuetype: {
          id: this.issueType,
        },
        labels: [
          'maddevs.io',
        ],
        project: {
          key: this.projectKeyLeads,
        },
        customfield_10056: this.variables.email,
        customfield_10057: this.variables.phoneNumber,
        customfield_10166: this.variables.interest ? { value: this.variables.interest } : null,
        customfield_10311: {
          type: 'doc',
          version: 1,
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: [
                    `Traffic source - ${ this.variables.formLocation }`,
                    `GeoIP - ${ this.variables.geoIp }`,
                    `Page - ${ this.variables.pageUrl }`,
                    `Browser - ${ this.variables.userBrowser }`,
                    `Operating system - ${ this.variables.userOS }`,
                    `Platform - ${ this.variables.userPlatform }`,
                    `Newsletter - ${ this.variables.newsLetter }`,
                  ].join('\n'),
                  type: 'text',
                },
              ],
            },
          ],
        },
        description: {
          type: 'doc',
          version: 1,
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: additionalDescription ? `${ additionalDescription }\n${ description }` : description,
                  type: 'text',
                },
              ],
            },
          ],
        },
      },
      transition: {
        id: '31',
      },
    }
  }
}
