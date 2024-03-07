<script setup lang="ts">
import type { PropType } from 'vue'
import type { DigestPostCardDefaultProps } from '~/components/PageBlocks/Digest/interfaces/IDigestPostCardDefault'
import { DigestPostCardDefault } from '~/components/PageBlocks/Digest/classes/DigestPostCardDefault'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<DigestPostCardDefaultProps>,
    default: () => ({}),
  },
})

const {
  title,
  description,
  featuredImage,
  readTime,
  type,
  date,
  updatedDate,
  articleRate,
  uid,
  fetchPostRating,
} = new DigestPostCardDefault(slice)

onMounted(async () => {
  await fetchPostRating()
})
</script>

<template>
  <section class="digest-post-card">
    <div class="digest-post-card__poster-wrapper">
      <NuxtImg
        v-if="featuredImage.url"
        provider="prismic"
        loading="lazy"
        :src="featuredImage.url.replace('compress,', '')"
        :alt="featuredImage.alt || $prismic.asText(title)"
        width="983"
        height="534"
        class="digest-post-card__poster"
      />
    </div>
    <div
      class="digest-post-card__info"
    >
      <h3
        class="digest-post-card__title"
      >
        {{ $prismic.asText(title) }}
      </h3>
      <div
        class="digest-post-card__description"
        v-html="$prismic.asHTML(description)"
      />
    </div>
    <LazyPageBlocksDigestUIPostFooter
      :read-time="readTime"
      :article-rate="articleRate"
      :date="formatDate(date)"
      :updated-date="updatedDate ? formatDate(updatedDate) : ''"
    />
    <LazyPageBlocksDigestUICardButton
      :url="`/${type === 'post' ? 'blog' : 'customer-university'}/${uid}/`"
      :external="false"
      button-text="Learn more"
      class="digest-post-card__link"
    />
  </section>
</template>

<style lang="scss" scoped>
.digest-post-card {
  background: $bgcolor--white-primary;
  display: flex;
  flex-direction: column;

  &__poster-wrapper {
    width: 100%;
    margin-bottom: 32px;
  }

  &__poster {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  & .digest-post-card__title {
    margin-bottom: 24px;

    @media screen and (max-width: 530px) {
      font-size: 20px;
      line-height: 130%;
      margin-bottom: 16px;
    }
  }

  &__description {
    :deep(p) {
      @include font('Inter', 17px, 400);
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--black-oil;
      margin: 0 0 24px;

      &:last-child {
        margin: 0 0 16px;

        @media screen and (max-width: 530px) {
          margin-bottom: 24px;
        }
      }
    }
  }
}
</style>
