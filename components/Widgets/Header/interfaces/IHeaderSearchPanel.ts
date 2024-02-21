import type { Ref } from 'vue'

export interface IHeaderSearchPanel {
  isActiveModalSearch: Ref<boolean>
  openModalSearch(): void
}
