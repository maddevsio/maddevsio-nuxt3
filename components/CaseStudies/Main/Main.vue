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

const { allTagNames } = useDynamicTagCloudStore()
const { tagChangedFromQuery, tagChangedHandler } = useTagChanged('caseStudiesPage', 'caseStudies', allTagNames.caseStudies, 'Case studies')
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
