<script setup lang="ts">
import type { PropType } from 'vue'
import type { TransformedAuthor, TransformedAuthorSocialNetwork } from '~/interfaces/common/commonInterfaces'

const props = defineProps({
  author: {
    type: Object as PropType<TransformedAuthor>,
    default: () => ({}),
  },

  authorLink: {
    type: String,
    default: '',
  },

  authorImage: {
    type: Object as PropType<TransformedAuthor['image']>,
    default: () => ({
      url: '',
      alt: '',
    }),
  },

  authorSocialNetworks: {
    type: Array as PropType<TransformedAuthorSocialNetwork[]>,
    default: () => [],
  },

  isCoAuthor: {
    type: Boolean,
    default: false,
  },
})

const photo = props.authorImage.thumbnail.url && props.authorImage.thumbnail.url.replace('w=80&h=80', 'w=186&h=186')
</script>
<template>
  <div :class="`author__wrapper ${isCoAuthor ? 'author__wrapper--co' : ''}`">
    <NuxtLink
      v-if="photo"
      class="author__image author__link"
      :to="authorLink"
    >
      <img
        loading="lazy"
        :src="photo"
        :alt="authorImage.alt || 'Image'"
        width="68"
        height="68"
      >
    </NuxtLink>
    <div class="author__data">
      <NuxtLink
        class="author__link"
        :to="authorLink"
      >
        <p class="author__name">
          {{ author.name }}
        </p>
        <span class="author__position">
          {{ author.position }}
        </span>
      </NuxtLink>
      <ul
        v-if="authorSocialNetworks && authorSocialNetworks.length"
        class="author__social-list"
      >
        <li
          v-for="network in authorSocialNetworks"
          :key="network.key"
          :class="`author__social-item--${network.key}`"
          data-testid="test-social"
          class="author__social-item"
        >
          <a
            :href="network.link.url"
            target="_blank"
            rel="noopener"
            :class="`author__social-item-link author__social-item-link--${network.key}`"
          >
            link to {{ network.key }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.author {
  &__wrapper {
    display: flex;
    align-items: flex-start;
    gap: 12px;

    &--co {
      @media only screen and (max-width: 1024px) {
        margin-top: 16px;
      }
    }
  }

  &__image {
    background-color: $bgcolor--silver;
    @media screen and (max-width: 1024px) {
      margin-right: 0;
    }

    &,
    img {
      display: block;
      position: relative;
      width: 68px;
      min-width: 68px;
      height: 68px;
      border-radius: 14px;
      @media screen and (max-width: 1024px) {
        width: 64px;
        min-width: 64px;
        height: 64px;
      }
    }
  }

  &__link {
    text-decoration: none;
  }

  &__name {
    @include font('Inter', 21px, 600);
    line-height: 130%;
    letter-spacing: -0.02px;
    color: $text-color--black-oil;
    margin: 0;
  }

  &__position {
    font-size: 15px;
    line-height: 166%;
    letter-spacing: -0.1px;
    color: $text-color--grey-pale;
  }

  &__social {
    &-list {
      list-style: none;
      padding: 0;
      margin-top: 0;
      display: flex;
      flex-flow: row wrap;
    }

    &-item {
      width: 22px;
      height: 22px;
      border-radius: 6px;
      margin-right: 16px;
      margin-bottom: 0;

      &-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 0;
        transition: .3s ease;

        &--linkedin {
          @include social-network-linkedin-customizable($text-color--grey-20-percent);
        }

        &--facebook {
          @include social-network-facebook-customizable($text-color--grey-20-percent);
        }

        &--twitter {
          @include social-network-twitter-customizable($text-color--grey-20-percent);
        }

        &--instagram {
          @include social-network-instagram-customizable($text-color--grey-20-percent, no-repeat, 140%, 50% 40%);
        }

        &--telegram {
          @include social-network-telegram-customizable($text-color--grey-20-percent, no-repeat, 140%, 50% 40%);
        }

        &:hover {
          background-color: $bgcolor--grey-selected;
        }
      }

      &-icon {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
