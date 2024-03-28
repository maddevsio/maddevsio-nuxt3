import type { ComputedRef, Ref } from 'vue'
import type { HeaderCrumb, IHeaderCrumbs } from '~/components/Widgets/Header/interfaces/IHeaderCrumbs'

export class HeaderCrumbs implements IHeaderCrumbs {
  crumbs: ComputedRef<HeaderCrumb[]>
  title: Ref<string>

  constructor(route: any) {
    this.crumbs = computed(() => {
      const pathArray = route.path
        .replace(/^\//, '')
        .split('/')
        .filter(Boolean)
      const re = /\/$/
      const breadcrumbs = pathArray.reduce((breadcrumbArray: HeaderCrumb[], path: string, idx: number) => {
        if (path) {
          breadcrumbArray.push({
            to: pathArray[idx - 1]
              ? `/${ pathArray[idx - 1] }/${ path }${ re.test(path) ? '' : '/' }`
              : `/${ path }${ re.test(path) ? '' : '/' }`,
            title: (`${ path.charAt(0).toUpperCase() }${ path.substr(1) }`).replace(/-/gm, ' '),
          })
        }
        return breadcrumbArray
      }, [])

      if (breadcrumbs[0]?.title === 'Writeups') { breadcrumbs[0].title = 'Write-ups' }
      if (breadcrumbs[0]?.title === 'Customer university') { breadcrumbs[0].to = '/blog/#customer-university' }
      if (breadcrumbs[0]?.title === 'Tag') { breadcrumbs[0].to = '/blog/' }
      if (breadcrumbs[2]?.to.includes('authors')) { breadcrumbs[2].to = `/blog${ breadcrumbs[2]?.to }` }

      return breadcrumbs.length >= 2 ? breadcrumbs : []
    })
    this.title = ref('')
    this.setTitle = this.setTitle.bind(this)
    this.setEvent = this.setEvent.bind(this)
    this.checkMutationHeadTitle = this.checkMutationHeadTitle.bind(this)
  }

  checkMutationHeadTitle() {
    if (!document) { return }
    const titleNodeElement = document.querySelector('title')
    if (titleNodeElement && titleNodeElement.nodeType === Node.ELEMENT_NODE) {
      this.title.value = document.title

      new MutationObserver(() => {
        this.title.value = document.title
      }).observe(document.querySelector('title') as HTMLTitleElement, { childList: true })
    } else {
      this.title.value = '...'
    }
  }

  setEvent(index: number) {
    return (this.crumbs.value.length - 1) === index || this.title.value === '...' ? '' : 'click'
  }

  setTitle(index: number, crumb: HeaderCrumb) {
    return (this.crumbs.value.length - 1) === index && this.title.value ? this.title.value : crumb.title
  }
}
