<script setup lang="ts">
import { WriteupMainContent } from '~/components/Writeup/classes/WriteupMainContent'
import type { TransformedWriteups } from '~/components/Writeup/interfaces/IWriteupList'

const transformedWriteupsData = inject('transformedWriteupsData')
const prismic = usePrismic()
const route = useRoute()
const router = useRouter()
const { activeTag } = storeToRefs(useDynamicTagCloudStore())
const {
  writeups,
  totalPages,
  nextPage,
  prevPage,
  writeupListRef,
  currentPage,
  changePage,
  getWriteups,
} = new WriteupMainContent(transformedWriteupsData as TransformedWriteups, prismic, router, route, activeTag.value)

if ('page' in route.query) {
  currentPage.value = Number(route.query.page)
}

watch(() => route.query, async () => {
  if ('tag' in route.query && ('page' in route.query && Number(route.query.page) === 1)) {
    await getWriteups(1, [activeTag.value.writeUps])
  }
}, { immediate: true })
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
        class="writeup-list-slice__content"
      >
        <LazyWriteupCards
          v-if="writeups.length"
          ref="writeupListRef"
          :writeups="writeups"
          color-theme="black"
          :current-page="currentPage"
        />
        <div
          v-if="!writeups.length"
          class="writeup-list-slice__skeletons"
        >
          <LazySharedSkeletonsWriteupFullCard
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
