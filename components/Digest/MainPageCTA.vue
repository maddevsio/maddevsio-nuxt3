<script setup lang="ts">
import { DigestMainPageCTA } from '~/components/Digest/classes/DigestMainPageCTA'

const { isMobile } = useCheckMobile(680)
const prismic = usePrismic()
const {
  article,
  blogBtnRef,
  contentRef,
  contentTextRef,
  fetchArticle,
  teleportBlogBtn,
} = new DigestMainPageCTA()
await useAsyncData(() => fetchArticle(prismic), {
  server: false,
  lazy: true,
})

watch(isMobile, newValue => {
  teleportBlogBtn(newValue)
})

const sourcePaths = {
  desktop: '/images/Digest/webp/cta-bg.webp',
  tablet: '/images/Digest/webp/cta-bg-tablet.webp',
  mobile: '/images/Digest/webp/cta-bg-mobile.webp',
}
</script>

<template>
  <section class="digest-main-page-cta">
    <div class="container digest-main-page-cta__container">
      <div
        ref="contentRef"
        class="digest-main-page-cta__content"
      >
        <SharedUIAdaptiveImage
          class="digest-main-page-cta__image"
          :source-paths="sourcePaths"
          :width="isMobile ? 366 : 1240"
          :height="isMobile ? 480 : 393"
          :alt="'Read more Insights background'"
        />
        <div
          ref="contentTextRef"
          class="digest-main-page-cta__content-text"
        >
          <h3
            class="digest-main-page-cta__title"
          >
            Read more Insights
          </h3>
          <p
            class="digest-main-page-cta__subtitle"
          >
            Check out our IT Blog, where we share business and IT knowledge weekly.
          </p>
          <NuxtLink
            ref="blogBtnRef"
            to="/blog/"
            class="digest-main-page-cta__link"
          >
            Go to Blog
            <span class="digest-main-page-cta__arrow-icon" />
          </NuxtLink>
        </div>
        <NuxtLink
          v-if="article"
          :to="`/blog/${article.uid}/`"
          class="digest-main-page-cta__content-article"
        >
          <img
            v-if="article.data?.featured_image?.url"
            loading="lazy"
            :src="article.data.featured_image.url.replace('compress,', '')"
            width="480"
            height="246"
            :alt="article.data.title"
            class="digest-main-page-cta__content-article-cover"
          >
          <span
            v-if="article.uid"
            class="digest-main-page-cta__content-article-plate"
          >
            NEW article
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.digest-main-page-cta {
  background: $bgcolor--white-primary;
  padding-bottom: 128px;
  margin-top: -1px;

  &__content {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 63px 90px;
    background: $bgcolor--grey-selected;
    overflow: hidden;

    &-text,
    &-article {
      width: 45%;
      position: relative;
      z-index: 1;
    }

    &-article {
      width: 44%;
      box-sizing: border-box;
      padding-right: 12px;

      &-cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 5px;
      }

      &-plate {
        position: absolute;
        top: 13px;
        right: 4px;
        z-index: 1;
        display: block;
        padding: 4px 8px 4px 12px;
        @include font('Inter', 14px, 700);
        line-height: 26px;
        color: $text-color--white-primary;
        background: $bgcolor--red;

        &::before {
          content: '';
          width: 9px;
          height: 7px;
          position: absolute;
          bottom: -7px;
          right: 0;
          background: #6D080C;
          clip-path: polygon(100% 0, 0 0, 0 100%);
        }
      }
    }
  }

  :deep(.image-background) {
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
    object-position: bottom center;
  }

  &__title,
  &__subtitle,
  &__link {
    @include font('Inter', 42px, 700);
    line-height: 46px;
    letter-spacing: -1.3px;
    color: $text-color--white-primary;
    margin-bottom: 16px;
  }

  &__subtitle {
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 38px;
    letter-spacing: initial;
  }

  &__link {
    background: $bgcolor--venetian-red;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    padding: 16px 46px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border-radius: 5px;
    letter-spacing: initial;
    position: relative;
    z-index: 1;
  }

  &__arrow-icon {
    @include arrow-top-right-icon($bgcolor--white-primary);
    width: 12px;
    height: 12px;
  }

  @media screen and (max-width: 1090px) {
    &__content {
      padding: 42px;
    }
  }

  @media screen and (max-width: 1024px) {
    &__content {
      flex-direction: column;
      align-items: initial;

      &-text,
      &-article {
        width: 100%;
      }
    }

    &__link {
      display: flex;
      justify-content: center;
      margin-top: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 72px;
    &__container {
      max-width: 816px;
    }
  }

  @media screen and (max-width: 500px) {
    &__title {
      font-size: 31px;
      line-height: 130%;
    }

    &__subtitle {
      font-size: 20px;
      line-height: 130%;
      margin-bottom: 24px;
    }

    &__content {
      padding: 32px 18px;

      &-article-plate {
        font-size: 10px;
        padding: 0 8px 0 12px;
        right: 3px;
      }
    }

    &__link {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.4px;
      padding: 12px 0;
      gap: 10px;
    }
  }
}
</style>
