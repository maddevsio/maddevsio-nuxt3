<script setup lang="ts">
import type { BooleanField } from '@prismicio/client'
import type { PropType } from 'vue'

defineProps({
  url: {
    type: String,
    required: true,
    default: '',
  },

  buttonText: {
    type: String,
    required: true,
    default: 'Explore',
  },

  external: {
    type: Boolean as PropType<BooleanField>,
    required: true,
    default: false,
  },
})
</script>

<template>
  <div class="digest-card-button">
    <NuxtLink
      v-if="url"
      :to="url"
      :external="external"
      :no-rel="external"
      :target="external ? '_blank' : '_self'"
      class="digest-card-button__link"
    >
      {{ buttonText }}
      <LazyPageBlocksDigestUICardButtonArrow />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.digest-card-button {
  * {
    box-sizing: border-box;
  }

  &__link {
    @include font('Inter', 16px, 400);
    line-height: 26px;
    color: $text-color--chinese-black;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
    border: 1px solid $text-color--grey-opacity-40-percent;
    border-radius: 5px;
    padding: 8px 0;
    max-height: 44px;
    margin-top: 32px;
    transition: 0.3s;

    :deep(svg) {
      path {
        transition: 0.3s;
      }
    }

    &:hover {
      background-color: $bgcolor--red;
      color: $text-color--white-primary;
      border-color: $border-color--red;

      :deep(svg) {
        path {
          fill: $text-color--white-primary;
        }
      }
    }

    @media screen and (max-width: 530px) {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.4px;
    }
  }
}
</style>
