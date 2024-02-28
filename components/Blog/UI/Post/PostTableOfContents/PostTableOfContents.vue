<script setup lang="ts">
import type { PropType } from 'vue'
import Simplebar from 'simplebar-vue'
import type { IPostTableOfContents } from '~/components/Blog/interfaces/Post/IPostTableOfContents'
import 'simplebar-vue/dist/simplebar.min.css';

const props = defineProps({
  postTableOfContentsInstance: {
    type: Object as PropType<IPostTableOfContents>,
    default: () => ({}),
  },
})

const {
  getSimpleBarScrollElement,
  showContent,
  anchors,
  isVisibleContent,
  anchorsRef,
  servicePost,
  textColorClass,
  intersectionHandler,
} = props.postTableOfContentsInstance

const { activeTitle } = storeToRefs(useTableOfContentStore())

watch(activeTitle, newVal => {
  intersectionHandler(newVal)
})

onMounted(() => {
  getSimpleBarScrollElement()
})
</script>
<template>
  <div
    class="table-of-contents"
    @mouseenter="showContent"
    @mouseleave="showContent"
  >
    <div
      :class="[{'table-of-contents__title--with-form': servicePost}, textColorClass]"
      class="table-of-contents__title"
    >
      Contents:
      <svg
        v-if="servicePost"
        fill="none"
        height="18"
        viewBox="0 0 19 18"
        width="19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-3.93402e-07 9C-1.76146e-07 13.9702 4.25323 18 9.5 18C14.7468 18 19 13.9702 19 9C19 4.02937 14.7468 -6.44602e-07 9.5 -4.15258e-07C4.25323 -1.85915e-07 -6.10675e-07 4.02937 -3.93402e-07 9ZM9.89583 4.587L9.89583 12.4755L12.5689 9.81787C12.7197 9.66825 12.9703 9.66225 13.1286 9.80512C13.2101 9.879 13.2513 9.97762 13.2513 10.077C13.2513 10.1696 13.2149 10.263 13.1421 10.3354L9.78658 13.6714C9.78421 13.6736 9.78183 13.6759 9.77985 13.6777C9.7755 13.6819 9.77075 13.686 9.766 13.6901C9.7181 13.7314 9.65952 13.7617 9.5946 13.7767C9.58312 13.7794 9.57165 13.7816 9.56017 13.7831C9.54077 13.7861 9.52058 13.7876 9.5 13.7876C9.47942 13.7876 9.45923 13.7861 9.43983 13.7831C9.42796 13.7816 9.41648 13.7794 9.4054 13.7767C9.34048 13.7617 9.2819 13.7314 9.234 13.6901C9.22925 13.686 9.2245 13.6819 9.22015 13.6777C9.21777 13.6759 9.21579 13.6736 9.21342 13.6714L5.85794 10.3354C5.70712 10.1854 5.71306 9.948 5.8714 9.80512C6.02973 9.66225 6.28029 9.66825 6.4311 9.81787L9.10417 12.4755L9.10417 4.587C9.10417 4.38 9.2815 4.212 9.5 4.212C9.7185 4.212 9.89583 4.38 9.89583 4.587Z"
          fill="#F7C744"
        />
      </svg>
    </div>
    <Simplebar
      v-if="anchors && anchors.length"
      ref="anchorsRef"
      :class="`table-of-contents__links--${!isVisibleContent ? 'hide' : 'show'}`"
      class="table-of-contents__links"
    >
      <LazyBlogUIPostPostTableOfContentsItem
        v-for="(anchor) in anchors"
        :key="`${anchor.label}-${anchor.index}`"
        :post-table-of-contents-item-instance="anchor"
      />
    </Simplebar>
  </div>
</template>
<style lang="scss" scoped>
.table-of-contents {
  width: 200px;
  max-width: 200px;

  &__title {
    line-height: 130%;
    margin-bottom: 18px;
    font-weight: bold;

    &--with-form {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }
  }

  &__links {
    width: 100%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    padding-right: 12px;

    &--hide {
      display: none;
    }

    &--show {
      display: flex;
    }
  }

  .text-color {
    &--black {
      color: $text-color--black-oil;
    }

    &--white {
      color: $text-color--white-primary;
    }
  }
}
</style>
