<script setup lang="ts">
import type { PropType } from 'vue'

const { tag, text } = defineProps({
  tag: {
    type: String,
    default: 'h2',
  },
  size: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  text: {
    type: String,
    default: '',
  },
  maxWidth: {
    type: String,
    default: '',
  },
  withTitle: {
    type: Boolean,
    default: true,
  },
})
const VNodeTitle = () => h(tag, { innerHTML: text })
</script>
<template>
  <div
    :id="createAnchorID(text)"
    :style="`max-width: ${maxWidth}`"
    class="anchor_title"
  >
    <VNodeTitle
      v-if="withTitle"
      :class="`anchor_title-h title-text ${size.join(' ')}`"
    />
    <LazySharedUIAnchorCopyLink
      :text="text"
    />
  </div>
</template>
<style scoped lang="scss">
@import '../Typography/Text/styles/mainTitleStyles';

.anchor_title {
  position: relative;

  &:hover {
    .anchor_copy-link button {
      display: block;
    }
  }
}

.anchor_title-h {
  display: inline-block;
}
</style>
