<script setup lang="ts">
import { BlogService } from '~/components/Blog/classes/BlogService'

const prismic = usePrismic()
const { $getMediaFromS3 } = useMediaFromS3()
const config = useRuntimeConfig()
const { data: cuSection, error } = await useAsyncData('cuSection', async () => {
  try {
    return await new BlogService({ ffEnvironment: config.public.ffEnvironment }).getCUSection(prismic)
  } catch {
    showError({ statusMessage: 'Page not found', statusCode: 404 })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>
<template>
  <section class="customer-university">
    <div
      class="container customer-university__container"
    >
      <h2
        id="customer-university"
        data-id="customer-university"
        class="customer-university__title anchor_title"
      >
        <span class="customer-university__title--transparent-bg">Customer</span> University
        <span class="anchor_copy-link">
          <button
            data-id="customer-university"
            class="copy-link"
            @click="useCopyAnchorLink"
          >
            <img
              :src="$getMediaFromS3('images/core/common/anchor.svg')"
              alt="Anchor"
              width="16"
              height="16"
            >
          </button>
          <span class="anchor_copy-link-tooltip">
            Copy link
          </span>
        </span>
      </h2>
      <p
        class="customer-university__description"
      >
        Many businesses still hesitate to hire an IT company to develop a technical solution or enhance an existing
        product because they aren’t aware of many processes and have more questions than replies.
        If you are one of them, here you can find information about the main software development processes.
      </p>
      <LazyBlogCustomerUniversityCards
        :cu-section-cards="cuSection"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.customer-university {
  background-color: $bgcolor--black;
  padding: 96px 0;

  &__container {
    @media screen and (max-width: 1080px) {
      max-width: 1240px;
      padding: 0 41px;
    }

    @media screen and (max-width: 450px) {
      padding: 0 20px;
    }
  }

  &__title {
    @include font('Inter', 60px, 700);
    line-height: 125%;
    color: $text-color--white-primary;
    margin-bottom: 48px;
    position: relative;

    &--transparent-bg {
      -webkit-text-stroke: 2px $bgcolor--white;
      color: $text-color--black-oil;
      paint-order: stroke fill;
    }
  }

  &__description {
    @include font('Inter', 24px, 400);
    line-height: 130%;
    color: $text-color--white-primary;
    margin-bottom: 72px;
  }

  @media screen and (max-width: 768px) {
    padding: 48px 0;

    &__title {
      font-size: 45px;
      line-height: 130%;
      margin-bottom: 32px;
    }

    &__description {
      font-size: 18px;
      line-height: 130%;
      margin-bottom: 48px;
    }
  }

  @media screen and (max-width: 450px) {
    &__title {
      font-size: 31px;
      line-height: 130%;
      margin-bottom: 24px;
    }

    &__description {
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 370px) {
    &__title {
      font-size: 29px;
    }
  }
}
</style>
