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

  tag: {
    type: String,
    default: '',
  },

  disableAuthorLink: {
    type: Boolean,
    default: false,
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
    :class="`featured-post--${theme}-theme`"
    class="featured-post"
  >
    <div class="featured-post__wrapper">
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
          <p class="featured-post__paragraph">
            {{ firstParagraph }}
          </p>
        </NuxtLink>
        <div class="featured-post__meta-wrapper">
          <LazySharedArticleAuthor
            :position="author.position"
            :image="author.image.thumbnail"
            :name="author.name"
            :uid="author.uid"
            :theme="theme"
            :date="formattedDate"
            :read-time="readTime"
            :disabled="disableAuthorLink"
          />
          <div class="featured-post__meta">
            <LazySharedArticleTagBadge
              v-if="tag || (post.tags && post.tags.length)"
              :tag="tag || post.tags[0]"
              :theme="theme"
            />
          </div>
        </div>
      </div>
      <div class="featured-post__image-wrapper">
        <NuxtLink
          :to="link"
          class="featured-post__image"
        >
          <NuxtImg
            provider="prismic"
            :src="post.data!.featured_image!.url"
            :alt="post.data!.featured_image!.alt || 'Image'"
            :width="isMobile ? 410 : 473"
            :height="isMobile ? 210 : 257"
            sizes="mobile:410px tablet:700px desktop:473px"
            loading="lazy"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.featured-post {
  &--dark-theme {
    * {
      color: $text-color--white-primary;
    }
  }
  &--light-theme {
    * {
      color: $text-color--black;
    }
  }

  a {
    text-decoration: none;
  }

  &__wrapper {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }

  &__info-wrapper{
    margin-top: 0;
    max-width: 100%;
    overflow: hidden;
  }

  &__title {
    @include font('Poppins', 42px, 600);
    line-height: 49px;
    margin-bottom: 24px;
    letter-spacing: -1.3px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__paragraph {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;
    margin-bottom: 32px;
  }

  &__meta {
    @include font('Inter', 13px, 400);
    display: flex;
    align-items: flex-start;

    &-wrapper {
      display: flex;
      justify-content: space-between;

      :deep(.post-author) {
        margin-right: 24px;
      }
    }
  }

  &__date {
    white-space: nowrap;
    margin-right: 24px;
    color: $text-color--grey;
  }
  &__image {
    display: block;
    width: 90%;
    margin-left: auto;
    border-radius: 4px;
    overflow: hidden;

    @media screen and (max-width: 1200px) {
      width: 100%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    &-wrapper {
      margin-top: 0;
    }
  }
}

@media only screen and (max-width: 991px) {
  .featured-post {
    &__info-wrapper {
      order: 1;
      padding: 0;
    }

    &__paragraph {
      margin-bottom: 38px;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.02em;
    }

    &__meta {
      justify-content: space-between;

      .post-tag {
        padding: 8px 16px;
        line-height: 22px;
        margin-left: 0;
      }

      &-wrapper {
        display: flex;
        align-content: center;

        :deep(.post-author) {
          margin-right: 0;
          margin-bottom: 0;
        }
      }
    }
    &__image {
      width: 100%;
      margin: 0;

      &-wrapper {
        order: 0;
        padding: 0;
        margin-bottom: 17px;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .featured-post {
    &__title {
      @include font('Inter', 32px, 700);
      line-height: 32px;
    }

    &__meta {
      margin-bottom: 17px;

      &-wrapper {
        flex-direction: column-reverse;
      }
    }
  }
}
</style>
