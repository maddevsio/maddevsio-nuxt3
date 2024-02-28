export const useTableOfContentStore = defineStore('TableOfContentStore', () => {
  const activeTitle = ref('')
  const updateActiveTitle = (newTitle: string) => {
    activeTitle.value = newTitle
  }

  return {
    activeTitle,
    updateActiveTitle,
  }
})
