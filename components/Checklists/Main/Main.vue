<script setup lang="ts">
import type { PropType } from 'vue'
import type { TransformedChecklist } from '~/interfaces/common/commonInterfaces'

defineProps({
  tags: {
    type: Array,
    default: () => [],
  },

  pageContent: {
    type: Object as PropType<TransformedChecklist>,
    default: () => ({}),
  },

  checkListData: {
    type: Object,
    default: () => ({}),
  },
})

const { tagChangedFromQuery, tagChangedHandler, activeTag } = useTagChanged('checklistPage', 'checklists')
</script>
<template>
  <section class="checklist-main-page">
    <LazySharedHeadStartScreen
      :title="pageContent.title"
      :description="pageContent.description"
      :image="pageContent.image"
    >
      <LazySharedDynamicTagCloud
        :tags="tags"
        @changed="tagChangedHandler"
        @change-tag-from-query-params="tagChangedFromQuery"
      />
    </LazySharedHeadStartScreen>
    <div class="container">
      <h2
        class="checklist-main-page__title"
      >
        {{ activeTag.checklists === 'Checklist' || !activeTag.checklists ? 'All Checklists' : `${activeTag.checklists} Checklists` }}
      </h2>
    </div>
    <LazyChecklistsMainUIChecklistCards
      :checklist-data="checkListData"
    />
  </section>
</template>
<style scoped lang="scss">
.checklist-main-page {
  padding-bottom: 128px;

  @media screen and (max-width: 1440px) {
    padding-bottom: 96px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 72px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 48px;
  }

  :deep(.head-start-screen__background-image) {
    filter: brightness(0.5);
  }

  &__title {
    @include font('Inter', 60px, 700);
    line-height: 125%;
    color: $text-color--white-primary;
    margin-bottom: 79.24px;

    @media screen and (max-width: 1440px) {
      margin-bottom: 48px;
    }

    @media screen and (max-width: 1026px) {
      font-size: 31px;
      line-height: 190%;
      margin-bottom: 32px;
    }

    @media screen and (max-width: 600px) {
      line-height: 117%;
      margin-bottom: 24px;
    }
  }
}
</style>
