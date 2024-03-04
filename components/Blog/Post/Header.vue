<script setup lang="ts">
import type { PropType } from 'vue'
import type { IPostHeader } from '~/components/Blog/interfaces/Post/IPostHeader'

const props = defineProps({
  postHeader: {
    type: Object as PropType<IPostHeader>,
    default: () => ({}),
  },
})

const {
  title,
  subtitle,
  featuredImage,
  author,
  coAuthor,
  tags,
  servicePost,
  passData,
  showTag,
} = props.postHeader

const { isMobile } = useDevice()
</script>
<template>
  <section class="post-header">
    <div
      class="post-header__container"
      :class="{ 'post-header__container--service-post': servicePost}"
    >
      <div
        class="post-header__content"
        :class="{ 'post-header__content--service-post': servicePost }"
      >
        <slot name="cuNav" />
        <slot name="postMetaInfo" />
        <h1
          class="post-header__title"
        >
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="post-header__subtitle"
        >
          {{ subtitle }}
        </p>
        <div class="post-header__authors">
          <SharedArticleAuthor
            :uid="author.uid"
            :name="author.data.name"
            :position="author.data.position"
            :image="author.data.image.thumbnail"
            theme="dark"
            :date="passData('date')"
            :read-time="passData('readTime')"
          />
          <SharedArticleAuthor
            v-if="coAuthor && coAuthor.uid"
            :uid="coAuthor.uid"
            :name="coAuthor.data.name"
            :position="coAuthor.data.position"
            :image="coAuthor.data.image"
            theme="dark"
            :date="passData('date')"
            :read-time="passData('readTime')"
          />
          <SharedArticleTagBadge
            v-if="showTag()"
            :tag="tags[0]"
            theme="dark"
          />
        </div>
      </div>
      <div class="post-header__featured-image-wrapper">
        <NuxtImg
          v-if="featuredImage.url"
          provider="prismic"
          :src="clearImageParamsFromPrismic(featuredImage.url)"
          :alt="title"
          sizes="mobile:550px tablet:768px desktop:983px"
          :width="isMobile ? 455 : 983"
          :height="isMobile ? 245 : 534"
          class="post-header__featured-image"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.post-header {
  padding-top: 170px;
  background: linear-gradient(to bottom, #111212 65%, #ffffff 38%);
  padding-bottom: 25px;

  * {
    box-sizing: border-box;
  }

  &__container {
    max-width: 983px;
    margin-inline: auto;

    &--service-post {
      max-width: 1032px;
    }
  }

  &__content {
    padding: 0 82.5px;

    &--service-post {
      padding-inline: 0;
    }
  }

  &__title {
    @include font('Inter', 52px, 400);
    line-height: 67px;
    letter-spacing: -2px;
    color: $text-color--white;
  }

  &__subtitle {
    @include font('Inter', 17px, 300);
    margin: 15px 0 36px 0;
    color: $text-color--white-primary;
    letter-spacing: 0.2px;
    font-size: 17px;
    line-height: 28px;
  }

  &__authors {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 36px;
    margin-bottom: 43px;
    text-decoration: none;
    width: 100%;
  }

  &__featured-image-wrapper {
    width: 100%;
  }

  &__featured-image {
    width: 100%;
    height: auto;
    max-height: 534px;
    display: block;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    background: #111212;
    padding-bottom: 0;
    padding-top: 120px;

    &__container {
      width: 100%;
      max-width: unset;
    }

    &__title {
      font-size: 35px;
      line-height: 45px;
      letter-spacing: -1px;
    }

    &__content {
      padding-inline: 24px;
    }

    &__authors {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: baseline;
      row-gap: 19px;
    }
  }

  @media screen and (max-width: 768px) {
    &__content {
      padding-inline: 14px;
    }

    &__authors {
      grid-template-columns: 1fr;
    }
  }
}
</style>
