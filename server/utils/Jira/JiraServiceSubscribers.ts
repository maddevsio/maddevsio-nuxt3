import { ATLASSIAN_SUBSCRIBERS_PROJECT_KEY } from '~/server/config/envs'
import { JiraVariables } from '~/interfaces/server/JiraServiceInterfaces'

export class JiraServiceSubscribers {
  private readonly projectKeySubscribers = ATLASSIAN_SUBSCRIBERS_PROJECT_KEY

  private readonly issueType = '10002'

  variables: JiraVariables['variables']

  constructor({ variables }: JiraVariables) {
    this.variables = variables
  }

  buildSubscribersPayload() {
    return {
      fields: {
        summary: this.variables.email, // issue title
        issuetype: {
          id: this.issueType,
        },
        project: {
          key: this.projectKeySubscribers,
        },
        customfield_10056: this.variables.email,
        customfield_10207: this.variables.newsLetter ? { value: this.variables.newsLetter } : null,
        customfield_10183: this.variables.formLocation,
        customfield_10184: this.variables.geoIp,
        customfield_10185: this.variables.pageUrl,
        customfield_10186: this.variables.userBrowser,
        customfield_10187: this.variables.userOS,
        customfield_10188: this.variables.userPlatform,
      },
    }
  }
}
