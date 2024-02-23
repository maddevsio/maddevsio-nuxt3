interface ResponseTags {
  data: {
    tags: {
      tag_name: string
    }[]
  }
}

export const useTagCloudStore = defineStore('TagCloudStore', () => {
  const tags = ref<{ tagName: string }[]>([])
  const activeTags = ref<string[]>([])
  const postsPage = ref(1)
  const defaultArrayWithTags = ref<{tags: string[]}[]>([])
  const $prismic = usePrismic()

  const getTags = async () => {
    const response = await $prismic.client.get({
      filters: [
        $prismic.filter.at('document.type', 'tags'),
      ],
      orderings: {
        field: 'my.post.date',
        direction: 'desc',
      },
      pageSize: 100,
    })
    return response.results as ResponseTags[]
  }

  const getTagsFromPrismic = async () => {
    if (!tags.value.length) {
      const responseTags = await getTags()
      if (responseTags.length && responseTags[0].data.tags && responseTags[0].data.tags.length) {
        tags.value = responseTags[0].data.tags.map(tag => ({
          tagName: tag.tag_name === 'Software Development' ? 'Software Development ' : tag.tag_name,
        }))
      }
    }
  }

  const changeActiveTags = (category: string) => {
    activeTags.value = [...activeTags.value, category]
    postsPage.value = 1
  }

  const deleteActiveTag = (category: string) => {
    activeTags.value = [...activeTags.value.filter(tag => tag !== category)]
    postsPage.value = 1
  }

  const setDefaultArrayWithTags = (array: any) => {
    defaultArrayWithTags.value = array
  }

  const clearAllData = () => {
    activeTags.value = []
    postsPage.value = 1
    defaultArrayWithTags.value = []
  }

  return {
    tags,
    activeTags,
    postsPage,
    defaultArrayWithTags,
    getTagsFromPrismic,
    changeActiveTags,
    deleteActiveTag,
    setDefaultArrayWithTags,
    clearAllData,
  }
})
