<script setup lang="ts">
import type { AnimationItem } from 'lottie-web'
import { BlogService, type PostResponse } from '~/components/Blog/classes/BlogService'
import type { BlogPost } from '~/interfaces/common/commonInterfaces'

const posts = ref<PostResponse>()
const page = ref(1)
const activeTags = ref<string[]>([])
const postsLoaded = ref(false)
const postsCount = ref<string | number>('000')
const isActiveSearchPanel = ref(false)
const lottieIntervalID = ref<ReturnType<typeof setInterval>>()
const allPostsContainer = ref<HTMLElement>()

const tags = inject('tags')
const route = useRoute()
const router = useRouter()
const prismic = usePrismic()
const { $getMediaFromS3 } = useMediaFromS3()
const config = useRuntimeConfig()

watch(() => route.query, query => {
  if ('page' in query) {
    page.value = Number(query.page)
  }
})

const loadBlogPosts = async (pageNumber = 1) => {
  page.value = pageNumber
  postsLoaded.value = false
  posts.value = await new BlogService({ ffEnvironment: config.public.ffEnvironment })
    .getPostsByTag(prismic, activeTags.value, page.value) as PostResponse
  posts.value = {
    ...posts.value,
    // @ts-ignore
    results: posts.value.results.map(result => ({
      ...result,
      description: result.data?.body ? getFirstParagraph(result.data?.body, 150) : '',
      formattedDate: formatDate(result.data?.date),
      readTime: calculateReadTime(result, prismic).readTime,
      data: {
        ...result.data,
        post_author: extractAuthorData(result.data!.post_author!),
      },
    })),
  }
  // @ts-ignore
  postsCount.value = posts.value.total_results_size
  postsLoaded.value = true
}

const routerPush = async (query: { page?: string | number, tag?: string }) => {
  await router.push({
    path: route.path,
    query: {
      ...route.query,
      ...query,
    },
    hash: route.hash,
  })
}

const tagChangedHandler = async ({
  tags,
  name,
}: { tags: string[], name: string }) => {
  activeTags.value = tags
  await routerPush({ page: '1', tag: name })
  await loadBlogPosts(1)
}

const tagChangedFromQuery = async ({ tags, name }: { tags: string[], name?: string }) => {
  activeTags.value = tags
  await loadBlogPosts(Number(route.query.page || page.value))
  await routerPush({ tag: name })
}

const onChangePage = async (page: number) => {
  await loadBlogPosts(page)
  if (!route.query.tag) {
    await routerPush({ page, tag: 'All Articles' })
  } else {
    await routerPush({ page })
  }
  if (allPostsContainer.value) {
    allPostsContainer.value.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }
}

const findTag = (post: BlogPost) => {
  if (post.tags) {
    const tag = post.tags.find(tag => activeTags.value.includes(tag))
    if (tag) {
      return tag
    } else {
      return post.tags[0]
    }
  }
}

const showPosts = computed(() => {
  if (posts.value) {
    return Object.keys(posts.value).length && posts.value.results.length && postsLoaded.value
  }
})

const handleShowSearchPanel = (isActive: boolean) => {
  isActiveSearchPanel.value = Boolean(isActive)
}

const showSearchBar = () => {
  isActiveSearchPanel.value = !isActiveSearchPanel.value
}

const animHandler = (lottie: AnimationItem) => {
  lottie.playSegments([0, lottie.totalFrames], true)
  lottieIntervalID.value = setInterval(() => {
    lottie.playSegments([0, lottie.totalFrames], true)
  }, 15000)
}

onMounted(async () => {
  if (!('tag' in route.query)) {
    await loadBlogPosts()
  }
})

onUnmounted(() => {
  clearInterval(lottieIntervalID.value)
})
</script>
<template>
  <div
    class="filtered-posts"
  >
    <div
      ref="allPostsContainer"
      class="container container--filtered"
    >
      <div
        v-show="!isActiveSearchPanel"
        class="filtered-posts__tools"
      >
        <LazySharedUITransitionFade
          duration="0.6s"
          timing-function="ease-in-out"
          mode="out-in"
        >
          <LazyBlogUITagCloud
            v-show="!isActiveSearchPanel"
            :count-posts="postsCount"
            :tags="tags"
            :posts-loaded="postsLoaded"
            @changed="tagChangedHandler"
            @change-tag-from-query-params="tagChangedFromQuery"
          >
            <button
              class="filtered-posts__open-search-button"
              @click="showSearchBar"
            >
              <LazySharedLottieMad
                height="50px"
                :autoplay="false"
                :loop="false"
                :set-min-height="false"
                :lottie-link="$getMediaFromS3('/images/Blog/lottie/search-panel-lottie.json')"
                @anim-created="animHandler"
              />
            </button>
          </LazyBlogUITagCloud>
        </LazySharedUITransitionFade>
      </div>
      <LazyWidgetsSearchPanel
        :is-active-search-panel="isActiveSearchPanel"
        @is-active-search-bar="handleShowSearchPanel"
      />
      <LazySharedUITransitionFade
        mode="out-in"
        duration="0.6s"
        timing-function="ease-in-out"
      >
        <div
          v-if="showPosts && posts"
          :key="activeTags.join(' ')"
          class="filtered-posts__list"
        >
          <LazySharedArticleCard
            v-for="(post, i) in posts.results"
            :key="`${post.data?.title}-${i}`"
            :uid="post.uid"
            :article-link="linkResolver(post)"
            :title="$prismic.asText(post.data?.title)"
            :description="post.description"
            is-show-author
            is-show-tag
            :formatted-date="post?.formattedDate"
            :read-time="post?.readTime"
            :cover="post.data?.featured_image"
            :author="post.data?.post_author"
            :post="post"
            :disable-tag-link="findTag(post as BlogPost) === 'Cost Optimization'"
            :tag="findTag(post as BlogPost)"
            class="filtered-posts__list-item"
          />
        </div>
      </LazySharedUITransitionFade>
      <div
        v-if="!postsLoaded"
        class="filtered-posts__list"
      >
        <LazySharedSkeletonsBlogPostsSection
          v-for="i in 6"
          :key="i"
        />
      </div>
      <div
        class="filtered-posts__load-more"
      >
        <LazySharedUIPagination
          v-if="posts && (posts.next_page || posts.prev_page)"
          :current-page="page"
          :total-pages="posts.total_pages"
          @page-changed="onChangePage"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.filtered-posts {
  background-color: $bgcolor--white-primary;
  padding: 48px 0 72px;

  .container {
    scroll-margin-top: 150px;

    &--filtered {
      @media screen and (max-width: 1080px) {
        max-width: 1240px;
        padding: 0 41px;
      }

      @media screen and (max-width: 450px) {
        padding: 0 20px;
      }
    }
  }

  &__tools {
    display: flex;
    align-items: center;
    column-gap: 18px;
    position: relative;
  }

  &__open-search-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 0;
  }

  &__list {
    @include grid(repeat(3, 1fr), auto, 20px, 48px);
    margin: 50px 0;
  }

  :deep(.article-card__cover-wrapper) {
    height: auto;
  }

  :deep(.article-card__body) {
    height: 100%;
  }

  :deep(.article-card__body-content) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  :deep(.article-card__description) {
    margin-top: auto;
  }

  &__load-more {
    margin-top: 48px;
  }

  @media only screen and (max-width: 991px) {
    &__list {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 0;
      gap: 32px;
      justify-content: space-between;
    }

    &__load-more {
      margin-top: 35px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 48px 0 48px;
  }

  @media screen and (max-width: 615px) {
    &__list {
      grid-template-columns: repeat(1, 1fr);
    }

    :deep(.article-card) {
      .article-card__title {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease-in-out;
}

.list-enter,
.list-leave-to {
  opacity: 0;
}
</style>
