<script setup lang="ts">
defineProps({
  isActiveSearchPanel: {
    type: Boolean,
    default: false,
  },

  modalSearch: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['isActiveSearchBar'])

const $prismic = usePrismic()
const searchValue = ref('')
const posts = ref<any[]>([])
const postsLoaded = ref(false)
provide('searchValue', searchValue)
const closeSearchPanel = () => {
  searchValue.value = ''
  posts.value = []
  postsLoaded.value = false
  emit('isActiveSearchBar', searchValue.value)
}

const getPostsFromPrismic = async (type: string, query: string) => {
  const { results } = await $prismic.client.get({
    filters: [
      $prismic.filter.any('document.type', [type]),
      $prismic.filter.fulltext(`my.${ type }.title`, query),
    ],
    fetchLinks: [
      'post.post_author',
      'author.name',
      'author.position',
      'author.uid',
      'author.thumbnail',
      'author.social_networks',
      'author.image',
    ],
  })
  return results
}

const getSearchingArticles = async (query: string) => {
  const [resultPost, resultCU] = await Promise.all([
    getPostsFromPrismic('post', query),
    getPostsFromPrismic('customer_university', query),
  ])
  // @ts-ignore
  posts.value = [...resultPost, ...resultCU].sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
}

const searchQuery = async (value: string) => {
  searchValue.value = value
  await getSearchingArticles(searchValue.value)
  postsLoaded.value = true
}
</script>
<template>
  <div
    class="search-panel"
    :class="{ 'search-panel--active': isActiveSearchPanel, 'search-panel--modal': modalSearch }"
  >
    <div :class="{ 'container': modalSearch }">
      <Transition name="slide-right">
        <div
          v-if="isActiveSearchPanel"
          class="search-panel__container"
          :class="{ 'search-panel__container--active': postsLoaded }"
        >
          <LazyWidgetsSearchPanelBar
            @close-search-panel="closeSearchPanel"
            @search-query="searchQuery"
          />
          <div
            v-show="searchValue && postsLoaded"
            class="search-panel__results"
          >
            <LazySharedUITransitionHeight>
              <p
                v-show="!posts.length && postsLoaded"
                key="notFound"
                class="search-panel__result-not-found"
              >
                No results found
              </p>
            </LazySharedUITransitionHeight>
            <LazySharedUITransitionHeight>
              <LazyWidgetsSearchPanelCards
                v-if="posts.length && postsLoaded"
                key="cards"
                :posts="posts"
              />
            </LazySharedUITransitionHeight>
            <LazyWidgetsSearchPanelTags
              key="tags"
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-panel {
  width: 100%;
  position: relative;

  &--active {
    @media screen and (max-width: 991px) {
      margin-bottom: 48px;
    }
  }

  &--modal {
    background: $bgcolor--cultured;
  }

  &__container {
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    background: $bgcolor--cultured;
    width: 100%;
    opacity: 1;

    &--active {
      border-radius: 10px;
    }
  }

  &__results {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 32px 20px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      display: block;
      box-sizing: border-box;
      background-color: $border-color--grey-20-percent;
    }

    @media screen and (max-width: 505px) {
      padding: 24px 12px;
    }
  }

  &__result-not-found {
    @include font('Inter', 16px, 600);
    line-height: 26px;
    color: $text-color--red;
  }
}

.slide-right-enter-active {
  transition: all 1.2s ease;
}

.slide-right-leave-active {
  transition: 0s;
}

.slide-right-leave-active {
  position: absolute;
  top: 0;
  left: 0;
}

.slide-right-enter /* .fade-leave-active was before 2.1.8 version */
{
  width: 0;
  opacity: 0;
}

.slide-right-leave-to {
  opacity: 0;
}
</style>
