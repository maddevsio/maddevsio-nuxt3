import type { Ref } from 'vue'
import type { IHeaderSearchPanel } from '~/components/Widgets/Header/interfaces/IHeaderSearchPanel'

export class HeaderSearchPanel implements IHeaderSearchPanel {
  isActiveModalSearch: Ref<boolean>

  constructor() {
    this.isActiveModalSearch = ref(false)
  }

  openModalSearch() {
    this.isActiveModalSearch.value = !this.isActiveModalSearch.value
    if (this.isActiveModalSearch.value) {
      manageScrollOnBody.disableScrollOnBody()
    } else {
      setTimeout(() => {
        manageScrollOnBody.enableScrollOnBody()
      }, 300)
    }
  }
}
