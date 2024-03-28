<script setup lang="ts">
import type { PropType } from 'vue'

interface EventCard {
  icon: {
    name: string
    sizes: {
      width: number
      height: number
    }
  }
  title: string
  description: string
}

defineProps({
  eventCardData: {
    type: Object as PropType<EventCard>,
    default: () => ({}),
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    class="our-principles__events-item"
  >
    <img
      loading="lazy"
      :src="$getMediaFromS3(`images/OurPhilosophy/svg/${eventCardData.icon.name}.svg`)"
      :alt="eventCardData.icon.name"
      :width="eventCardData.icon.sizes.width"
      :height="eventCardData.icon.sizes.height"
      class="our-principles__events-item-icon"
    >
    <h4
      class="our-principles__events-item-title"
    >
      {{ eventCardData.title }}
    </h4>
    <p
      class="our-principles__events-item-description"
    >
      {{ eventCardData.description }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.our-principles__events-item {
  flex: 1 1 48%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  background: $bgcolor--cultured;
  border-radius: 4px;

  &-icon {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  &-title {
    @include font('Poppins', 18px, 700);
    line-height: 130%;
    color: $text-color--chinese-black;
    max-width: 170px;
    margin-bottom: 8px;
  }

  &-description {
    @include font('Inter', 14px, 400);
    line-height: 150%;
    color: $text-color--chinese-black;
    max-width: 380px;
  }
}
</style>
