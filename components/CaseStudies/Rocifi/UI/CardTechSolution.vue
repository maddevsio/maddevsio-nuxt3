<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: null,
  },

  folder: {
    type: String,
    default: null,
  },

  title: {
    type: String,
    default: '',
  },

  titleTag: {
    type: String,
    default: 'h3',
  },

  description: {
    type: String,
    default: '',
  },

  alt: {
    type: String,
    default: '',
  },

  textColor: {
    type: String,
    default: 'black-primary',
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <LazyCaseStudiesUICard class="card-content background-color-silver">
    <img
      v-if="icon"
      loading="lazy"
      :src="$getMediaFromS3(`/images/Cases/${folder}/svg/${icon}.svg`)"
      :alt="alt || 'Icon'"
      width="51.94"
      height="51.94"
      class="card-content_icon"
    >
    <Component
      :is="titleTag"
      v-if="title"
      class="case_title_h4 m-10_bottom"
    >
      {{ title }}
    </Component>
    <LazyCaseStudiesUITextParagraph
      :class="`text-color-${textColor}`"
    >
      {{ description }}
    </LazyCaseStudiesUITextParagraph>
  </LazyCaseStudiesUICard>
</template>
<style scoped lang="scss">
.card-content {
  &_icon {
    width: 51.94px;
    height: 51.94px;
    display: block;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    &_icon {
      margin-bottom: 8px;
    }
  }
}
</style>
