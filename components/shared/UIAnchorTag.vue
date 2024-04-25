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
    <SharedUIAnchorCopyLink
      :text="text"
    />
  </div>
</template>
<style scoped lang="scss">
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
