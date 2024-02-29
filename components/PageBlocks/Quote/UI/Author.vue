<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

defineProps({
  portraitAuthor: {
    type: Object as PropType<ImageField>,
    default: () => ({
      url: '',
      alt: '',
    }),
  },

  authorName: {
    type: String,
    default: '',
  },

  quotationDesign: {
    type: String,
    default: '',
  },

  email: {
    type: String,
    default: '',
  },

  linkedinLink: {
    type: String,
    default: '',
  },

  colorTheme: {
    type: Object as PropType<{ textColor: string, backgroundSlice: string }>,
    default: () => ({}),
  },
})
</script>
<template>
  <div
    :class="`p-${quotationDesign}`"
    class="author"
  >
    <div
      v-if="portraitAuthor.url"
      class="author__image"
    >
      <NuxtImg
        v-if="portraitAuthor.url"
        provider="prismic"
        loading="lazy"
        :src="portraitAuthor.url.replace('compress,', '')"
        :alt="portraitAuthor.alt || authorName"
        width="40"
        height="40"
      />
    </div>
    <div class="author__info">
      <div
        v-if="authorName"
        :class="`author__name ${colorTheme.textColor}`"
      >
        {{ authorName }}
      </div>
      <hr
        v-if="email || linkedinLink"
        class="author__divider"
      >
      <LazyPageBlocksQuoteUIAuthorSocialList
        v-if="linkedinLink || email"
        :email="email"
        :linkedin-link="linkedinLink"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">

.text--gray {
  p {
    color: $text-color--grey-opacity-40-percent;
  }
}

.author {
  display: flex;
  align-items: center;

  &.p {
    &-border {
      padding-left: 37px;

      @media screen and (max-width: 525px) {
        padding-left: 0;
      }
    }
    &-brackets {
      padding-left: 62px;

      @media screen and (max-width: 525px) {
        padding-left: 0;
      }
    }
  }

  &__image {
    margin-right: 8px;
    img {
      width: 40px;
      min-width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }

  &__name {
    @include font('Inter', 16px, 400);
    color: $text-color--grey-opacity-40-percent;
    font-style: italic;
    line-height: 166%;
    letter-spacing: -0.035em;

    &.text--gray {
      color: $border-color--grey-20-percent;
    }

    @media screen and (max-width: 650px) {
      font-size: 13px;
    }
  }

  &__info {
    display: flex;
    align-items: center;

    @media screen and (max-width: 650px) {
      flex-direction: column;
      row-gap: 5px;
      align-items: flex-start;
    }
  }

  &__divider {
    height: 25px;
    width: 1px;
    margin: 0 12px;
    border: none;
    background-color: $border-color--grey-20-percent;

    @media screen and (max-width: 650px) {
      display: none;
    }
  }
}
</style>
