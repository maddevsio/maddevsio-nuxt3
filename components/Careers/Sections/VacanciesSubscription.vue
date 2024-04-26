<script setup lang="ts">
const vacancyCategories = inject('vacancyCategories') as {title: string; tags: string[]}[]
const selectOptions = computed(() => vacancyCategories.map(vacancy => ({
  label: vacancy.title,
  uid: '',
})))
</script>

<template>
  <div class="vacancies-subscription">
    <div class="container">
      <div class="vacancies-subscription__wrapper">
        <LazyWidgetsFormCareersSubscribeForm form-uid="careers-subscribe" :select-options="selectOptions" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vacancies-subscription {
  padding: 8px 0 96px;

  &__wrapper {
    padding: 70px 110px;
    border: 1px solid $border-color--grey-20-percent;
    border-radius: 10px;
  }

}
</style>
