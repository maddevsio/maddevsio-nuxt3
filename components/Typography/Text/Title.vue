<script setup lang="ts">
import type { TitleProps } from '~/components/Typography/interfaces/ITitle'
import { Title } from '~/components/Typography/classes/Title'

interface Props {
  slice: TitleProps
}

const { slice } = defineProps<Props>()
const {
  title,
  position,
  background,
  maxWidth,
  textSizesClassnames,
  headerTag,
  showAnchorLink,
  themeColorClass,
} = new Title(slice)

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
        <LazySharedUIAnchorTag
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
@import './styles/mainTitleStyles';

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
