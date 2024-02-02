<script setup lang="ts">
import type { PropType } from 'vue'
import type { CaseListProps } from '~/components/CaseList/interfaces/iCaseList'
import { CaseList } from '~/components/CaseList/classes/CaseList'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<CaseListProps>,
    default: () => ({}),
  },
})

const caseList = new CaseList(slice)
</script>
<template>
  <section
    class="case-list"
    :style="{ backgroundColor: caseList.background, margin: '-1px 0' }"
  >
    <div
      class="container"
    >
      <LazySharedCaseStudiesList
        :case-studies-list="caseList.repeatable"
      />
    </div>
  </section>
</template>
