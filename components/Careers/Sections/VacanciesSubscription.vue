<script setup lang="ts">
const vacancyCategories = inject('vacancyCategories') as {title: string; tags: string[]}[]
const selectOptions = computed(() => vacancyCategories.map(vacancy => ({
  label: vacancy.title,
  uid: '',
})))

const { $getMediaFromS3 } = useMediaFromS3()
</script>

<template>
  <div class="vacancies-subscription">
    <div class="container">
      <div class="vacancies-subscription__wrapper">
        <LazyWidgetsFormCareersSubscribeForm
          form-uid="careers-subscribe"
          :select-options="selectOptions"
          class="vacancies-subscription__form"
        />
        <div class="vacancies-subscription__image">
          <img
            loading="lazy"
            width="500"
            height="500"
            class="vacancies-subscription__photo"
            :src="$getMediaFromS3(`/images/CTABanner/ekaterina-bludova2x.webp`)"
            alt="Ekaterina Bludova"
          >
          <div class="vacancies-subscription__label">
            <span class="vacancies-subscription__label-name">Ekaterina Bludova</span>
            <span class="vacancies-subscription__label-position">Recruitment Team Leader</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vacancies-subscription {
  padding: 8px 0 200px;

  &__wrapper {
    display: flex;
  }

  &__form {
    max-width: 381px;
    width: 100%;
  }

  &__photo {
    display: block;
    height: auto;
    max-width: 100%
  }

  @media screen and (max-width: 768px) {
    &__wrapper {
      padding: 30px 20px;
    }
  }
}
</style>
