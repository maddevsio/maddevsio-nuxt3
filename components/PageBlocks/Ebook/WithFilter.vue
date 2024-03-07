<script setup lang="ts">
import { EbookWithFilter } from '~/components/PageBlocks/Ebook/classes/EbookWithFilter'

const prismic = usePrismic()
const {
  ebooks,
  ebookCategories,
  ebookCategory,
  ebooksTitle,
  page,
  perPage,
  totalPages,
  changeCategory,
  changePage,
  getEbooks,
} = new EbookWithFilter(prismic)

await useAsyncData(() => getEbooks(prismic), {
  server: false,
  lazy: true,
})
</script>
<template>
  <section class="ebooks">
    <div class="container">
      <h3
        ref="ebooksTitle"
        class="ebooks__cards-title"
      >
        {{ ebookCategory === 'Ebooks' ? 'All Ebooks' : ebookCategory }}
      </h3>
      <div
        class="ebooks__items"
      >
        <ClientOnly>
          <LazyPageBlocksEbookUIFilter
            v-if="ebookCategories.length"
            :categories="ebookCategories"
            :ebook-category="ebookCategory"
            @on-change-category="changeCategory"
          />
        </ClientOnly>
        <div
          v-if="ebooks.length"
          class="ebooks__cards"
        >
          <div
            class="ebooks__cards-grid"
          >
            <ClientOnly>
              <LazyPageBlocksEbookUICard
                v-for="(item, i) in ebooks"
                :key="i"
                v-bind="item"
                data-testid="ebooksCards"
              />
            </ClientOnly>
          </div>
          <ClientOnly>
            <LazySharedUIPagination
              v-if="ebooks.length > 6"
              :total-pages="totalPages"
              :per-page="perPage"
              :current-page="page"
              @page-changed="changePage"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.ebooks {
  background-color: $bgcolor--white-primary;

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 580px) {
      flex-direction: column;
    }
  }

  &__cards {
    width: 75%;

    @media screen and (max-width: 580px) {
      width: 100%;
    }

    &-title {
      @include font('Inter', 42px, 700);
      line-height: 46px;
      letter-spacing: -1.3px;
      color: $text-color--tech-label-black;
      text-align: center;
      position: relative;
      margin-bottom: 68px;
      margin-left: 24%;
      scroll-margin-block-start: 90px;

      @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
        margin-bottom: 60px;
      }

      @media screen and (max-width: 580px) {
        margin-left: 0;
        margin-bottom: 32px;
      }
    }

    &-grid {
      @include grid(repeat(3, 1fr), auto, 50px, 45px);
      margin-bottom: 50px;

      @media screen and (max-width: 1110px) {
        @include grid(repeat(2, 1fr), auto, 50px, 45px);
      }

      @media screen and (max-width: 768px) {
        @include grid(repeat(1, 1fr), auto, 0px, 48px);
      }
    }
  }
}
</style>
