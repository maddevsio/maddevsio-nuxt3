<script setup lang="ts">
import type { PropType } from 'vue'
import type { ICaseListItem } from '~/components/CaseList/interfaces/iCaseList'

const { caseStudiesList } = defineProps({
  caseStudiesList: {
    type: Array as PropType<ICaseListItem[]>,
    default: () => [],
  },
})

const isThreeSmallCards = ref(false)

if (caseStudiesList.length === 3) {
  isThreeSmallCards.value = true
}
</script>
<template>
  <div class="case-studies">
    <div
      class="case-studies__list"
      :class="{ 'case-studies__list--three-small': isThreeSmallCards }"
    >
      <SharedCaseStudiesItem
        v-for="(caseItem, caseIndex) in caseStudiesList"
        :id="caseItem.id"
        :key="`${caseItem.id}-${caseIndex}`"
        :title="caseItem.title"
        :description="caseItem.description"
        :link="caseItem.link"
        :logo="caseItem.logo"
        :card-width-type="caseItem.width"
        :case-type="caseItem.subtitle"
        :video-link="caseItem.video"
        :video-poster-link="caseItem.poster"
        :three-small-cards="isThreeSmallCards"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.case-studies {
  &__list {
    @include grid(repeat(4, 1fr), auto, 20px, 24px);
    grid-auto-flow: dense;

    &--three-small {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1140px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
