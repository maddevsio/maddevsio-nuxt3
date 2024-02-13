import { NODE_ATLASSIAN_CAREERS_PROJECT_KEY } from '~/server/config/envs'
import { JiraVariables } from '~/interfaces/server/JiraServiceInterfaces'

export class JiraServiceCareers {
  private readonly projectKeyCareers = NODE_ATLASSIAN_CAREERS_PROJECT_KEY

  private readonly issueType = '10086'

  variables: JiraVariables['variables']

  constructor({ variables }: JiraVariables) {
    this.variables = variables
  }

  buildPayloadCareers() {
    return {
      fields: {
        summary: this.variables.fullName, // issue title
        issuetype: {
          id: this.issueType,
        },
        project: {
          key: this.projectKeyCareers,
        },
        customfield_10302: ['maddevsio-website'],
        description: {
          type: 'doc',
          version: 1,
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: [
                    `Full name - ${ this.variables.fullName }`,
                    `Email - ${ this.variables.email }`,
                    `Phone number - ${ this.variables.phoneNumber }`,
                    `Position - ${ this.variables.positionTitle }`,
                    `LinkedIn Profile - ${ this.variables.linkedinProfile }`,
                    `Page - ${ this.variables.pageUrl }`,
                    `GeoIP - ${ this.variables.geoIp }`,
                  ].join('\n'),
                  type: 'text',
                },
              ],
            },
          ],
        },
      },
    }
  }
}
