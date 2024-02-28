import type { Ref } from 'vue'
import type { IPostSidebar, PostSidebarProps } from '~/components/Blog/interfaces/Post/IPostSidebar'
import type { IPostTableOfContents } from '~/components/Blog/interfaces/Post/IPostTableOfContents'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'
import { PostTableOfContents } from '~/components/Blog/classes/Post/PostTableOfContents'
import { SubscribeFormBlock } from '~/components/Widgets/Form/classes/forms/SubscribeFormBlock'

export class PostSidebar implements IPostSidebar {
  postTableOfContentsInstance: IPostTableOfContents
  openGraphUrl: string
  metaTitle: string
  servicePost: boolean
  postForm: any
  postRated: Ref<boolean>
  showSubscribeFormTimer: Ref<ReturnType<typeof setTimeout> | undefined>
  subscribeFormBlock: ISubscribeFormBlock

  indentFromHeader = 31
  mobilePoint = 1185

  constructor({
    tableOfContents,
    openGraphUrl,
    metaTitle,
    servicePost,
    postForm,
    mobilePoint,
  }: PostSidebarProps) {
    this.postTableOfContentsInstance = new PostTableOfContents({ tableOfContents, servicePost })
    this.openGraphUrl = openGraphUrl
    this.metaTitle = metaTitle
    this.servicePost = servicePost || false
    this.postForm = postForm
    this.mobilePoint = mobilePoint || this.mobilePoint
    this.postRated = ref(false)
    this.showSubscribeFormTimer = ref()

    this.subscribeFormBlock = new SubscribeFormBlock({
      colorTheme: 'white',
      options: {
        formLocation: 'Table Of Content',
        lineBreakForLink: true,
        showButton: true,
        showBackgroundImage: true,
      },
    })

    this.showSubscribeForm = this.showSubscribeForm.bind(this)
    markRaw(this)
  }

  showSubscribeForm() {
    this.showSubscribeFormTimer.value = setTimeout(() => {
      this.postRated.value = true
    }, 3000)
  }
}
