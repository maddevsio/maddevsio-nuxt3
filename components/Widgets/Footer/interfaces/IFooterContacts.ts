export interface IFooterContacts {
  emailTitle: string
  email: string
  sendEmailEvent(type: string, emailEnv: string): void
}
