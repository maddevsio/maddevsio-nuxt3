<script setup>
import { DigestMainPageContent } from '~/components/Digest/classes/DigestMainPageContent'
import { Digests } from '~/components/Digest/classes/Digests'

const prismic = usePrismic()
const router = useRouter()
const route = useRoute()
const digests = new Digests({ uid: '', date: new Date() }, prismic)
const digestMainPageContent = new DigestMainPageContent(router, route, prismic, digests)

const { pending } = await useAsyncData(() => digests.fetchDigests({ prismic, year: '', filter: false, date: new Date(), page: Number(route.query.page || digestMainPageContent.pageRef.value), pageSize: 12 }), {
  server: false,
  lazy: true,
})
</script>

<template>
  <section class="digest-main-page-content">
    <div class="digest-main-page-content__container container">
      <h2
        :ref="digestMainPageContent.digestTitleRef"
        class="digest-main-page-content__title"
      >
        {{ digestMainPageContent.setTitle(digests.digestOption.value) }}
      </h2>
      <div>
        <LazySharedLoadersSpinnerLoader v-if="pending" color-theme="white" class="digest-main-page-content__loader" />
        <div v-else>
          <ClientOnly>
            <LazyDigestSelect
              class="digest-main-page-content__selector"
              :set-all-digests-options="true"
              @change-year="digests.handleChangeYear"
            />
            <LazyDigestCards
              v-if="digests.digestsData.value.digestList.length"
              :digest-list="digests.digestsData.value.digestList"
              class="digest-main-page-content__cards"
            />
            <LazySharedUIPagination
              v-if="digests.digestsData.value.nextPage || digests.digestsData.value.prevPage"
              :current-page="digestMainPageContent.pageRef.value"
              :total-pages="digests.digestsData.value.totalPages"
              class="digest-main-page-content__pagination"
              @page-changed="digestMainPageContent.changePage"
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

  &__selector {
    :deep(.v-select) {
      width: 20%;
      min-width: 235px;
    }
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
