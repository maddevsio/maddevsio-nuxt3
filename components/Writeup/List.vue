<script setup lang="ts">
import type { PropType } from 'vue'
import type { WriteupListProps } from '~/components/Writeup/interfaces/IWriteupList'
import { WriteupList } from '~/components/Writeup/classes/WriteupList'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<WriteupListProps>,
    default: () => ({}),
  },
})
const prismic = usePrismic()
const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()
const writeupList = new WriteupList(slice, prismic, config.public.ffEnvironment)
const {
  getWriteups,
  mainTagName,
  mainTagForQuery,
  currentPage,
  pageName,
  writeupListRef,
} = writeupList
await useAsyncData(() => getWriteups(Number(route.query.writeupPage) || 1), {
  server: false,
  lazy: true,
})

const { changePage } = usePagination({
  router,
  route,
  mainTagForQuery,
  mainTagName,
  pageName,
  activeTag: '',
  currentPage,
  scrollRef: writeupListRef,
  withScrollToStart: true,
})

watch(() => route.query, async query => {
  if (!('tag' in query) && !(pageName in query)) {
    currentPage.value = 1
    await getWriteups(currentPage.value)
    return
  }

  await getWriteups(Number(query[pageName]) || currentPage.value)
})
</script>
<template>
  <section
    class="writeup-list-slice"
    :class="colorConverterToClass('slice-bg', writeupList.sliceBackgroundColor)"
  >
    <div class="container">
      <div
        v-if="writeupList.tags && writeupList.tags.length"
        class="writeup-list-slice__content"
      >
        <LazyWriteupCards
          v-if="writeupList.writeups.value.length"
          :ref="writeupList.writeupListRef"
          :writeups="writeupList.writeups.value"
          :color-theme="writeupList.sliceBackgroundColor"
          :current-page="writeupList.currentPage.value"
        />
        <div
          v-else
          class="writeup-list-slice__skeletons"
        >
          <LazySharedSkeletonsWriteupFullCard
            v-for="skeleton in 5"
            :key="`writeup-list-item-skeleton-${skeleton}`"
            :color-theme="writeupList.sliceBackgroundColor"
            :margin-bottom="10"
          />
        </div>
      </div>
      <LazySharedUIPagination
        v-if="writeupList.nextPage.value || writeupList.prevPage.value"
        :key="'writeupList'"
        :current-page="writeupList.currentPage.value"
        :total-pages="writeupList.totalPages.value"
        class="writeup-list-pagination"
        where="writeupPage"
        @page-changed="changePage"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/colorClasses/colors.scss';

.writeup-list-slice {
  :deep(.pagination) {
    margin-top: 43px;
    @media screen and (max-width: 768px) {
      margin-top: 35px;
    }

    @media screen and (max-width: 640px) {
      margin-top: 30px;
    }
  }
}

.writeup-list-slice {
  :deep(.skeleton-full-width-card) {
    height: 127px;
  }

  @media screen and (max-width: 1024px) {
    :deep(.skeleton-full-width-card) {
      height: 235px;
    }
  }

  @media screen and (max-width: 640px) {
    :deep(.skeleton-full-width-card) {
      height: 250px;
    }
  }
}
</style>
