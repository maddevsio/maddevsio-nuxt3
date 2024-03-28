<script setup lang="ts">
import type { PropType } from 'vue'
import type { PostsSectionDefaultProps } from '~/components/PageBlocks/PostsSection/interfaces/IPostsSectionDefault'
import { PostsSectionDefault } from '~/components/PageBlocks/PostsSection/classes/PostsSectionDefault'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<PostsSectionDefaultProps>,
    default: () => ({}),
  },
})

const prismic = usePrismic()
const postsSection = new PostsSectionDefault(slice, prismic)
const { isMobile } = useCheckMobile(postsSection.triggerBreakpoint)
</script>
<template>
  <div
    class="tag-posts"
  >
    <div class="container">
      <Swiper
        v-bind="postsSection.swiperOptions"
        class="tag-posts__cards"
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
            :author="post.author"
            :tag="post.tag"
            is-show-author
            is-show-tag
            :formatted-date="post.formattedDate"
            :read-time="post.readTime"
            :cover="post.cover"
            class="tag-posts__list-item"
          />
        </SwiperSlide>
        <ClientOnly>
          <div
            v-show="postsSection.posts.length > 3 || isMobile"
            class="tag-posts__navigation-buttons"
          >
            <LazySharedNavigationButtons
              prev-label="Prev"
              class-prefix-next="tag-posts"
              class-prefix-prev="tag-posts"
            />
          </div>
        </ClientOnly>
      </Swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tag-posts {
  background-color: $bgcolor--white-primary;

  &__cards {
    :deep(.swiper-slide) {
      height: initial;
    }

    :deep(.article-card__body-content) {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    :deep(.article-card__description) {
      margin-top: auto;
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
