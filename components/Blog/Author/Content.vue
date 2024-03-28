<script setup lang="ts">
import type { PropType } from 'vue'
import type { TransformedAuthor } from '~/interfaces/common/commonInterfaces'
import { AuthorService } from '~/components/Blog/classes/AuthorService'

const props = defineProps({
  author: {
    type: Object as PropType<TransformedAuthor>,
    default: () => ({}),
  },
})

const emit = defineEmits(['content-count'])
const authorPosts = ref<any[]>([])
const authorWriteups = ref<any[]>([])
const authorWords = ref<any[]>([])
const tags = ref([{ name: 'All Content' }])
const loading = ref(true)
const prismic = usePrismic()
const config = useRuntimeConfig()
const authorService = new AuthorService(prismic, config.public.ffEnvironment)
const { tagChangedFromQuery, tagChangedHandler } = useTagChanged('authorPage', 'allContent', false)

const authorContentIsNotEmpty = computed(() => authorPosts.value.length || authorWriteups.value.length || authorWords.value.length)

onMounted(async () => {
  try {
    const [posts, writeups, words] = await Promise.all([
      authorService.getAuthorPosts(props.author.id, 1),
      authorService.getAuthorWriteups(props.author.id, 1),
      authorService.getAuthorWords(props.author.id, 1),
    ])
    authorPosts.value = posts
    authorWriteups.value = writeups
    authorWords.value = words
    tags.value = authorService.extractAuthorTags(tags.value, [...authorPosts.value, ...authorWriteups.value, ...authorWords.value])
    emit('content-count', { posts: posts.length, writeups: writeups.length, words: words.length })
    loading.value = false
  } catch {
    loading.value = false
  }
})
</script>

<template>
  <div class="author-content">
    <div class="author-content__container container">
      <LazySharedLoadersSpinnerLoader
        v-if="loading"
        color-theme="white"
        class="author-content__loading"
      />
      <div
        v-else
        class="author-content__blocks"
      >
        <div v-if="authorContentIsNotEmpty">
          <LazySharedDynamicTagCloud
            v-if="tags.length >= 3"
            :tags="tags"
            color-theme="white"
            class="author-content__tag-cloud"
            @changed="tagChangedHandler"
            @change-tag-from-query-params="tagChangedFromQuery"
          />
          <LazyBlogAuthorUIPosts
            :author="author"
            :author-posts="authorPosts"
          />
          <LazyBlogAuthorUIWriteups
            :author-writeups="authorWriteups"
          />
          <LazyBlogAuthorUIWords
            :words="authorWords"
          />
        </div>
        <LazyBlogAuthorUINoContentBanner
          v-if="!authorContentIsNotEmpty && !loading"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.author-content {
  padding-top: 48px;
  padding-bottom: 72px;
  background-color: $bgcolor--white-primary;
  min-height: 500px;

  &__loading {
    margin: 48px auto 0;
  }

  &__tag-cloud {
    margin-bottom: 72px;
  }

  :deep(.tag-cloud) {
    margin-top: 0;
  }

  @media screen and (max-width: 1280px) {
    &__tag-cloud {
      margin-bottom: 48px;
    }
  }
}
</style>
