<script setup lang="ts">
const props = defineProps({
  titleTag: {
    type: String,
    default: 'h2',
  },

  withSubtitle: {
    type: Boolean,
    default: false,
  },

  maxWidthTitle: {
    type: String,
    default: '100%',
  },

  maxWidthSubtitle: {
    type: String,
    default: '100%',
  },
})

const cssVars = computed(() => ({
  '--max-width': props.maxWidthTitle,
  '--max-width-subtitle': props.maxWidthSubtitle,
  '--title-margin': props.withSubtitle ? '26px' : '48px',
  '--title-margin-adaptive': props.withSubtitle ? '20px' : '32px',
}))
</script>
<template>
  <div
    class="transparency-text-wrapper"
    :style="cssVars"
  >
    <Component
      :is="titleTag"
      class="transparency-text-wrapper__title"
    >
      <slot name="title" />
    </Component>
    <p
      v-if="withSubtitle"
      class="transparency-text-wrapper__subtitle"
    >
      <slot name="subtitle" />
    </p>
  </div>
</template>
<style scoped lang="scss">
.transparency-text-wrapper {
  &__title {
    @include font('Inter', 60px, 700);
    line-height: 105%;
    color: $text-color--chinese-black;
    margin-bottom: var(--title-margin);
    max-width: var(--max-width);
  }

  &__subtitle {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -1px;
    color: #868889;
    max-width: var(--max-width-subtitle);

    :deep(a) {
      color: $text-color--red;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 1440px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    &__title {
      font-size: 48px;
    }
  }

  @media screen and (max-width: 1026px) {
    &__title {
      font-size: 31px;
      margin-bottom: var(--title-margin-adaptive);
    }

    &__subtitle {
      font-size: 16px;
      line-height: 130%;
    }
  }
}
</style>
