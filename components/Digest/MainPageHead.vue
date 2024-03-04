<script setup lang="ts">
const { isMobile } = useDevice()
const { $getMediaFromS3 } = useMediaFromS3()
// TODO: Needs add background images of different sizes and create component for this
</script>

<template>
  <section class="digest-main-page-head">
    <img
      :src="$getMediaFromS3('images/Digest/webp/digest-start-screen.webp')"
      :alt="'Digest Start Screen Background'"
      :width="isMobile ? 414 : 1440"
      :height="isMobile ? 445 : 582"
      class="digest-main-page-head__image"
    >
    <div class="container digest-main-page-head__container">
      <h1
        class="digest-main-page-head__title"
      >
        Monthly Digests
      </h1>
      <p
        class="digest-main-page-head__subtitle"
      >
        Check out the previous digest by Mad Devs and join for free to receive the 5-minute monthly newsletter.
      </p>
      <LazyWidgetsFormSubscribe
        form-uid="digest-page-head"
        color-theme="white"
        form-location="Digest home"
        slice-variation="subscribeFormDigest"
        class="digest-main-page-head__form"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.digest-main-page-head {
  position: relative;
  max-height: 582px;
  overflow: hidden;
  padding: 188px 0 96px;

  &__form {
    max-width: 65%;
    :deep(p) {
      color: $text-color--white-primary !important;
      font-size: 16px !important;
    }

    :deep(.subscribe-form__input) {
      width: 78%;
    }

    :deep(.subscribe-form__btn) {
      width: 23%;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(17, 17, 17, 0) 16.51%, #111111 100%);
  }

  &__container {
    position: relative;
    z-index: 1;
  }

  &__title {
    @include font('Inter', 100px, 700);
    line-height: 109%;
    color: $text-color--white-primary;
    margin-bottom: 35px;
  }

  &__subtitle {
    @include font('Inter', 24px, 600);
    line-height: 130%;
    color: $text-color--white-primary;
    margin-bottom: 48px;
  }

  &__subtitle {
    max-width: 60%;
  }

  @media screen and (max-width: 1280px) {
    &__title {
      font-size: 60px;
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 1080px) {
    &__form, &__subtitle {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 177px 0 72px;

    &__title {
      font-size: 45px;
    }

    &__subtitle {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 125px 0 64px;

    &__title {
      font-size: 31px;
    }

    &__subtitle {
      margin-bottom: 32px;
    }
  }
}
</style>
