<script setup lang="ts">
defineProps({
  components: {
    type: Array,
    required: true,
  },

  boxShadow: {
    type: Boolean,
    default: false,
  },

  sliderDescription: {
    type: String,
    default: '',
  },

  safariTopBar: {
    type: Boolean,
    default: false,
  },

  safariTopBarImage: {
    type: String,
    default: '',
  },

  safariTopBarAlt: {
    type: String,
    default: '',
  },

  width: {
    type: Number,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },
})

const swiperOptionTop = {
  loop: false,
  spaceBetween: 10,
  grabCursor: true,
}

const swiperOptionThumbs = {
  spaceBetween: 8,
  loop: false,
  slidesPerView: 'auto',
  touchRatio: 0.1,
}

const lazy = ref(true)
const thumbsSwiper = ref<any>(null)

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const removeLazy = () => {
  lazy.value = false
}
</script>
<template>
  <div class="slider-content">
    <div
      :class="{ 'box-shadow': boxShadow }"
      class="swiper-container thumb-example"
    >
      <LazyCaseStudiesUIPicture
        v-if="safariTopBar"
        :file="safariTopBarImage"
        :alt="safariTopBarAlt || 'Image'"
        folder="common"
        extension="jpg"
      />
      <Swiper
        ref="swiperTop"
        v-bind="swiperOptionTop"
        class="swiper gallery-top"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="[SwiperThumbs]"
        @slide-change-transition-end="removeLazy"
      >
        <SwiperSlide
          v-for="element in components"
          :key="element.fileName"
        >
          <LazyCaseStudiesUIPicture
            :width="width"
            :height="height"
            :folder="element.pictureFolder"
            :file="element.fileName"
            :extension="element.fileExtension"
            :alt="element.alt || 'Image'"
            :lazy="false"
          />
          <p
            v-if="element.title"
            class="slide-description"
          >
            {{ element.title }}
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
    <p
      v-if="sliderDescription !== ''"
      class="slider-description"
    >
      {{ sliderDescription }}
    </p>
    <Swiper
      ref="swiperThumbs"
      v-bind="swiperOptionThumbs"
      class="swiper gallery-thumbs"
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide
        v-for="element in components"
        :key="element.fileName"
      >
        <LazyCaseStudiesUIPicture
          :folder="element.pictureFolder"
          :file="element.fileName"
          :extension="element.fileExtension"
          :alt="element.alt || 'Image'"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style lang="scss">
.thumb-example {
  img {
    display: block;
  }
}

.box-shadow {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.05), 0 5.47001px 41.35px rgba(0, 0, 0, 0.1);
}

.swiper {
  &.gallery-thumbs {
    box-sizing: border-box;
    padding: 8px 0;
    width: max-content;
  }

  &.gallery-thumbs .swiper-slide {
    width: 73px;
    height: 44px;
    opacity: 0.2;
    cursor: pointer;
  }

  &.gallery-thumbs .swiper-slide-thumb-active {
    opacity: 1;
  }
}

.slider-description {
  margin: 9px 0;
  padding: 0 24px;
  text-align: center;
  @include default-text($text-color--grey-img-description, 13px, 21.58px, -0.02em, normal);
}

.slide-description {
  margin: 0;
  padding: 10px 0 8px;
  text-align: center;
  @include default-text($text-color--black, 13px, 21.58px, -0.02em, 700);
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
}
</style>
