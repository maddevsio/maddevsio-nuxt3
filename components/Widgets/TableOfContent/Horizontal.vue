<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { PropType } from 'vue'
import { HorizontalToC } from '~/components/Widgets/TableOfContent/classes/HorizontalToC'
import type { HorizontalToCProps } from '~/components/Widgets/TableOfContent/interfaces/IHorizontalToC'

const props = defineProps({
  slice: {
    type: Object as PropType<HorizontalToCProps>,
    default: () => ({}),
  },
})

const horizontalToCStore = useHorizontalToCStore()
const { activeAnchor } = storeToRefs(horizontalToCStore)
const horizontalToC = new HorizontalToC({ items: props.slice.items, activeAnchor })
const { isMobile } = useHorizontalToC(horizontalToC)
const {
  anchors,
  horizontalTocRef,
  isIntersection,
  stickyTopFromHeader, // eslint-disable
} = horizontalToC
</script>
<template>
  <section
    v-if="!isMobile"
    id="horizontal-toc"
    ref="horizontalTocRef"
    class="horizontal-toc"
    :class="{ 'horizontal-toc--sticky': isIntersection}"
  >
    <div class="container">
      <nav
        class="horizontal-toc__nav"
      >
        <ul class="horizontal-toc__nav-list">
          <li
            v-for="(anchor, anchorIndex) in anchors"
            :key="`${anchor.sectionId}-${anchorIndex}`"
            class="horizontal-toc__nav-list-item"
          >
            <NuxtLink
              :to="`#${anchor.sectionId}`"
              class="horizontal-toc__nav-list-link"
              :class="{
                'horizontal-toc__nav-list-link--active': anchor.sectionId.toLowerCase() === activeAnchor,
                'horizontal-toc__nav-list-link--active-sticky': anchor.sectionId.toLowerCase() === activeAnchor && isIntersection,
              }"
            >
              {{ anchor.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>
<style scoped lang="scss">
.horizontal-toc {
  position: sticky;
  top: v-bind('stickyTopFromHeader');
  left: 0;
  z-index: 5;
  padding: 8px 0;
  box-sizing: border-box;
  background: $bgcolor--black;
  transition: 0.3s ease-in-out;

  &--sticky {
    background: rgba(29, 29, 31, 0.9);
    backdrop-filter: blur(5px);
  }

  &__nav-list {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;

    * {
      box-sizing: border-box;
    }

    &-link {
      @include font('Inter', 14px, 300);
      line-height: 166%;
      letter-spacing: -0.1px;
      color: $text-color--white-primary;
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 4px 8px;
      transition: border-color 0.3s ease-in-out;

      &--active {
        font-weight: 500;

        &-sticky {
          border-color: #969696;
        }
      }
    }

    @media screen and (max-width: 850px) {
      gap: 26px;
    }
  }

  @media screen and (max-width: 1279px) {
    display: none;
    visibility: hidden;
  }
}
</style>
