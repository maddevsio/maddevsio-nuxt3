<script setup lang="ts">
import type { ComputedRef, PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },

  subtitle: {
    type: String,
    required: true,
    default: '',
  },

  featuredImage: {
    type: Object as PropType<ImageField>,
    default: () => ({
      url: '',
      alt: '',
    }),
  },

  prevDigestUrl: {
    type: Object as PropType<ComputedRef<string>>,
    required: true,
    default: () => ({}),
  },

  nextDigestUrl: {
    type: Object as PropType<ComputedRef<string>>,
    required: true,
    default: () => ({}),
  },

})
</script>

<template>
  <section class="digest-header">
    <div class="container digest-header__container">
      <div class="digest-header-navigation__buttons-wrapper">
        <div class="digest-header-navigation__buttons">
          <NuxtLink
            :to="prevDigestUrl"
            :class="prevDigestUrl.value === '#' ? 'disabled' : ''"
            :event="prevDigestUrl.value === '#' ? '' : 'click'"
            class="digest-header-navigation__link"
          >
            <span class="arrow prev" />
            Previous
          </NuxtLink>
          <span class="digest-header-navigation__divider" />
          <NuxtLink
            :to="nextDigestUrl"
            :class="nextDigestUrl.value === '#' ? 'disabled' : ''"
            :event="nextDigestUrl.value === '#' ? '' : 'click'"
            class="digest-header-navigation__link"
          >
            Next
            <span class="arrow next" />
          </NuxtLink>
        </div>
      </div>
      <h1
        v-if="title"
        class="digest-header__title"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="digest-header__subtitle"
      >
        {{ subtitle }}
      </p>
    </div>
    <div class="container digest-header__container digest-header__featured-image-wrapper">
      <img
        v-if="featuredImage.url"
        :src="featuredImage.url"
        :alt="title"
        width="816"
        height="443.99"
        class="digest-header__featured-image"
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.digest-header {
  padding-top: 127px;
  background: linear-gradient(to bottom, #111212 69%, #ffffff 31%);
  padding-bottom: 72px;

  @media screen and (max-width: 830px) {
    background: #111212;
    padding-bottom: 0;
    margin-bottom: 64px;
  }

  @media screen and (max-width: 530px) {
    padding-top: 133px;
  }

  &__container {
    max-width: 816px;
  }

  &-navigation {
    &__buttons {
      @media screen and (max-width: 530px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-wrapper {
        width: 100%;
        margin: 0 0 32px;
        text-align: right;
      }
    }

    &__link {
      @include font('Inter', 16px, 400);
      color: $text-color--grey-opacity-20-percent;
      text-decoration: none;
      display: inline-block;
      line-height: 166%;
      transition: 0.3s;

      &:not(.disabled):hover {
        color: $text-color--red;

        .arrow {
          @include arrow-icon-red;
        }
      }

      &:not(.disabled) {
        .arrow {
          @include arrow-icon;
        }
      }

      .arrow {
        @include arrow-icon;
        display: inline-block;
        width: 12px;
        height: 11px;
        transition: 0.3s;

        &.prev {
          margin-right: 10px;
        }

        &.next {
          margin-left: 10px;
          transform: rotate(180deg);
        }
      }

      &.disabled {
        opacity: 0.2;
        cursor: not-allowed;
        color: $text-color--grey-opacity-40-percent;
      }
    }

    &__divider {
      display: inline-block;
      height: 27px;
      width: 1px;
      background-color: $bgcolor--grey-pale;
      vertical-align: middle;
      margin: 0 27px;

      @media screen and (max-width: 530px) {
        display: none;
      }
    }
  }

  &__title {
    @include font('Inter', 52px, 700);
    line-height: 72px;
    letter-spacing: -2px;
    color: $text-color--white-primary;
    margin-bottom: 24px;
    max-width: 693px;

    @media screen and (max-width: 530px) {
      font-size: 28px;
      line-height: 32px;
      letter-spacing: -1px;
      margin-bottom: 16px;
    }
  }

  &__subtitle {
    @include font('Inter', 21px, 400);
    line-height: 148%;
    color: $text-color--white-primary;
    margin-bottom: 32px;
    max-width: 816px;

    @media screen and (max-width: 530px) {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.4px;
    }
  }

  &__featured-image-wrapper {
    @media screen and (max-width: 830px) {
      padding: 0;
      width: 100%;
    }
  }

  &__featured-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
}
</style>
