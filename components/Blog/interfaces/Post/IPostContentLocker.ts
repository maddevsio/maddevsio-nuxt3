import type { Ref } from 'vue'
import type Ebook from '~/components/Widgets/Modal/Ebook.vue'

export interface IPostContentLocker {
  isScrolled: Ref<boolean>
  timeOutID: Ref<ReturnType<typeof setTimeout> | undefined>
  modalContentLocker: Ref<InstanceType<typeof Ebook> | null>
  TIME_TO_LOCK_CONTENT: number
  EVENT_NAME: string
  showContentLocker(): void
  toggleContentLockerTimer(): void
  handleScroll(): void
  addHandleScroll(): void
  removeHandleScroll(): void
  handleClose(): void
}
