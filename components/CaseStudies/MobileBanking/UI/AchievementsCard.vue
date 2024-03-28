<script setup lang="ts">
import type { PropType } from 'vue'

interface Achievement {
  icon: {
    url: string
    alt: string
    dimensions: {
      width: number
      height: number
    }
  }
  title: string
  description: string
}

defineProps({
  achievement: {
    type: Object as PropType<Achievement>,
    default: () => ({}),
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    class="achievement-card"
  >
    <img
      loading="lazy"
      :src="$getMediaFromS3(achievement.icon.url)"
      :width="achievement.icon.dimensions.width"
      :height="achievement.icon.dimensions.height"
      :alt="achievement.icon.alt"
      class="achievement-card__icon"
    >
    <hr class="achievement-card__divider">
    <p class="achievement-card__title">
      {{ achievement.title }}
    </p>
    <p class="achievement-card__description">
      {{ achievement.description }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.achievement-card {
  box-sizing: border-box;
  width: 33.3333%;
  background-color: #697CFE;
  border-radius: 10px;
  padding: 18px 24px;
  display: flex;
  gap: 18px;
  flex-direction: column;
  align-items: center;

  &__divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    margin: 0;
  }

  &__title {
    @include font('Poppins', 40px, 700);
    line-height: 130%;
    letter-spacing: -0.02em;
    color: $text-color--white-primary;
  }

  &__description {
    @include font('Inter', 16px, 400);
    line-height: 135%;
    text-align: center;
    letter-spacing: -0.035em;
    color: $text-color--white-primary;
    margin-top: auto;
  }
  @media screen and (max-width: 785px) {
    width: 100%;
  }
}
</style>
