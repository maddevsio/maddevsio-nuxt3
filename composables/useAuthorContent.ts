export const useAuthorContent = (contentCount: number, buttonTextContent: string, contentData: any) => {
  const route = useRoute()
  const showMore = ref(false)
  const authorContent = ref(contentData)
  const countToShow = ref(contentCount)
  const buttonText = ref(buttonTextContent)
  const sectionRef = ref<HTMLElement | null>(null)
  const dynamicTag = useDynamicTagCloudStore()

  const showButton = contentData.length > contentCount

  const showMoreContent = () => {
    showMore.value = !showMore.value
    if (!showMore.value) {
      buttonText.value = buttonTextContent
      countToShow.value = contentCount
      sectionRef.value?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    } else {
      buttonText.value = 'See less'
      countToShow.value = authorContent.value.length
    }
  }
  const findTag = (post: any) => post.tags.find((tag: string) => dynamicTag.activeTag.allContent === tag)
  const filterContent = (content: any[], tag: any) => content.filter(item => item.tags.includes(tag))

  onMounted(() => {
    if ('tag' in route.query) {
      const { tag } = route.query
      if (tag === 'All Content') {
        authorContent.value = contentData
      } else {
        authorContent.value = filterContent(contentData, tag)
      }
    }
  })

  watch(() => route.query, query => {
    if ('tag' in query) {
      if (showMore.value) {
        showMore.value = false
        buttonText.value = buttonTextContent
        countToShow.value = contentCount
      }
      const { tag } = query
      if (tag === 'All Content') {
        authorContent.value = contentData
      } else {
        authorContent.value = filterContent(contentData, tag)
      }
    }
  })

  return {
    showMore,
    countToShow,
    showMoreContent,
    buttonText,
    sectionRef,
    authorContent,
    findTag,
    showButton,
  }
}
