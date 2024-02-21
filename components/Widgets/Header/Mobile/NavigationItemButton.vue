<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

defineProps({
  emitEventName: {
    type: String,
    default: '',
  },

  label: {
    type: String,
    default: '',
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  currentRootRoute: {
    type: String,
    default: '',
  },

  showIcon: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },

  haveChapters: {
    type: Boolean,
    default: true,
  },

  url: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div>
    <button
      v-if="haveChapters"
      type="button"
      class="header-navigation-button"
      @click="$emit(emitEventName)"
    >
      <span
        class="header-navigation-button__label"
        :class="{ 'header-navigation-button__label--active': isActive || currentRootRoute === label }"
      >
        {{ label }}
        <img
          v-if="showIcon && icon.url"
          loading="lazy"
          :src="icon.url"
          :alt="icon.alt || 'Link icon'"
          width="24"
          height="24"
          class="header-navigation-button__link-icon"
        >
      </span>
      <span
        v-if="haveChapters"
        class="header-navigation-button__icon"
        :class="{ 'header-navigation-button__icon--active': isActive }"
      >
        ↓
      </span>
    </button>
    <NuxtLink
      v-if="!haveChapters && url"
      :to="url"
      exact
      class="header-navigation-button"
    >
      <span
        class="header-navigation-button__label"
      >
        {{ label }}
        <img
          v-if="showIcon && icon.url"
          loading="lazy"
          :src="icon.url"
          :alt="icon.alt || 'Link icon'"
          width="24"
          height="24"
          class="header-navigation-button__link-icon"
        >
      </span>
      <span
        v-if="haveChapters"
        class="header-navigation-button__icon"
        :class="{ 'header-navigation-button__icon--active': isActive }"
      >
        ↓
      </span>
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
.header-navigation-button {
  cursor: pointer;
  font-family: "Inter", sans-serif;
  border: 0 solid;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 18px 0;

  &__label {
    @include font('Inter', 33px, 600);
    text-align: left;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    letter-spacing: -0.04em;
    line-height: 43px;
    color: $text-color--white;
    transition: all .15s ease;

    &--active {
      color: $text-color--red;
    }
  }

  &__icon {
    display: inline-block;
    margin-left: 20px;
    font-size: 25px;
    color: $text-color--quote-box;
    transform: rotate(-90deg);
    transition: all .15s ease;

    &--active {
      transform: rotate(0);
    }
  }

  @media (hover: hover) {
    &:hover {
      .header-navigation-button__label {
        color: $text-color--red;
      }
    }
  }

  &__link-icon {
    width: 23.768px;
    height: 23.767px;
    display: block;

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-left: 12px;
      }
    }
  }
}

.router-link-exact-active {
  .header-navigation-button__label {
    color: $text-color--red;
  }
}
</style>
