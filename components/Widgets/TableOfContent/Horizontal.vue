<script setup lang="ts">
import type { PropType } from 'vue'

interface HorizontalToCProps {
  items: {
    sectionId: string
    label: string
  }[]
}

const props = defineProps({
  slice: {
    type: Object as PropType<HorizontalToCProps>,
    default: () => ({}),
  },
})

const horizontalToCStore = useHorizontalToCStore()
const { activeAnchor } = storeToRefs(horizontalToCStore)
// const { headerHeight } = storeToRefs(useHeaderStore())
const horizontalTocRef = ref<HTMLElement | null>(null)
const isIntersection = ref(false)
const anchors = props.slice.items
const stickyTopFromHeader = computed(() => ({
  '--stickyTop': '63px', // TODO: return headerHeight when article to be added
}))
const triggerBreakpoint = 768
const { isMobile } = useCheckMobile(triggerBreakpoint)

const getDistanceFromHeader = () => {
  const header = document.getElementById('header')
  if (header) {
    const headerDistanceScrollTop = document.getElementById('header')?.getBoundingClientRect().top
    if (headerDistanceScrollTop !== undefined && horizontalTocRef.value) {
      const tocDistanceScrollTop = horizontalTocRef.value.getBoundingClientRect().top
      const distance = tocDistanceScrollTop - headerDistanceScrollTop
      isIntersection.value = distance < 130
    }
  }
}

onMounted(() => {
  if (!isMobile.value) {
    window.addEventListener('scroll', getDistanceFromHeader)
  }
})

onUnmounted(() => {
  if (!isMobile.value && horizontalTocRef.value) {
    window.removeEventListener('scroll', getDistanceFromHeader)
  }
})
</script>
<template>
  <section
    v-if="!isMobile"
    id="horizontal-toc"
    ref="horizontalTocRef"
    class="horizontal-toc"
    :class="{ 'horizontal-toc--sticky': isIntersection}"
    :style="stickyTopFromHeader"
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
  top: var(--stickyTop);
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
