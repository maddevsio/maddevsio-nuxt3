<script setup lang="ts">
import type { TeamCardsCaseStudiesProps } from '~/components/PageBlocks/TeamCards/interfaces/ITeamCardsCaseStudies'
import { TeamCardsCaseStudies } from '~/components/PageBlocks/TeamCards/classes/TeamCardsCaseStudies'

interface Props {
  slice: TeamCardsCaseStudiesProps
}
const { slice } = defineProps<Props>()
const {
  containerSize,
  backgroundColor,
  teamList,
} = new TeamCardsCaseStudies(slice)
</script>
<template>
  <div :class="`team-cards-case-studies ${backgroundColor}`">
    <div
      class="container"
      :style="`max-width: ${containerSize}px`"
    >
      <LazyPageBlocksTeamCardsUIList
        v-if="teamList.cards.length"
        :cards="teamList.cards"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'assets/styles/colorClasses/colors';
</style>
