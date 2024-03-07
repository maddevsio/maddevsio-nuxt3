<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },

  file: {
    type: String,
    default: null,
  },

  alt: {
    type: String,
    default: '',
  },

  color: {
    type: String,
    default: 'silver',
  },
})
</script>
<template>
  <LazyCaseStudiesUICard
    class="card"
    :class="`background-color-${color}`"
  >
    <h4 class="card_title case_title_h4">
      {{ title }}
    </h4>
    <div class="card_image-wrapper">
      <LazyCaseStudiesUIPicture
        folder="itc"
        :file="`${file}-desktop`"
        extension="png"
        :alt="alt || title || 'Image'"
        :width="160"
        :height="302"
        :background="false"
        :lazy="false"
      />
    </div>
    <div class="card_image-wrapper-mobile">
      <LazyCaseStudiesUIPicture
        folder="itc"
        :file="`${file}-mobile`"
        extension="png"
        :alt="alt || title || 'Image'"
        :width="295"
        :height="201"
        :background="false"
        :lazy="false"
      />
    </div>
  </LazyCaseStudiesUICard>
</template>
<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;

  &_title {
    color: $text-color--white-primary
  }

  &_image-wrapper {
    min-width: 160px;
    min-height: 302px;
    margin: -32px -32px -32px 10px;
  }

  &_image-wrapper-mobile {
    display: none;
    min-width: 295px;
    min-height: 201px;
    margin: -34px -34px -34px 0;

    @media screen and (max-width: 768px) {
      min-width: 250px;
      min-height: 170px;
    }

    @media screen and (max-width: 640px) {
      width: 233px;
      height: 150px;
      margin-right: -125px;
    }

    @media screen and (max-width: 420px) {
      margin-right: -170px;
    }

    @media screen and (max-width: 360px) {
      margin-right: -200px;
    }
  }

  @media screen and (max-width: 970px) {
    &_image-wrapper {
      display: none;
    }

    &_image-wrapper-mobile {
      display: block;
      margin-left: auto;
    }

    &_title {
      max-width: 270px;
      margin-right: 20px;
    }
  }
}
</style>
