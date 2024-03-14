export interface HeaderPlateStore {
  headerPlateData: {
    text: string
    btnText: string
    btnLink: string
    backgroundColor: string
  } | null
}

// @ts-ignore
export const useHeaderPlateStore = defineStore('HeaderPlateStore', {
  state(): HeaderPlateStore {
    return {
      headerPlateData: null,
    }
  },
  actions: {
    updateHeaderPlateData(data: any) {
      // @ts-ignore
      this.headerPlateData = data
    },
  },
  persist: true,
})
