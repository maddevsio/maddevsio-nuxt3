export interface CareersRequestData {
  body: {
    token: string
    email: {
      type: string
      templateId: number
      variables: {
        fullName: string
        email: string
        linkedinProfile: string
        positionTitle: string
        phoneNumber: string
        subject: string
        modalTitle: string
        pageUrl: string
        userBrowser: string
        userOS: string
        userPlatform: string
        formLocation: string
      }
      attachment: {
        base64: string | null
        name: string
      }
    }
  }
  cvFile: File
}
