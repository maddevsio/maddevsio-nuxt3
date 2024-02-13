import { ATLASSIAN_PROJECT_EBOOK_KEY } from '~/server/config/envs'
import { JiraVariables } from '~/interfaces/server/JiraServiceInterfaces'

export class JiraServiceEbooks {
  private readonly projectKeyEbooks = ATLASSIAN_PROJECT_EBOOK_KEY

  private readonly issueType = '10002'

  variables: JiraVariables['variables']

  constructor({ variables }: JiraVariables) {
    this.variables = variables
  }

  buildEbookPayload() {
    return {
      fields: {
        summary: this.variables.fullName, // issue title
        issuetype: {
          id: this.issueType,
        },
        project: {
          key: this.projectKeyEbooks,
        },
        customfield_10058: this.variables.fullName,
        customfield_10056: this.variables.email,
        customfield_10207: this.variables.consent_to_mailing ? { value: this.variables.consent_to_mailing } : null,
        customfield_10185: this.variables.pageUrl,
        customfield_10064: 'maddevs.io',
        customfield_10183: this.variables.formLocation,
      },
    }
  }
}
