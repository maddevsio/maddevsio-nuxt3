export interface ActiveTag {
  [key: string]: string
  caseStudies: string
  writeUps: string
  checklists: string
  allContent: string
}

export interface AllTagNames {
  [key: string]: string
  caseStudies: string
  writeUps: string
  checklists: string
}

export const useDynamicTagCloudStore = defineStore('DynamicTagCloudStore', () => {
  const activeTag = reactive<ActiveTag>({
    caseStudies: '',
    writeUps: '',
    checklists: 'Checklist',
    allContent: '',
  })

  const allTagNames = reactive<AllTagNames>({
    caseStudies: '',
    writeUps: '',
    checklists: '',
  })

  const writeAllTagName = (tag: string, type: string) => {
    allTagNames[type] = tag
  }

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
    writeAllTagName,
    allTagNames,
  }
})
