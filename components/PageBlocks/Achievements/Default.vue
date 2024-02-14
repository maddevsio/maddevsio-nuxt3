<script setup lang="ts">
import type { AchievementCardsProps } from '~/components/PageBlocks/Achievements/interfaces/IAchievements'
import { AchievementCards } from '~/components/PageBlocks/Achievements/classes/AchievementCards'

interface Props {
  slice: AchievementCardsProps
}

const { slice } = defineProps<Props>()
const {
  achievements,
} = new AchievementCards(slice)
</script>
<template>
  <section class="achievements">
    <div class="achievements-container container">
      <LazyPageBlocksAchievementsUICard
        v-for="(achievement, index) in achievements"
        :key="index"
        :image="achievement.image"
        :height="Number(achievement.height)"
        :width="Number(achievement.width)"
        :description="achievement.description"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.achievements {
  width: 100%;
  background-color: $bgcolor--white-primary;
}

.achievements-container {
  display: flex;
  justify-content: center;
  gap: 61px;

  @media screen and (max-width: 1200px) {
    gap: 30px;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
