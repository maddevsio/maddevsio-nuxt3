<script setup lang="ts">
import type { PropType } from 'vue'
import type { ICuNavigationButtons } from '~/components/Blog/interfaces/Post/ICuNavigationButtons'

const props = defineProps({
  cuNavigationButtonsInstance: {
    type: Object as PropType<ICuNavigationButtons>,
    default: () => ({}),
  },
})

const {
  prevArticleUrl,
  nextArticleUrl,
} = props.cuNavigationButtonsInstance
</script>
<template>
  <div class="cu-navigation__buttons-wrapper">
    <div class="cu-navigation__buttons">
      <NuxtLink
        :to="prevArticleUrl"
        :class="prevArticleUrl === '#' ? 'disabled' : ''"
        class="cu-navigation__link"
      >
        <span class="arrow prev" />
        Previous
      </NuxtLink>
      <span class="cu-navigation__divider" />
      <NuxtLink
        :to="nextArticleUrl"
        :class="nextArticleUrl === '#' ? 'disabled' : ''"
        class="cu-navigation__link"
      >
        Next
        <span class="arrow next" />
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cu-navigation {
  &__buttons {
    text-align: right;
    &-wrapper {
      width: 41%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }

  &__link {
    @include font('Inter', 16px, 400);
    color: $bgcolor--silver;
    text-decoration: none;
    display: inline-block;
    line-height: 166%;

    &:not(.disabled):hover {
      color: $text-color--red;

      .arrow {
        @include arrow-icon-red;
      }
    }

    .arrow {
      @include arrow-icon;
      display: inline-block;
      width: 12px;
      height: 11px;

      &.prev {
        margin-right: 10px;
      }

      &.next {
        margin-left: 10px;
        transform: rotate(180deg);
      }
    }

    &.disabled {
      opacity: 0.2;
      cursor: default;
      pointer-events: none;
    }
  }

  &__divider {
    display: inline-block;
    height: 27px;
    width: 1px;
    background-color: $bgcolor--grey-pale;
    vertical-align: middle;
    margin: 0 40px;
  }

  @media screen and (max-width: 768px) {
    &__buttons {
      display: flex;
      justify-content: space-between;

      &-wrapper {
        padding: 0;
      }
    }

    &__divider {
      display: none;
    }
  }
}
</style>
