<script setup lang="ts">
import type { TeamCardCaseStudy } from '~/components/PageBlocks/TeamCards/interfaces/ITeamCardsCaseStudies'

interface Props {
  cards: TeamCardCaseStudy[]
}
defineProps<Props>()
</script>
<template>
  <ul class="simple-team-list">
    <LazyPageBlocksTeamCardsUIListItem
      v-for="member in cards"
      :key="member.name"
      v-bind="member"
    />
  </ul>
</template>
<style scoped lang="scss">
.simple-team-list {
  @include grid(repeat(3, 1fr), auto, 20px, 40px);

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
}
</style>
