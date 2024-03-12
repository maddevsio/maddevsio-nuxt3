interface ActiveTag {
  [key: string]: string
  caseStudies: string
  writeUps: string
  checklists: string
  allContent: string
}

export const useDynamicTagCloudStore = defineStore('DynamicTagCloudStore', () => {
  const activeTag = reactive<ActiveTag>({
    caseStudies: '',
    writeUps: '',
    checklists: 'Checklist',
    allContent: '',
  })

  const updateActiveTag = (tag: string, type: string) => {
    if (type !== 'all') {
      activeTag[type] = tag
    } else {
      activeTag.caseStudies = ''
      activeTag.writeUps = ''
      activeTag.checklists = ''
    }
  }

  return {
    activeTag,
    updateActiveTag,
  }
})
