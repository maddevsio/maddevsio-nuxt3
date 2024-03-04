<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },

  descriptions: {
    type: [String, Array],
    default: '',
  },

  icon: {
    type: String,
    default: '',
  },

  folder: {
    type: String,
    default: '',
  },

  alt: {
    type: String,
    default: '',
  },

  width: {
    type: Number,
    default: 0,
  },

  height: {
    type: Number,
    default: 0,
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="card-content background-color-silver">
    <img
      v-if="icon"
      loading="lazy"
      :src="$getMediaFromS3(`/images/Cases/${folder}/svg/${icon}.svg`)"
      :alt="alt || 'Icon'"
      :width="width"
      :height="height"
      class="card-content_icon"
    >
    <h4
      v-if="title"
      class="case_title_h4 m-10-bottom parallax-title"
    >
      {{ title }}
    </h4>
    <template
      v-if="Array.isArray(descriptions)"
    >
      <LazyCaseStudiesUITextParagraph
        v-for="(description, i) in descriptions"
        :key="description"
        :class="i === descriptions.length ? '' : 'm-24_bottom media-m-12_bottom'"
      >
        {{ description }}
      </LazyCaseStudiesUITextParagraph>
    </template>
    <template
      v-else
    >
      <LazyCaseStudiesUITextParagraph>
        {{ descriptions }}
      </LazyCaseStudiesUITextParagraph>
    </template>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.card-content {
  position: relative;
  overflow: hidden;
  width: auto;
  height: auto;
  padding: 32px;
  border-radius: 8px;
  &_title {
    margin-bottom: 10px;
  }

  &_icon {
    width: 51.94px;
    height: 51.94px;
    display: block;
    margin-bottom: 13px;
  }

  @media screen and (max-width: 768px) {
    &_title,
    &_icon {
      margin-bottom: 8px;
    }
  }
}
</style>
