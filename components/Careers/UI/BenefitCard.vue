<script setup lang="ts">
import type { PropType } from 'vue'

interface Icon {
  name: string
  alt: string
  width: string
  height: string
}

defineProps({
  icon: {
    type: Object as PropType<Icon>,
    default: () => {},
  },

  title: {
    type: String,
    default: '',
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="benefit-card">
    <div class="benefit-card__icon-wrapper">
      <img
        loading="lazy"
        :src="$getMediaFromS3(`/images/Careers/svg/${icon.name}.svg`)"
        :width="icon.width"
        :height="icon.height"
        :alt="icon.alt || 'Image'"
        class="benefit-card__icon"
      >
    </div>
    <p
      class="benefit-card__title"
      v-html="title"
    />
  </div>
</template>
<style lang="scss" scoped>
.benefit-card {
  padding: 16px;
  background-color: $bgcolor--silver;
  border-radius: 4px;
  &__icon {
    display: block;
    &-wrapper {
      height: 45px;
    }
  }
  &__title {
    line-height: 22px;
    letter-spacing: -0.013em;
    color: $text-color--black-oil;
  }
}
</style>
