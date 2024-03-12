<script setup lang="ts">
defineProps({
  slides: {
    type: Array,
    default: () => [],
  },

  options: {
    type: Object,
    default: () => {},
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="ui-slider">
    <Swiper
      v-bind="options"
      :modules="[SwiperAutoplay]"
      class="ui-slider_slider"
    >
      <SwiperSlide
        v-for="slide in slides"
        :key="slide.file"
      >
        <picture>
          <source
            :srcset="[$getMediaFromS3(`/images/${slide.page}/webp/${slide.file}.webp`) + ' ', $getMediaFromS3(`/images/${slide.page}/webp/${slide.file}@2x.webp 2x`)].join(', ')"
            type="image/webp"
            class="ui-slider_slider-img"
          >
          <img
            loading="lazy"
            :src="$getMediaFromS3(`/images/${slide.page}/${slide.extension}/${slide.file}.${slide.extension}`)"
            :srcset="$getMediaFromS3(`/images/${slide.page}/${slide.extension}/${slide.file}@2x.${slide.extension}`)"
            :width="slide.width"
            :height="slide.height"
            :alt="slide.alt || 'Image'"
            class="ui-slider_slider-img"
          >
        </picture>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style lang="scss">
.ui-slider {
  &_slider-img {
    width: 100%;
    height: 100%;
  }
}
</style>
