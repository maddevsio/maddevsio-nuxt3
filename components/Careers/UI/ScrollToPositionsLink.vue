<script setup lang="ts">
import type { TransformedVacancy } from '~/interfaces/common/commonInterfaces'

const vacancies = inject('vacancies') as TransformedVacancy[]
const vacanciesCount = ref(vacancies.length || 0)

const show = ref(true)
const positionsSectionEl = ref<HTMLElement | null>(null)

const handleButtonVisibility = () => {
  if (positionsSectionEl.value) {
    const sectionRect = positionsSectionEl.value.getBoundingClientRect()
    const offsetTop = sectionRect.top - window.innerHeight
    show.value = offsetTop > 0
  }
}

onMounted(() => {
  positionsSectionEl.value = document.getElementById('open-positions')
  handleButtonVisibility()
  window.addEventListener('scroll', handleButtonVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleButtonVisibility)
})
</script>
<template>
  <NuxtLink
    to="#open-positions"
    :class="[(show && vacanciesCount) ? null : 'scroll-to-positions--hidden']"
    class="scroll-to-positions"
  >
    <LazyCareersUIUnderlinedButton>
      See all {{ vacanciesCount }} open positions
    </LazyCareersUIUnderlinedButton>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.scroll-to-positions {
  cursor: pointer;
  border: 0 solid;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: $bgcolor--black;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  z-index: 9;
  transition: all 0.2s;
  &--hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
