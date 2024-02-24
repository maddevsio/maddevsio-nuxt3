<script setup lang="ts">
const modalContactMeRef = ref<{ show(): void }>()
const { $getMediaFromS3 } = useMediaFromS3()
const showModal = () => {
  if (!modalContactMeRef?.value?.show) { return }
  modalContactMeRef.value.show()
}
// TODO: add email subject
</script>
<template>
  <section class="blog-cta">
    <div class="container blog-cta__container">
      <div class="blog-cta__separator" />
      <div class="blog-cta__wrapper">
        <h2 class="blog-cta__title">
          Build your product<br>with Mad Devs
        </h2>
        <p class="blog-cta__description">
          Together we build solutions that bring digital innovation.
        </p>
        <LazySharedUIButton
          :is-link="false"
          @click="showModal"
        >
          Let's talk
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.50033 2.66602C5.50033 2.38987 5.72418 2.16602 6.00033 2.16602H13.3337C13.6098 2.16602 13.8337 2.38987 13.8337 2.66602V9.99935C13.8337 10.2755 13.6098 10.4993 13.3337 10.4993C13.0575 10.4993 12.8337 10.2755 12.8337 9.99935V3.87312L3.02055 13.6862C2.82528 13.8815 2.5087 13.8815 2.31344 13.6862C2.11818 13.491 2.11818 13.1744 2.31344 12.9791L12.1266 3.16602H6.00033C5.72418 3.16602 5.50033 2.94216 5.50033 2.66602Z"
              fill="white"
            />
          </svg>
        </LazySharedUIButton>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`/images/Blog/webp/CTA-banner-bg.webp`)"
          :alt="'CTA Background'"
          width="1240"
          height="483"
          class="blog-cta__image"
        >
      </div>
    </div>
    <ClientOnly>
      <Teleport to="body">
        <LazyWidgetsModalContactMe
          ref="modalContactMeRef"
          location="Main blog page. CTA banner."
          form-uid="main-blog-page-cta"
        />
      </Teleport>
    </ClientOnly>
  </section>
</template>
<style lang="scss" scoped>
.blog-cta {
  margin-bottom: 96px;

  * {
    color: $text-color--white-primary;
  }

  &__container {
    @media screen and (max-width: 1080px) {
      max-width: 1240px;
      padding: 0 41px;
    }

    @media screen and (max-width: 450px) {
      padding: 0 20px;
    }
  }

  &__separator {
    background: linear-gradient(90deg, rgba(159, 160, 161, 0.04) 0, rgba(160, 160, 161, 0.04) 10%, #A0A0A1 50%, transparent 90%, transparent);
    margin: 0 0 48px;
    height: 1px;
  }

  &__wrapper {
    position: relative;
    display: flex;
    place-items: center;
    flex-direction: column;
    padding: 93px 0;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      background: linear-gradient(270deg, rgba(29, 29, 31, 0) -1.85%, rgba(16, 16, 17, 0.66) 50.2%, rgba(0, 0, 0, 0) 101.85%);
      filter: blur(2px);
      z-index: -1;
    }
  }

  &__title {
    @include font('Inter', 60px, 700);
    line-height: 125%;
    text-align: center;
    margin-bottom: 12px;
  }

  &__description {
    @include font('Inter', 21px, 400);
    line-height: 148%;
    margin-bottom: 48px;
  }

  :deep(.ui-button) {
    padding: 15px 87px;
    gap: 12px;
    font-weight: 400;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: absolute;
    inset: 0;
    z-index: -2;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 48px;

    &__wrapper {
      padding: 51px 0;
    }

    &__title {
      font-size: 36px;
      line-height: 130%;
      margin-bottom: 4px;
    }

    &__description {
      font-size: 18px;
      line-height: 130%;
      text-align: center;
    }

    :deep(.ui-button) {
      padding: 15px 45.5px;

      svg {
        width: 14px;
        height: 14px;
      }
    }
  }

  @media screen and (max-width: 638px) {
    &__wrapper {
      padding: 51px 31.5px;
    }
  }

  @media screen and (max-width: 450px) {
    &__separator {
      display: none;
    }

    &__wrapper {
      padding: 47px 31.5px;
    }

    &__title {
      font-size: 31px;
      line-height: 130%;
    }

    :deep(.ui-button) {
      padding: 9px 45.5px;
    }
  }
}
</style>
