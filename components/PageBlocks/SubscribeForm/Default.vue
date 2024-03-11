<script setup lang="ts">
import type { PropType } from 'vue'
import type { SubscribeFormDefaultProps } from '~/components/PageBlocks/SubscribeForm/interfaces/ISubscribeFormDefault'
import { SubscribeFormDefault } from '~/components/PageBlocks/SubscribeForm/classes/SubscribeFormDefault'

const { $getMediaFromS3 } = useMediaFromS3()

const { slice } = defineProps({
  slice: {
    type: Object as PropType<SubscribeFormDefaultProps>,
    default: () => ({}),
  },
})

const {
  sliceClasses,
  formContentClasses,
  subscribeFormBlock,
} = new SubscribeFormDefault(slice)
</script>

<template>
  <section
    class="subscribe-form-slice"
    :class="sliceClasses"
  >
    <div
      class="subscribe-form-content"
      :class="formContentClasses"
    >
      <div class="subscribe-form-content__image-wrapper">
        <img
          loading="lazy"
          :src="$getMediaFromS3('/images/Blog/svg/subscribe-mailbox.svg')"
          alt="Subscribe Mail Box"
          class="subscribe-form-content__image"
          width="246"
          height="170"
        >
        <img
          loading="lazy"
          :src="$getMediaFromS3('/images/Blog/svg/subscribe-mailbox-mobile.svg')"
          alt="Subscribe Mail Box"
          class="subscribe-form-content__image--mobile"
          width="120"
          height="168"
        >
      </div>
      <ClientOnly>
        <LazyWidgetsFormSubscribeFormBlock
          :subscribe-form-block-instance="subscribeFormBlock"
          form-uid="blog-post"
        />
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.subscribe-form-slice {
  &--dark-theme {
    background: $bgcolor--black;
  }

  &--light-theme {
    background: $bgcolor--white-primary;
  }
}

.subscribe-form-content {
  display: flex;
  justify-content: space-between;
  border-width: 1px;
  border-style: solid;
  padding-right: 53px;
  margin: 0 auto;

  &--dark-theme {
    background: $bgcolor--black;
    border-color: $border-color--black;
  }

  &--light-theme {
    background: $bgcolor--white-primary;
    border-color: $border-color--grey-opacity-40-percent;
  }

  &__image-wrapper {
    width: 40%;
    align-self: flex-end;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;

    &--mobile {
      display: none;
    }
  }

  :deep(.subscribe-form-block) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 43px 0;
  }

  :deep(.subscribe-form-block__link-wrapper) {
    font-size: 12px;
    margin-bottom: 22px;
  }

  :deep(.subscribe-form-block__title--big) {
    margin: 0;
  }

  :deep(.subscribe-form-block__controllers) {
    width: 80%;
  }

  @media screen and (max-width: 1024px) {
    :deep(.subscribe-form-block__title) {
      margin-bottom: 14px;
    }
  }

  @media screen and (max-width: 680px) {
    padding-right: 14px;

    :deep(.subscribe-form-block) {
      align-self: center;
      padding: 35px 0;
    }

    :deep(.subscribe-form-block__title) {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 580px) {
    &__image {
      display: none;

      &--mobile {
        display: block;
        width: 100%;
        height: auto;
        max-width: 150px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    &__image-wrapper {
      width: 35%;
    }

    &__image {
      &--mobile {
        max-width: 100%;
      }
    }

    :deep(.subscribe-form-block) {
      max-width: 63% !important;
    }

    :deep(.subscribe-form-block__title) {
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }

    :deep(.subscribe-form-block__link-wrapper) {
      font-size: 11px;
      margin-bottom: 12px;
    }

    :deep(.subscribe-form-block__button) {
      height: 38px;
      font-size: 12px;
      text-align: center;
    }

    :deep(.subscribe-form-block__controllers) {
      width: 100%;
    }
  }

  @media screen and (max-width: 360px) {
    flex-direction: column-reverse;
    padding-right: 0;

    &__image-wrapper {
      width: 50%;
    }

    :deep(.subscribe-form-block) {
      max-width: 100% !important;
    }

    :deep(.subscribe-form-block__link-wrapper) {
      margin-bottom: 12px;
    }
  }
}
</style>
