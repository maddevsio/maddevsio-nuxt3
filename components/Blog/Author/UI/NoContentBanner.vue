<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="author-no-content-banner">
    <div class="author-no-content-banner__container container">
      <img
        loading="lazy"
        :src="$getMediaFromS3('images/Blog/svg/author-without-content.svg')"
        alt="Author doesn't have content"
        width="60"
        height="60"
        class="author-no-content-banner__icon"
      >
      <p class="author-no-content-banner__text">
        This author doesn't have any publications yet.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.author-no-content-banner {
  background-color: $bgcolor--white-primary;
  padding: 128px 0;
  min-height: 300px;

  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__icon {
    width: 60px;
    min-width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }

  &__text {
    @include font('Inter', 36px, 400);
    line-height: 121%;
    color: $text-color--grey-20-percent;
    text-align: center;
    max-width: 480px;
  }

  @media screen and (max-width: 1280px) {
    padding: 96px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 72px 0;
    min-height: 200px;

    &__icon {
      width: 40px;
      min-width: 40px;
      height: 40px;
      margin-bottom: 13px;
    }

    &__text {
      font-size: 24px;
      max-width: 280px;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 48px 0;

    &__icon {
      width: 30px;
      min-width: 30px;
      height: 30px;
    }

    &__text {
      font-size: 20px;
      max-width: 250px;
    }
  }
}
</style>
