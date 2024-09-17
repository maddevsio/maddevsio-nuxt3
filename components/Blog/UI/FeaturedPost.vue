<script setup lang="ts">
import type { PropType } from 'vue'
import type { Author, BlogPost } from '~/interfaces/common/commonInterfaces'

const props = defineProps({
  theme: {
    type: String,
    default: 'dark',
  },

  titleTag: {
    type: String,
    default: 'h2',
  },

  post: {
    type: Object as PropType<BlogPost>,
    required: true,
  },

  author: {
    type: Object as PropType<Author['data'] & { uid: string }>,
    required: true,
  },
})

const prismic = usePrismic()
const firstParagraph = props.post?.data ? getFirstParagraph(props.post.data.body!, 330) : ''
const link = linkResolver(props.post)
const formattedDate = props.post.data?.date ? formatDate(props.post.data.date!) : ''
const readTime = computed(() => {
  const { readTime } = calculateReadTime(props.post, prismic)
  return readTime
})

const { isMobile } = useDevice()
</script>
<template>
  <div
    class="featured-post"
    :class="`featured-post--${theme}-theme`"
  >
    <div class="featured-post__info-wrapper">
      <NuxtLink
        :to="link"
        class="featured-post__info"
      >
        <Component
          :is="titleTag"
          class="featured-post__title"
        >
          {{ $prismic.asText(post.data.title) }}
        </Component>
        <p class="featured-post__text">
          {{ firstParagraph }}
        </p>
      </NuxtLink>
      <div class="featured-post__meta">
        <LazySharedArticleAuthor
          :position="author.position"
          :image="author.image.thumbnail"
          :name="author.name"
          :uid="author.uid"
          :theme="theme"
          :date="formattedDate"
          :read-time="readTime"
        />
        <LazySharedArticleTagBadge
          v-if="post.tags && post.tags.length"
          :tag="post.tags[0]"
          :theme="theme"
        />
      </div>
    </div>
    <div class="featured-post__image-wrapper">
      <NuxtLink
        :to="link"
        class="featured-post__image-link"
      >
        <NuxtImg
          provider="prismic"
          :src="post.data!.featured_image!.url"
          :alt="post.data!.featured_image!.alt || 'Image'"
          :width="isMobile ? 410 : 473"
          :height="isMobile ? 210 : 257"
          sizes="mobile:410px tablet:700px desktop:800px"
          loading="lazy"
          class="featured-post__image"
        />
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.featured-post {
  display: flex;
  justify-content: space-between;
  gap: 74px;

  &--dark-theme {
    * {
      color: $text-color--white-primary;
    }
  }

  &--white-theme {
    * {
      color: $text-color--chinese-black;
    }
  }

  &__info-wrapper {
    max-width: 693px;
  }

  &__image-link {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
  }

  &__title {
    @include font('Inter', 32px, 700);
    line-height: 120%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__text {
    @include font('Inter', 16px, 400);
    line-height: 26px;
  }

  &__title,
  &__text {
    margin-bottom: 24px;
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media screen and (max-width: 1135px) {
    align-items: center;
    gap: 40px;

    &__info-wrapper {
      max-width: 450px;
    }

    &__image-wrapper {
      width: 100%;
    }
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 32px;

    &__info-wrapper {
      max-width: 100%;
    }

    &__title {
      font-size: 28px;
      line-height: 32px;
    }

    &__text {
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 450px) {
    &__title {
      font-size: 20px;
      line-height: 130%;
    }

    &__text {
      margin-bottom: 24px;
    }

    &__meta {
      flex-direction: column;
      gap: 27px;
    }
  }
}
</style>
