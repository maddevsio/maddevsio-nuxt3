<script setup lang="ts">
import { WriteupMainContent } from '~/components/Writeup/classes/WriteupMainContent'
import type { TransformedWriteups } from '~/components/Writeup/interfaces/IWriteupList'

const transformedWriteupsData = inject('transformedWriteupsData')
const prismic = usePrismic()
const route = useRoute()
const router = useRouter()
const { activeTag } = storeToRefs(useDynamicTagCloudStore())
const { headerHeight } = storeToRefs(useHeaderStore())
const writeupListRef = ref(null)
const config = useRuntimeConfig()
const loadingComponent = ref(true)

const {
  writeups,
  totalPages,
  nextPage,
  prevPage,
  currentPage,
  pageName,
  firstPage,
  mainTagForQuery,
  mainTagName,
  extraIndentFromHeader,
  getWriteups,
} = new WriteupMainContent(transformedWriteupsData as TransformedWriteups, prismic, config.public.ffEnvironment)

const { changePage, getTagsFromRoute } = usePagination({
  router,
  route,
  mainTagForQuery,
  mainTagName,
  pageName,
  activeTag: activeTag.value.writeUps,
  currentPage,
  scrollRef: writeupListRef,
  withScrollToStart: true,
})

watch(() => route.query, async query => {
  const tags = getTagsFromRoute(query.tag as string)
  if (!('tag' in query) && !(pageName in query)) {
    currentPage.value = 1
    await getWriteups(firstPage, tags as string[])
    return
  }

  await getWriteups(Number(query[pageName]) || currentPage.value, tags as string[])
})

onMounted(() => {
  loadingComponent.value = false
})
</script>

<template>
  <section class="writeup-main-content">
    <div class="container writeup-main-content__container">
      <h2
        class="writeup-main-content__title"
      >
        All Write-ups
      </h2>
      <div
        ref="writeupListRef"
        class="writeup-list-slice__content"
        :style="`scroll-margin-top: ${(headerHeight ? headerHeight : extraIndentFromHeader) + extraIndentFromHeader}px`"
      >
        <ClientOnly>
          <LazyWriteupCards
            v-if="writeups.length"
            :writeups="writeups"
            color-theme="black"
            :current-page="currentPage"
          />
        </ClientOnly>
        <div
          v-if="loadingComponent"
          class="writeup-list-slice__skeletons"
        >
          <SharedSkeletonsWriteupFullCard
            v-for="skeleton in 5"
            :key="`writeup-list-item-skeleton-${skeleton}`"
            color-theme="black"
            :margin-bottom="10"
          />
        </div>
      </div>
      <LazySharedUIPagination
        v-if="nextPage || prevPage"
        :current-page="currentPage"
        :total-pages="totalPages"
        class="writeup-list__pagination"
        @page-changed="changePage"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.writeup-main-content {
  padding: 48px 0 128px;

  :deep(.pagination) {
    margin-top: 43px;
  }

  &__title {
    @include font('Inter', 60px, 700);
    line-height: 100%;
    margin-bottom: 48px;
    color: $text-color--white-primary;
  }
}

@media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
  .writeup-main-content {
    &__title {
      font-size: 48px;
    }
  }
}

@media screen and (max-width: 768px) {
  .writeup-main-content {
    padding: 48px 0 72px;

    &__title {
      font-size: 31px;
      line-height: 190%;
      margin-bottom: 32px;
    }

    :deep(.pagination) {
      margin-top: 35px;
    }
  }
}

@media screen and (max-width: 600px) {
  .writeup-main-content {
    &__title {
      line-height: 117%;
      margin-bottom: 24px;
    }

    :deep(.pagination) {
      margin-top: 30px;
    }
  }
}

</style>
