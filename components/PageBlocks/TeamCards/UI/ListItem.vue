<script setup lang="ts">
import type { ImageField } from '@prismicio/types'

interface Props {
  name: string
  position: string
  image: ImageField
  textColor: string
  containerSize: string
}

withDefaults(defineProps<Props>(), {
  textColor: 'black',
  containerSize: '1240',
})
</script>
<template>
  <li :class="`simple-team-list-item simple-team-list-item--${containerSize}`">
    <img
      v-if="image && image.url"
      loading="lazy"
      :src="image.url"
      :alt="image.alt || 'Photo'"
      width="70"
      height="70"
      class="simple-team-list-item__image"
    >
    <div class="simple-team-list-item__info">
      <p
        v-if="name"
        :class="`simple-team-list-item__name simple-team-list-item__name--${textColor}`"
      >
        {{ name }}
      </p>
      <p
        v-if="position"
        :class="`simple-team-list-item__position simple-team-list-item__position--${textColor}`"
      >
        {{ position }}
      </p>
    </div>
  </li>
</template>
<style scoped lang="scss">
.simple-team-list-item {
  display: flex;
  align-items: center;

  &__name {
    @include font('Inter', 20px, 600);
    line-height: 130%;
    margin-bottom: 5px;

    &--black {
      color: $text-color--black;
    }

    &--white {
      color: $text-color--white-primary;
    }
  }

  &__position {
    @include font('Inter', 16px, 400);
    line-height: 125%;

    &--black {
      color: $text-color--grey-pale;
    }

    &--white {
      color: $text-color--grey-opacity-40-percent;
    }
  }

  &__image {
    width: 70px;
    min-width: 70px;
    height: 70px;
    border-radius: 6px;
    margin-right: 10px;
    object-fit: cover;
  }

  &--816 {
    @media screen and (min-width: 1080px) {
      .simple-team-list-item__name {
        font-size: 18px;
      }

      .simple-team-list-item__position {
        font-size: 14px;
      }

      .simple-team-list-item__image {
        width: 53px;
        min-width: 53px;
        height: 53px;
      }
    }
  }

  @media screen and (max-width: 360px) {
    &__name {
      font-size: 18px;
    }

    &__position {
      font-size: 14px;
    }

    &__image {
      width: 53px;
      min-width: 53px;
      height: 53px;
    }
  }
}
</style>
