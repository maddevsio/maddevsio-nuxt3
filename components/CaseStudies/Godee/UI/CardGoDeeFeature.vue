<script setup lang="ts">
defineProps({
  iconName: {
    type: String,
    default: null,
  },

  title: {
    type: String,
    default: '',
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="card-content">
    <img
      v-if="iconName"
      loading="lazy"
      :src="$getMediaFromS3(`images/core/Studies/svg/${iconName}.svg`)"
      :alt="iconName || 'Icon'"
      width="51.94"
      height="51.94"
      class="card-content_icon"
    >
    <h4 class="case_title_h4 card-content_title">
      {{ title }}
    </h4>
    <slot />
  </div>
</template>
<style scoped lang="scss">
.card-content {
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
