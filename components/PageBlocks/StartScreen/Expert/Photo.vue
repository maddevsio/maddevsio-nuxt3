<script setup lang="ts">
interface Props {
  platform?: string
  imageUrl: string
  imageAlt: string
}

const {
  platform,
  imageAlt,
  imageUrl,
} = defineProps<Props>()

const setClassnames = (elemName = '') => (platform
  ? `expert-page-header__info-main-photo${ elemName }--${ platform }`
  : `expert-page-header__info-main-photo${ elemName }`)
</script>
<template>
  <div
    :class="setClassnames('-wrapper')"
  >
    <NuxtImg
      provider="prismic"
      :class="setClassnames()"
      :src="imageUrl.replace(/\?.*/, '?auto=compress,format')"
      :alt="imageAlt || 'Expert photo'"
      width="281"
      height="281"
    />
  </div>
</template>
<style lang="scss" scoped>
.expert-page-header {
  &__info {
    &-main-photo-wrapper {
      flex: 1 1;
    }

    &-main-photo-wrapper {
      max-width: 110px;
      width: 100%;

      &--desktop {
        display: none;
        visibility: hidden;
      }

      @media screen and (min-width: 1140px) {
        display: none;
        visibility: hidden;

        &--desktop {
          max-width: 281px;
          width: 30%;
          display: block;
          visibility: visible;
        }
      }
    }

    &-main-photo,
    &-main-photo--desktop {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 50%;
    }

    @media screen and (min-width: 475px) {
      &-main-photo-wrapper {
        flex: 1 1 auto;
      }
    }

    @media screen and (min-width: 1140px) {
      &-main-photo-wrapper {
        flex: initial;
      }
    }
  }
}
</style>
