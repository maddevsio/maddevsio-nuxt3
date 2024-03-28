export const useEmailSubjectStore = defineStore('EmailSubjectStore', () => {
  const emailSubject = ref('')

  const updateEmailSubject = (subject: string) => {
    emailSubject.value = subject
  }

  return {
    emailSubject,
    updateEmailSubject,
  }
})
