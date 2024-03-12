<script setup lang="ts">
import type { TransformedVacancy } from '~/interfaces/common/commonInterfaces'

const vacancyCategories = inject('vacancyCategories') as {title: string; tags: string[]}[]
const vacancies = inject('vacancies') as TransformedVacancy[]

const activeCategory = ref('')
const filteredVacancies = ref(vacancies)

const filteredVacanciesCategories = computed(() => {
  return vacancyCategories.filter(category => category.tags.some(tag => vacancies.some(vacancy => vacancy.tags.includes(tag))))
})

watch(activeCategory, () => {
  if (activeCategory.value) {
    return vacancies.filter(() => {
      const currentCategory = vacancyCategories.find(category => category.title === activeCategory.value)
      if (currentCategory) {
        const currentTags = [...currentCategory.tags, currentCategory.title]
        filteredVacancies.value = vacancies.filter(vacancy => vacancy.tags.some(tag => currentTags.includes(tag)))
      }
      return null
    }).filter(Boolean)
  }
  filteredVacancies.value = vacancies
})

const handleChangeFilter = (category: string) => {
  activeCategory.value = category
}
</script>
<template>
  <div
    id="open-positions"
    class="open-positions"
  >
    <div class="container">
      <div
        class="open-positions__head"
      >
        <h2 class="open-positions__title">
          Open positions
        </h2>
        <LazyCareersUIPositionFilter
          :categories="filteredVacanciesCategories"
          :active-category="activeCategory"
          @change-category="handleChangeFilter"
        />
      </div>
      <LazyCareersUIPositionGrid
        :positions="filteredVacancies"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.open-positions {
  padding: 82px 0 88px;
  scroll-margin-top: 75px;
  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 48px;
    :deep(.positions-filter) {
      justify-content: center;
    }
  }
  &__title {
    @include font('Inter', 60px, 900);
    line-height: 64px;
    letter-spacing: -2.6px;
    margin-bottom: 38px;
  }

  @media screen and (max-width: 1024px) {
    padding: 57px 0 60px;
    &__head {
      align-items: flex-start;
      text-align: left;
      margin-bottom: 27px;
      :deep(.positions-filter) {
        justify-content: flex-start;
      }
    }
    &__title {
      margin-bottom: 24px;
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.04em;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 55px 0 60px;
    &__title {
      margin-bottom: 22px;
      font-size: 34px;
      letter-spacing: -0.04em;
    }
    &__head {
      margin-bottom: 24px;
    }
  }
}
</style>
