<script setup lang="ts">
const animationSettings = {
  reverse: true,
  maxMove: 50,
  customMove: true,
  speed: 0.6,
  startPoint: 1.7,
  setIndentTop: true,
}
</script>
<template>
  <div class="case_container container_full background-color-silver m-48_bottom">
    <div v-mad-parallax="animationSettings">
      <div class="case_image-wrapp">
        <LazyCaseStudiesUIPicture
          folder="veeqo"
          file="inventory-change-log"
          extension="png"
          alt="Inventory Changelog."
          :width="1440"
          :height="366"
          :background="false"
          :lazy="false"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.case {
  &_container {
    max-height: 498px;
    overflow: hidden;
  }

  &_image-wrapp {
    min-width: 2386px;
    max-width: 2386px;
    padding-top: 110px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 880px) {
    &_container {
      max-height: 443px;
    }

    &_image-wrapp {
      padding-top: 20px;
      left: unset;
      right: 754px;
      transform: none;
    }
  }
}
</style>
