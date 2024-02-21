import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {
  const headerHeight = ref(0)
  const updateHeaderHeight = (height: number) => {
    headerHeight.value = height
  }

  return { headerHeight, updateHeaderHeight }
})
