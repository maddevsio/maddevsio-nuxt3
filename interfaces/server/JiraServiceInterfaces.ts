export interface JiraVariables {
  type: string
  templateId: string | number
  variables: {
    [key: string]: string
    interestedExpertise: string
    questionsOnItConsulting: string
    needAssistanceWith: string
    selectedProjectHost: string
    selectedTeamSize: string
    projectDescription: string
    projectDescriber: string
    fullName: string
    email: string
    phoneNumber: string
    interest: string
    formLocation: string
    geoIp: string
    pageUrl: string
    userBrowser: string
    userOS: string
    userPlatform: string
    newsLetter: string
    emailTo: string
    ip: string
    consent_to_mailing: string
    positionTitle: string
    linkedinProfile: string
    addressBooksId: string
    fromId: string
    vacancy_category: string
    modalTitle: string
    subject: string
    alreadySubscribed: string
    type: string
  }
}
