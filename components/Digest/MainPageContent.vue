<script setup lang="ts">
import { DigestMainPageContent } from '~/components/Digest/classes/DigestMainPageContent'
import { Digests } from '~/components/Digest/classes/Digests'

const prismic = usePrismic()
const router = useRouter()
const route = useRoute()
const {
  digestOption,
  digestsData,
  handleChangeYear,
  fetchDigests,
} = new Digests({ uid: '', date: new Date() }, prismic)

const {
  digestTitleRef,
  pageRef,
  pageName,
  setTitle,
} = new DigestMainPageContent(router, route, prismic, fetchDigests)

const { pending } = await useAsyncData(() => fetchDigests({
  prismic,
  year: '',
  filter: false,
  date: new Date(),
  page: Number(route.query.page || pageRef.value),
  pageSize: 12,
}), {
  server: false,
  lazy: true,
})

const { changePage } = usePagination({
  router,
  route,
  mainTagForQuery: '',
  mainTagName: '',
  pageName: 'page',
  activeTag: '',
  currentPage: pageRef,
  scrollRef: digestTitleRef,
  withScrollToStart: true,
})

watch(() => route.query, async query => {
  if (!('tag' in query) && !(pageName in query)) {
    pageRef.value = 1
    await fetchDigests({ prismic, year: '', filter: false, date: new Date(), page: pageRef.value, pageSize: 12 })
    return
  }
  await fetchDigests({ prismic, year: '', filter: false, date: new Date(), page: Number(query[pageName]) || pageRef.value, pageSize: 12 })
})
</script>

<template>
  <section class="digest-main-page-content">
    <div class="digest-main-page-content__container container">
      <h2
        ref="digestTitleRef"
        class="digest-main-page-content__title"
      >
        {{ setTitle(digestOption) }}
      </h2>
      <div>
        <LazySharedLoadersSpinnerLoader v-if="pending" color-theme="white" class="digest-main-page-content__loader" />
        <div v-else>
          <ClientOnly>
            <LazyDigestSelect
              class="digest-main-page-content__selector"
              @change-year="handleChangeYear"
            />
            <LazyDigestCards
              v-if="digestsData!.digestList.length"
              :digest-list="digestsData!.digestList"
              class="digest-main-page-content__cards"
            />
            <LazySharedUIPagination
              v-if="digestsData!.nextPage || digestsData!.prevPage"
              :current-page="pageRef"
              :total-pages="digestsData!.totalPages"
              class="digest-main-page-content__pagination"
              @page-changed="changePage"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.digest-main-page-content {
  background: $bgcolor--white-primary;
  min-height: 500px;
  padding: 96px 0 128px;

  &__title {
    @include font('Inter', 60px, 700);
    line-height: 100%;
    color: $text-color--black-pale;
    letter-spacing: -0.03em;
  }

  &__selector, &__title {
    margin-bottom: 48px;
  }

  :deep(.pagination ) {
    margin-top: 48px;
  }

  @media screen and (max-width: 768px) {
    padding: 72px 0;

    &__title {
      font-size: 31px;
      line-height: 193%;
    }

    &__title, &__selector {
      margin-bottom: 32px;
    }

    :deep(.pagination) {
        margin-top: 32px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 48px 0 72px;

    &__title {
      line-height: 117%;
    }

    &__selector {
      width: 100%;
    }

    &__title, &__selector {
      margin-bottom: 24px;
    }
  }
}
</style>
