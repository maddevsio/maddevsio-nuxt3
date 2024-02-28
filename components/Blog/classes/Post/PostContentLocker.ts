import type { Ref } from 'vue'
import type { IPostContentLocker } from '~/components/Blog/interfaces/Post/IPostContentLocker'
import type Ebook from '~/components/Widgets/Modal/Ebook.vue'

export class PostContentLocker implements IPostContentLocker {
  isScrolled: Ref<boolean>
  timeOutID: Ref<ReturnType<typeof setTimeout> | undefined>
  modalContentLocker: Ref<InstanceType<typeof Ebook> | null>

  TIME_TO_LOCK_CONTENT = 2000
  // TIME_TO_LOCK_CONTENT = 15000

  EVENT_NAME = 'scroll'

  constructor() {
    this.isScrolled = ref(false)
    this.timeOutID = ref()
    this.modalContentLocker = ref<InstanceType<typeof Ebook>>(null)

    this.showContentLocker = this.showContentLocker.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.removeHandleScroll = this.removeHandleScroll.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.addHandleScroll = this.addHandleScroll.bind(this)
    this.toggleContentLockerTimer = this.toggleContentLockerTimer.bind(this)
  }

  showContentLocker() {
    this.timeOutID.value = setTimeout(() => {
      this.modalContentLocker.value.show()
    }, this.TIME_TO_LOCK_CONTENT)
  }

  toggleContentLockerTimer() {
    if (!this.modalContentLocker.value?.isShowModal.value) {
      this.showContentLocker()
    } else {
      clearTimeout(this.timeOutID.value)
    }
  }

  handleScroll() {
    this.isScrolled.value = true
    this.removeHandleScroll()
  }

  addHandleScroll() {
    window.addEventListener(this.EVENT_NAME, this.handleScroll)
  }

  removeHandleScroll() {
    window.removeEventListener(this.EVENT_NAME, this.handleScroll)
  }

  handleClose() {
    this.removeHandleScroll()
    clearTimeout(this.timeOutID.value)
  }
}
