<script setup lang="ts">
import type { PropType } from 'vue'

interface Logo {
  caseName: string
  extension: string
  name: string
  width: number
  height: number
}

interface BGImage {
  caseName: string
  extension: string
  name: string
  mobile: string
}

defineProps({
  logo: {
    type: Object as PropType<Logo>,
    default: () => ({
      caseName: '',
      extension: '',
      name: '',
      width: 70,
      height: 70,
    }),
  },

  backgroundImage: {
    type: Object as PropType<BGImage>,
    default: () => ({
      caseName: '',
      extension: '',
      name: '',
    }),
  },

  title: {
    type: String,
    default: '',
  },

  color: {
    type: String,
    default: 'purple',
  },

  href: {
    type: String,
    default: '#',
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    class="card-link-download"
  >
    <img
      loading="lazy"
      :src="$getMediaFromS3(
        `/images/Cases/${backgroundImage.caseName}/${backgroundImage.extension}/${backgroundImage.name}.${backgroundImage.extension}`
      )"
      width="816"
      height="109"
      :alt="backgroundImage.name"
      class="card-link-download__background-img"
      data-testid="card-link-download__bg-desktop"
    >
    <img
      loading="lazy"
      :src="$getMediaFromS3(
        `/images/Cases/${backgroundImage.caseName}/${backgroundImage.extension}/${backgroundImage.mobile}.${backgroundImage.extension}`
      )"
      width="327"
      height="226"
      :alt="backgroundImage.mobile"
      class="card-link-download__background-img-mobile"
      data-testid="card-link-download__bg-mobile"
    >
    <div class="card-link-download__content">
      <img
        loading="lazy"
        :alt="`${logo.name} logo`"
        :src="$getMediaFromS3(`/images/Cases/${logo.caseName}/${logo.extension}/${logo.name}.${logo.extension}`)"
        :height="logo.height"
        :width="logo.width"
        class="card-link-download__store-logo"
      >
      <h3
        class="case_title_h4-28 card-link-download__title"
      >
        {{ title }}
      </h3>
      <a
        :class="`card-link-download__link background-color-${color}`"
        :href="href"
        rel="noopener"
        target="_blank"
      >
        <img
          loading="lazy"
          :src="$getMediaFromS3('/images/Cases/bilimapp/svg/download-icon.svg')"
          alt="Download icon"
          class="card-link-download__icon"
          height="19"
          width="19"
        >
        Download
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-link-download {
  background: #FFFFFF;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px 40px;
  position: relative;
  overflow: hidden;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    position: relative;
    z-index: 1;
  }

  &__title {
    font-weight: 700;
  }

  &__link {
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 138px;
    height: 36px;
    min-width: 138px;
    gap: 8px;
    box-sizing: border-box;
    @include font('Inter', 16px, 400);
    line-height: 26px;
    color: $text-color--white-primary;
  }

  &__background-img,
  &__background-img-mobile {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  &__background-img {
    min-width: 816px;

    &-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 24.06px 23px;

    &__title {
      font-size: 25px;
    }

    &__content {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 20px;
    }

    &__background-img {
      display: none;

      &-mobile {
        display: block;
        object-fit: cover;
      }
    }
  }

  @media screen and (max-width: 430px) {
    &__store-logo {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
