<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  labels: {
    type: Object as PropType<{ remote: boolean; relocation: boolean }>,
    default: () => ({}),
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  tags: {
    type: Array,
    default: () => [],
  },
})

const scrollToElement = (selector: string) => {
  try {
    const targetEl = document.querySelector(selector) as HTMLElement
    if (targetEl) {
      if ('scrollBehavior' in document.documentElement.style) { return window.scrollTo({ top: targetEl.offsetTop, behavior: 'smooth' }) }
      return window.scrollTo(0, targetEl.offsetTop)
    }
    return null
  } catch {
    return null
  }
}

const subtitleText = computed(() => {
  if (!props.subtitle) { return '' }
  return replaceLineSeparatorToBr(props.subtitle)
})

const sendWriteUsClickEvent = () => {
  scrollToElement('#careers-position-form')
}
</script>
<template>
  <div class="careers-position__header">
    <div class="container">
      <div class="careers-position__container">
        <div
          v-if="labels.remote || labels.relocation"
          class="careers-position__labels"
        >
          <LazyCareersUIPositionLabels :labels="labels" />
        </div>
        <h1
          class="careers-position__title"
        >
          {{ title }}
        </h1>
        <p
          v-if="subtitleText && subtitleText.length"
          class="careers-position__subtitle"
          v-html="subtitleText"
        />
        <div
          v-if="tags && tags.length"
          class="careers-position__tags"
        >
          <LazyCareersUIPositionTags :tags="tags" />
        </div>
        <LazySharedUIButton
          type="button"
          class="careers-position__apply-button"
          @click="sendWriteUsClickEvent"
        >
          Apply now
        </LazySharedUIButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes moveArrow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
}

.careers-position {
  &__header {
    padding: 155px 0 95px;
    margin-bottom: 60px;
    background-color: $bgcolor--black;
    color: $text-color--white-primary;
    :deep(.ui-button) {
      width: 190px;
      height: 48px;
      font-weight: 400;
      border-radius: 6px;
      line-height: 27px;
      letter-spacing: -0.1px;
      margin-top: 47.5px;
      &::after {
        content: '↓';
        transform: translateY(0);
        display: inline-block;
        margin-left: 8px;
      }
      &:hover::after {
        animation: moveArrow 1s linear infinite;
      }
    }
  }
  &__labels {
    margin-bottom: 32px;
  }
  &__title {
    font-size: 68px;
    line-height: 74px;
    letter-spacing: -3.6px;
  }
  &__subtitle {
    margin-top: 24.5px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.013em;
  }
  &__tags {
    margin-top: 23px;
  }

  @media screen and (max-width: 1024px) {
    &__header {
      padding: 120px 0 60px;
    }
    &__title {
      font-size: 52px;
      line-height: 64px;
      letter-spacing: -3px;
    }
  }

  @media screen and (max-width: 576px) {
    &__title {
      font-size: 35px;
      line-height: 45px;
      letter-spacing: -1.4px;
    }

    &__subtitle {
      font-size: 17px;
      line-height: 24px;
    }
  }
}
</style>
