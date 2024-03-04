<script setup lang="ts">
import type { PropType } from 'vue'
import type { TransformedCaseStudy } from '~/interfaces/common/commonInterfaces'

defineProps({
  tags: {
    type: Array,
    default: () => [],
  },

  pageContent: {
    type: Object as PropType<TransformedCaseStudy>,
    default: () => ({}),
  },

  casesData: {
    type: Object,
    default: () => ({}),
  },
})

const { tagChangedFromQuery, tagChangedHandler } = useTagChanged('caseStudiesPage', 'caseStudies')
</script>
<template>
  <div class="case-studies-main">
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
    <LazyCaseStudiesMainUICaseCards
      :cases-data="casesData"
    />
  </div>
</template>
