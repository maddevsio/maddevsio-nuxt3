<script setup lang="ts">
interface Props {
  slice: {
    primary: {
      title: string
      showAnchorLink: boolean
      maxWidth: string
      position: string
      tag: string
      colorTheme: string
      'size-xl': string
      'size-lg': string
      'size-md': string
      'size-sm': string
      'size-xs': string
    }
  }
}

const { slice } = defineProps<Props>()

const title = slice.primary.title || ''
const showAnchorLink = slice.primary.showAnchorLink || false
const maxWidth = slice.primary.maxWidth || '1240px'
const position = slice.primary.position || 'left'
const headerTag = slice.primary.tag || 'h2'
const background = setSliceBackground(slice.primary.colorTheme || 'black')
const themeColorClass = getThemeColorClass('title-wrapper', slice.primary.colorTheme || 'black')
const textSizesClassnames = getTextClassNames(getTextSizes(slice.primary), 'title')

const VNodeTitle = () => h(headerTag, { innerHTML: title })
</script>
<template>
  <section
    :class="themeColorClass"
    :style="{ backgroundColor: background }"
  >
    <section
      class="title container"
      :class="[`title-text--${position}`]"
    >
      <div
        v-if="showAnchorLink"
        class="title-text-wrapper"
      >
        <SharedUIAnchorTag
          :tag="headerTag"
          :text="title"
          :size="textSizesClassnames"
          :max-width="maxWidth"
        />
      </div>
      <VNodeTitle
        v-else
        :style="`max-width: ${maxWidth}`"
        :class="[`title-text`, ...textSizesClassnames]"
      />
    </section>
  </section>
</template>
<style lang="scss" scoped>
.title {
  position: relative;

  &-text {
    width: 100%;
    display: block;
    color: inherit;
    letter-spacing: -0.013em;

    // Positions
    &--left {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      > * {
        text-align: left;
      }
    }

    &--center {
      display: flex;
      align-items: flex-start;
      justify-content: center;

      > * {
        text-align: center;
      }
    }

    &--right {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;

      > * {
        text-align: right;
      }
    }
  }

  // Sizes
  &--text-size-xl {
    @include font-sizes-title();
  }

  &--text-size-lg {
    @media screen and (max-width: 1440px) {
      @include font-sizes-title();
    }
  }

  &--text-size-md {
    @media screen and (max-width: 1200px) {
      @include font-sizes-title();
    }
  }

  &--text-size-sm {
    @media screen and (max-width: 1024px) {
      @include font-sizes-title();
    }
  }

  &--text-size-xs {
    @media screen and (max-width: 768px) {
      @include font-sizes-title();
    }
  }
}

.title-wrapper {
  &--white-theme {
    color: $text-color--black-lighter;
  }

  &--black-theme {
    color: $text-color--white;
  }
}

.title-text-wrapper {
  display: inline-block;
}
</style>
