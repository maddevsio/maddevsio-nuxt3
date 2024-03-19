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
const writeupList = new WriteupList(slice, prismic, router, route, config.public.ffEnvironment)
await useAsyncData(() => writeupList.getWriteups(Number(route.query.writeupPage) || 1), {
  server: false,
  lazy: true,
})
const handleChangePage = (page: number) => writeupList.changePage(page)
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
          ref="writeupListRef"
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
        :current-page="writeupList.currentPage.value"
        :total-pages="writeupList.totalPages.value"
        class="writeup-list-pagination"
        where="writeupPage"
        @page-changed="handleChangePage"
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
