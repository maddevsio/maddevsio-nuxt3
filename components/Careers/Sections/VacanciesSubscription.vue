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
    <div class="vacancies-subscription__container container">
      <div class="vacancies-subscription__wrapper">
        <LazyWidgetsFormCareersSubscribeForm
          form-uid="careers-subscribe"
          :select-options="selectOptions"
          class="vacancies-subscription__form"
        />
        <div class="vacancies-subscription__image">
          <img
            loading="lazy"
            width="438"
            height="543"
            class="vacancies-subscription__photo"
            :src="$getMediaFromS3(`/images/CTABanner/katya-bludova.webp`)"
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

  &__container {
    * {
      box-sizing: border-box;
    }
  }

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background-color: $bgcolor--cultured;
    padding: 76px 80px;
    min-height: 582px;
  }

  &__form {
    max-width: 381px;
    width: 100%;
  }

  &__image {
    position: absolute;
    bottom: 0;
    right: 41px;
  }

  &__label {
    position: absolute;
    left: 0;
    bottom: 48px;

    &-name, &-position {
      font-size: 16px;
      display: block;
      width: max-content;
      padding: 5px 15px 3px 3px;
      background-color: $bgcolor--white-primary;
    }

    &-name {
      font-weight: 700;
    }
  }

  &__photo {
    display: block;
    height: auto;
    max-width: 100%
  }

  @media screen and (max-width: 1180px) {
    &__image {
      width: 350px;
      right: 10px;
    }
  }

  @media screen and (max-width: 1060px) {
    &__wrapper {
      flex-direction: column;
    }

    &__form {
      max-width: 100%;
    }

    &__image {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      bottom: -76px;
      right: 0;
    }
  }

  @media screen and (max-width: 600px) {
    &__wrapper {
      padding: 20px 24px;
    }

    &__form {
      margin-bottom: 17px;
    }

    &__image {
      bottom: -20px;
    }
  }

  @media screen and (max-width: 350px) {
    &__image {
      width: 230px;
    }
  }
}
</style>
