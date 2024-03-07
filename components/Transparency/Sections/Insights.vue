<script setup lang="ts">
import type { Query } from '@prismicio/client'
import { fetchLinks } from '~/config/constants'
import type { PostDocument } from '~/prismicio-types'
import type { Author, BlogPost } from '~/interfaces/common/commonInterfaces'
import type { IButtonOutline } from '~/components/PageBlocks/ButtonSlice/interfaces/IButtonOutline'

const buttonProps = {
  primary: {
    fullWidth: true,
    background: 'white',
    color: 'red',
    alignment: 'center',
    text: 'See more articles',
    link: {
      url: 'https://maddevs.io/blog/',
    },
    maxWidth: '100%',
  },
}
const prismic = usePrismic()
const posts = ref<any[]>([])
const buttonInstance = ref<IButtonOutline | null>(null)
const swiperPostOptions = {
  speed: 750,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: false,
  grabCursor: false,
  allowTouchMove: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.ebook-posts-prev-next-buttons__button--next',
    prevEl: '.ebook-posts-prev-next-buttons__button--prev',
    disabledClass: 'disabled',
  },

  breakpoints: {
    550: {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    960: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
}
const fetchPosts = async () => {
  const response = await prismic.client.get({
    filters: [
      prismic.filter.any('document.type', ['post']),
    ],
    orderings: {
      field: 'my.post.date',
      direction: 'desc',
    },
    pageSize: 3,
    fetchLinks,
  }) as Query<PostDocument>

  posts.value = response.results.map(postItem => ({
    ...postItem,
    uid: postItem.uid,
    articleLink: linkResolver({ type: postItem.type, uid: postItem.uid }),
    title: postItem.data.title[0]!.text,
    description: getFirstParagraph(postItem.data.body, 0),
    tag: postItem.tags[0],
    formattedDate: formatDate(postItem.data.date),
    readTime: calculateReadTime(postItem as BlogPost, prismic).readTime,
    cover: postItem.data.featured_image,
    author: extractAuthorData(postItem.data.post_author as Author),
  }))
}

const { isMobile } = useCheckMobile(959)

onMounted(async () => {
  await fetchPosts()
})
</script>
<template>
  <section class="transparency-insights">
    <div
      class="container transparency-insights__container"
    >
      <LazyTransparencyUITitle
        title-tag="h2"
        max-width-title="100%"
      >
        <template #title>
          Insights
        </template>
      </LazyTransparencyUITitle>
      <template v-if="posts.length">
        <Swiper
          ref="cuCards"
          v-bind="swiperPostOptions"
          class="transparency-insights__cards"
        >
          <SwiperSlide
            v-for="(post, postIndex) in posts"
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
              :post-length="post.length"
              :cover="post.cover"
              class="tag-posts__list-item"
            />
          </SwiperSlide>
          <ClientOnly>
            <div
              v-show="posts.length > 3 || isMobile"
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
      </template>
    </div>
    <LazyPageBlocksButtonSliceOutline
      v-if="buttonInstance"
      :slice="buttonProps"
      class="transparency-insights__button"
    />
  </section>
</template>
<style scoped lang="scss">
.transparency-insights {
  background-color: #fff;
  padding-top: 128px;
  padding-bottom: 96px;

  &__container {
    margin-bottom: 48px;
  }

  @include laptop-media-query {
    padding-top: 72px;
  }

  @media screen and (max-width: 1026px) {
    padding-top: 48px;

    .container {
      padding-inline: 77px;
    }

    &__button {
      :deep(.container) {
        padding-inline: 77px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding-inline: 56px;
      max-width: 620px;
    }

    &__button {
      :deep(.container) {
        padding-inline: 56px;
        max-width: 620px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    padding-bottom: 72px;

    .container {
      padding-inline: 24px;
    }

    &__button {
      :deep(.container) {
        padding-inline: 24px;
      }
    }
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
    margin-top: 22px;

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
