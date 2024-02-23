import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type {
  AuthorItem,
  AuthorPost,
  AuthorsListProps,
  IAuthorsList,
} from '~/components/PageBlocks/Authors/interface/IAuthorsListSlice'
import type { AuthorDocument } from '~/prismicio-types'

export class AuthorsList implements IAuthorsList {
  authorsWithPostsData: Ref<AuthorItem[]>
  allAuthors: Ref<AuthorItem[]>
  sliceBackground: string | null
  countOfShownAuthors: Ref<number>
  showButton: Ref<boolean>
  isLoading: Ref<boolean>

  constructor(props: AuthorsListProps) {
    this.authorsWithPostsData = ref([])
    this.allAuthors = ref([])
    this.isLoading = ref(false)
    this.sliceBackground = setSliceBackground(props.primary.background || 'white')
    this.countOfShownAuthors = ref(14)
    this.showButton = ref(true)

    this.showAllAuthors = this.showAllAuthors.bind(this)
    this.filteredPosts = this.filteredPosts.bind(this)
    this.getAuthorsWithPosts = this.getAuthorsWithPosts.bind(this)
  }

  async getAllAuthors(prismic: PrismicPlugin) {
    try {
      const response = await prismic.client.get({
        filters: [
          prismic.filter.at('document.type', 'author'),
        ],
        pageSize: 100,
      })
      return response.results as AuthorDocument[]
    } catch (error: any) {
      return error as ReturnType<typeof Error>
    }
  }

  async getAllPostsAuthors(prismic: PrismicPlugin, currentPageOffset = 1) {
    try {
      const graphQuery = `
    {
      post {
        post_author {
          uid
        }
        post_coauthor {
          uid
        }
      }
    }`
      const response = await prismic.client.get({
        filters: [
          prismic.filter.at('document.type', 'post'),
        ],
        pageSize: 100,
        page: currentPageOffset,
        graphQuery,
      })
      const currentPosts = response.results as AuthorPost[]
      if (!response.next_page) {
        return currentPosts
      }
      const newPageOffset = currentPageOffset + 1
      const newPosts = await this.getAllPostsAuthors(prismic, newPageOffset) as AuthorPost[]
      return ([...currentPosts, ...newPosts])
    } catch (error) {
      return error as ReturnType<typeof Error>
    }
  }

  setAuthorsPostsData(authors: AuthorDocument[], posts: AuthorPost[]) {
    const authorsAdditionalData = new Map()

    posts.forEach(post => {
      if ('uid' in post.data.post_coauthor) {
        const { uid } = post.data.post_coauthor
        const { tags = [], count = 0 } = authorsAdditionalData.get(uid) || {}
        authorsAdditionalData.set(uid, { tags: new Set([...tags, ...post.tags]), count: count + 1 })
      }
      const { uid } = post.data.post_author
      const { tags = [], count = 0 } = authorsAdditionalData.get(uid) || {}
      authorsAdditionalData.set(uid, { tags: new Set([...tags, ...post.tags]), count: count + 1 })
    })

    return authors
      .reduce((acc: any[], rawAuthor) => {
        const { tags = [], count = 0 } = authorsAdditionalData.get(rawAuthor.uid) || {}
        const author = { ...rawAuthor, tags: [...new Set([...Array.from(tags), ...rawAuthor.tags])], post_count: count }
        if (!count) { return acc }
        return [...acc, author]
      }, [])
      .sort((firstAuthor, secondAuthor) => {
        const firstAuthorStatus = firstAuthor.data.position.startsWith('ex')
        const secondAuthorStatus = secondAuthor.data.position.startsWith('ex')
        if (firstAuthorStatus && secondAuthorStatus) {
          return secondAuthor.post_count - firstAuthor.post_count // sort by count for ex
        }
        if (firstAuthorStatus) { return 1 }
        if (secondAuthorStatus) { return -1 }
        return secondAuthor.post_count - firstAuthor.post_count // sort by count for non ex
      })
  }

  showAllAuthors() {
    this.showButton.value = false
    this.countOfShownAuthors.value = this.authorsWithPostsData.value.length
  }

  filteredPosts({
    activeTags,
  }: { activeTags: string[] }) {
    if (activeTags.length && this.authorsWithPostsData.value.length) {
      this.authorsWithPostsData.value = this.allAuthors.value.filter(item => item.tags.some(tag => activeTags.includes(tag)))
    } else {
      this.authorsWithPostsData.value = this.allAuthors.value
    }
  }

  async getAuthorsWithPosts(prismic: PrismicPlugin) {
    try {
      this.isLoading.value = true
      const authors = await this.getAllAuthors(prismic)
      const posts = await this.getAllPostsAuthors(prismic)
      this.allAuthors.value = this.setAuthorsPostsData(authors as AuthorDocument[], posts as AuthorPost[])
      this.authorsWithPostsData.value = this.allAuthors.value
    } finally {
      this.isLoading.value = false
    }
  }
}
