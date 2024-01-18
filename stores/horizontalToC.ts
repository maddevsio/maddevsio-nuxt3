import { defineStore } from 'pinia'

export const useHorizontalToCStore = defineStore('horizontalToCStore', () => {
  const activeAnchor = ref('')
  const updateActiveAnchor = (anchor: string) => {
    activeAnchor.value = anchor
  }

  return { activeAnchor, updateActiveAnchor }
})
