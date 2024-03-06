<script setup lang="ts">
const props = defineProps({
  cardIndex: {
    type: Number,
    required: true,
  },

  preTitle: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },

  descriptions: {
    type: [String, Array],
    default: '',
  },

  image: {
    type: Object,
    default: () => {
    },
  },

  colors: {
    type: Object,
    default: () => {
    },
  },

  pictureRight: {
    type: Boolean,
    default: false,
  },

  verticalCenteredTitle: {
    type: Boolean,
    default: false,
  },
})

const cardColor = reactive({
  card: props.colors?.card ? `background-color-${ props.colors?.card }` : '',
  title: props.colors?.title ? `text-color-${ props.colors?.title }` : '',
  preTitle: props.colors?.preTitle ? `text-color-${ props.colors?.preTitle }` : '',
  descriptions: props.colors?.descriptions ? `text-color-${ props.colors?.descriptions }` : '',
})

const cardImage = reactive({
  width: props.image?.width,
  height: props.image?.height,
  folder: props.image?.folder,
  file: props.image?.file,
  alt: props.image?.alt,
  extension: props.image?.extension,
  mobileImage: {
    width: props.image?.mobileImage?.width,
    height: props.image?.mobileImage?.height,
    file: props.image?.mobileImage?.file,
  },
})

const isMobile = ref(false)
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 820
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 820
  if (cardImage.mobileImage.file) {
    window.addEventListener('resize', checkMobile)
  }
})

onUnmounted(() => {
  if (cardImage.mobileImage.file) {
    window.removeEventListener('resize', checkMobile)
  }
})
</script>
<template>
  <div
    class="colored-card"
    :class="`colored-card--${cardIndex} ${cardColor.card} ${pictureRight ? 'row-flex' : ''}`"
  >
    <template v-if="cardImage.file && !pictureRight">
      <div class="colored-card__image-wrapper">
        <LazyCaseStudiesUIPicture
          class="colored-card__image"
          :class="`colored-card-image-${cardImage.file}`"
          :width="396"
          :height="200"
          :file="cardImage.file"
          :alt="cardImage.alt || 'Image'"
          :folder="cardImage.folder"
          :extension="cardImage.extension ? cardImage.extension : 'png'"
        />
      </div>
    </template>

    <div
      class="colored-card__footer"
      :class="`${verticalCenteredTitle ? 'colored-card__footer--centered' : ''}`"
    >
      <span
        v-if="preTitle"
        class="colored-card__pre-title case_paragraph-uppercase m-10_bottom media-m-8_bottom"
        :class="cardColor.preTitle"
      >{{ preTitle }}</span>
      <h3
        v-if="title"
        class="colored-card__title case_title_h4 m-10_bottom media-m-8_bottom"
        :class="cardColor.title"
      >
        {{ title }}
      </h3>

      <template v-if="Array.isArray(descriptions)">
        <LazyCaseStudiesUITextParagraph
          v-for="description in descriptions"
          :key="description"
          class="colored-card__description m-24_bottom media-m-16_bottom"
          :class="cardColor.descriptions"
        >
          {{ description }}
        </LazyCaseStudiesUITextParagraph>
      </template>
      <template v-else>
        <LazyCaseStudiesUITextParagraph
          v-if="descriptions"
          class="colored-card__description"
          :class="cardColor.descriptions"
        >
          {{ descriptions }}
        </LazyCaseStudiesUITextParagraph>
      </template>

      <slot />
    </div>
    <template v-if="cardImage.file && pictureRight">
      <div
        :class="`${pictureRight ? isMobile ?
          'colored-card__image-wrapper--right colored-card__image-wrapper--mobile'
          :
          'colored-card__image-wrapper--right'
          : 'colored-card__image-wrapper'}`"
      >
        <LazyCaseStudiesUIPicture
          v-if="!isMobile"
          class="colored-card__image"
          :class="`colored-card-image-${cardImage.file}`"
          :width="160"
          :height="302"
          :file="cardImage.file"
          :alt="cardImage.alt || 'Image'"
          :folder="cardImage.folder"
          :extension="cardImage.extension ? cardImage.extension : 'png'"
        />
        <LazyCaseStudiesUIPicture
          v-if="isMobile"
          class="colored-card__image"
          :class="`colored-card-image-${cardImage.file}`"
          :width="cardImage.mobileImage.width"
          :height="cardImage.mobileImage.height"
          :file="cardImage.mobileImage.file"
          :alt="cardImage.alt || 'Image'"
          :folder="cardImage.folder"
          :extension="cardImage.extension ? cardImage.extension : 'png'"
        />
      </div>
    </template>
  </div>
</template>
<style scoped lang="scss">
.colored-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;

  &__image-wrapper {
    max-height: 200px;
    overflow: hidden;
    &--right {
      min-width: 162px;
      min-height: 302px;
      overflow: hidden;
    }
    &--mobile {
      min-width: 130px;
      min-height: 140px;
      @media screen and (max-width: 396px) {
        margin-right: -15px;
      }
      @media screen and (max-width: 380px) {
        margin-right: -60px;
      }
    }
  }

  &__image .image {
    height: 100%;
    object-fit: cover;
  }

  &__footer {
    flex-grow: 1;
    padding: 25px;
    &--centered {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  &__pre-title{
    text-transform: uppercase;
    display: block;
  }
}

.row-flex {
  flex-direction: row;
}
</style>
