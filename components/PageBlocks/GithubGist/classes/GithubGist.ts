import type { ComputedRef, Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { GithubGistProps, IGithubGist } from '~/components/PageBlocks/GithubGist/interfaces/IGithubGist'

export class GithubGist implements IGithubGist {
  gistId: string
  fileName: string
  isMounted: Ref<boolean>
  gistUrl: string
  gistData: Ref<string>
  gistError: Ref<boolean>
  fullGistUrl: ComputedRef<string>

  constructor(props: GithubGistProps, prismic: PrismicPlugin) {
    this.gistId = prismic.asText(props.primary?.gist_id)
    this.fileName = prismic.asText(props.primary?.file_name)
    this.isMounted = ref(false)
    this.gistUrl = 'https://gist.github.com/'
    this.gistData = ref('')
    this.gistError = ref(false)
    this.fullGistUrl = computed(() => {
      const params = this.fileName.length > 0 ? `file=${ this.fileName }` : ''
      return `${ this.gistUrl }${ this.gistId }.json?${ params }`
    })

    this.setIsMounted = this.setIsMounted.bind(this)
    this.getGistData = this.getGistData.bind(this)
  }

  setIsMounted(value: boolean) {
    this.isMounted.value = value
  }

  getGistData() {
    try {
      jsonp(this.fullGistUrl.value, { timeout: 20000 }, (err, response) => {
        if (err) {
          this.gistError.value = true
          return
        }
        this.gistData.value = response.div
      })
    } catch (e) {
      this.gistError.value = true
    }
  }
}
