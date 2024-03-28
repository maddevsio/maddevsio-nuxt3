<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>

<template>
  <div class="subscribe-form-digest-bg">
    <img
      loading="lazy"
      :src="$getMediaFromS3('images/custom/digest/svg/subscribe-mail-box.svg')"
      alt="Subscribe form mail box"
      width="148"
      height="148"
      class="subscribe-form-digest-bg__image"
    >
  </div>
</template>

<style lang="scss" scoped>
.subscribe-form-digest-bg {
  &__image {
    width: 100%;
    height: auto;
    display: block;

    @media screen and (max-width: 585px) {
      display: none;
    }
  }
}
</style>
