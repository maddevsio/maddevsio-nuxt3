<script setup lang="ts">
import { BlogService } from '~/components/Blog/classes/BlogService'

const image = inject('blogHeaderBackgroundImage')
const prismic = usePrismic()
const { data: featuredPost, error } = await useAsyncData('featuredPost', async () => {
  try {
    return await new BlogService().getFeaturePost(prismic)
  } catch {
    showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const sectionText = ref<HTMLElement>()
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)
</script>
<template>
  <section
    id="transparent-header-area"
    class="blog-main-header"
  >
    <div class="blog-main-header__background">
      <img
        :src="image.url"
        :alt="image.alt"
        :width="image.dimensions.width"
        :height="image.dimensions.height"
        class="blog-main-header__background-image"
      >
    </div>
    <div
      ref="sectionText"
      :style="{opacity: sectionTextOpacity}"
      class="container blog-main-header__container-inner"
    >
      <h1
        class="blog-main-header__title"
      >
        Business and IT Insights
      </h1>
      <LazyBlogUIFeaturedPost
        v-if="Object.keys(featuredPost).length"
        :author="featuredPost.data.post_author.data"
        :post="featuredPost"
        title-tag="h2"
      />
      <LazySharedSkeletonsFeaturedPost
        v-else
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.blog-main-header {
  position: relative;
  padding: 127px 0 64px 0;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    z-index: -1;
    &::after {
      content: '';
      width: 100%;
      height: 262px;
      display: block;
      position: relative;
      margin-top: -262px;
      background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, #111213 70%);
      background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, #111213 70%);
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #111213 70%);
      z-index: 0;
    }
  }

  &__background-image {
    width: 100%;
    height: 100%;
    max-height: 637px;
    object-fit: cover;
    display: block;
  }

  &__title {
    @include font('Poppins', 60px, 700);
    line-height: 125%;
    color: $text-color--white-primary;
    margin-bottom: 64px;
  }

  @media screen and (max-width: 768px) {
    &__container-inner {
      max-width: 1240px;
      padding: 0 40px;
    }

    &__background {
      height: 512px;

      &:after {
        height: 512px;
        margin-top: -512px;
      }
    }

    &__background-image {
      height: 100%;
      object-fit: initial;
    }
  }

  @media screen and (max-width: 450px) {
    padding-top: 117px;

    &__background {
      height: 440px;

      &:after {
        height: 250px;
        margin-top: -250px;
      }
    }

    &__title {
      font-size: 36px;
      line-height: 130%;
      margin-bottom: 48px;
    }

    &__container-inner {
      padding: 0 20px;
    }

    &__background-image {
      height: 100%;
      object-fit: cover;
    }

  }
}
</style>
