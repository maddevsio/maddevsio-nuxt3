<script setup lang="ts">
import type { PropType } from 'vue'
import type { PostsSectionWithoutAuthorProps } from '~/components/PageBlocks/PostsSection/interfaces/IPostsSectionWithoutAuthor'
import { PostsSectionWithoutAuthor } from '~/components/PageBlocks/PostsSection/classes/PostsSectionWithoutAuthor'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<PostsSectionWithoutAuthorProps>,
    default: () => ({}),
  },
})
const prismic = usePrismic()
const postsSection = new PostsSectionWithoutAuthor(slice, prismic)
const { isMobile } = useCheckMobile(postsSection.triggerBreakpoint)
</script>
<template>
  <section class="ebook-posts">
    <div
      class="container"
      :style="`max-width: ${postsSection.containerSize}px`"
    >
      <PrismicRichText
        v-if="$prismic.asText(postsSection.title)"
        :field="postsSection.title"
        class="ebook-posts__title"
        data-testid="ebook-posts__title"
        :html-serializer="prismicHtmlSerializer"
      />
      <template v-if="postsSection.posts.length">
        <Swiper
          ref="cuCards"
          v-bind="postsSection.swiperOptions"
          :auto-update="true"
          :auto-destroy="true"
          :delete-instance-on-destroy="true"
          :cleanup-styles-on-destroy="true"
          class="ebook-posts__cards"
        >
          <SwiperSlide
            v-for="(post, postIndex) in postsSection.posts"
            :key="`${post.uid}-${postIndex}`"
          >
            <LazySharedArticleCard
              :uid="post.uid"
              :article-link="post.articleLink"
              :title="post.title"
              :description="post.description"
              :is-show-author="false"
              :is-show-tag="false"
              :formatted-date="post.formattedDate"
              :read-time="post.readTime"
              :post-length="post.length"
              :cover="post.cover"
              class="ebook-posts__list-item"
            />
          </SwiperSlide>
          <div
            v-show="postsSection.posts.length > 3 || isMobile"
            class="ebook-posts__navigation-buttons"
          >
            <LazySharedNavigationButtons
              prev-label="Prev"
              class-prefix-next="ebook-posts"
              class-prefix-prev="ebook-posts"
            />
          </div>
        </Swiper>
      </template>
      <div
        v-else
        class="ebook-posts__skeleton-cards"
      >
        <LazySharedSkeletonsPostBlog
          v-for="(item) in 3"
          :key="item"
          :show-author="false"
          :show-meta="false"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.ebook-posts {
  background-color: #fff;
  padding-bottom: 32px;

  .container {
    max-width: 1026px;
  }

  &__title {
    margin-bottom: 50px;

    @media screen and (max-width: 580px) {
      margin-bottom: 32px;
    }

    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      @include font('Inter', 42px, 700);
      line-height: 46px;
      letter-spacing: -1.3px;
      color: $text-color--chinese-black;

      @media screen and (max-width: 580px) {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
      }
    }
  }

  &__cards {
    :deep(.swiper-slide) {
      height: initial;
    }

    :deep(.article-card__body-content) {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    :deep(.article-card__title) {
      flex-grow: 1;
    }

    :deep(.article-card__body) {
      height: 100%;
    }
  }

  &__list-item {
    height: 100%;
  }

  &__navigation-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px auto 0;

    :deep(.digest-footer__navigations-divider) {
      height: 15px;
      background-color: $border-color--grey-20-percent;
    }

    :deep(.digest-footer__navigations-buttons-wrapper) {
      width: auto;
      min-width: unset;
    }

    @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
      margin-top: 32px;
    }

    @media screen and (max-width: 670px) {
      :deep(.digest-footer__navigations-buttons-wrapper) {
        width: 100%;
      }

      :deep(.digest-footer__navigations-buttons) {
        gap: 18px;
      }
    }

    @media screen and (max-width: 550px) {
      margin-top: 24px;
      width: 100%;
    }
  }

  &__skeleton-cards {
    @include grid(repeat(3, 1fr), auto, 20px, 20px);
  }
}
</style>
