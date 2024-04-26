<script setup lang="ts">

</script>

<template>
  <div class="vacancies-subscription">
    <div class="container">
      <div class="vacancies-subscription__wrapper">
        <LazyWidgetsFormCareersSubscribeForm form-uid="careers-subscribe" />
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
