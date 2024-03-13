<script setup lang="ts">
import { CareersService } from '~/components/Careers/classes/CareersService'
import { employeesBenefits } from '~/components/Careers/constants/careersConstants'
import { buildHead } from '~/SEO/buildMetaTags'

const prismic = usePrismic()
const config = useRuntimeConfig()
const route = useRoute()
const careersService = new CareersService(prismic, config.public.domain)
const openGraphUrl = `${ config.public.domain }/careers/${ route.params.uid }/`
const { updateHeaderPlateData } = useHeaderPlateStore()
const cookiePlate = useCookie(`seenArticlePlate_${ route.path }`)

const { data: vacancyData, error } = await useAsyncData('vacancyData', async () => {
  try {
    const response = await careersService.getVacancy(route.params.uid as string)
    const vacancy = careersService.extractVacancyData(response)

    if (!vacancy.released && config.public.ffEnvironment === 'production') {
      navigateTo('/careers/', {
        redirectCode: 303,
      })
    }

    if (!cookiePlate.value) {
      updateHeaderPlateData(vacancy.headerPlate)
    }

    return vacancy
  } catch {
    navigateTo('/careers/', {
      redirectCode: 303,
    })
  }
})

if (error.value) {
  navigateTo('/careers/', {
    redirectCode: 303,
  })
}

useClearStoresBeforeRouteLeave()

// @ts-ignore
useHead(buildHead({
  title: vacancyData.value?.metaTitle || vacancyData.value?.title || '',
  metaTitle: vacancyData.value?.metaTitle || vacancyData.value?.title || '',
  description: vacancyData.value?.metaDescription || vacancyData.value?.subtitle || '',
  jsonLd: vacancyData.value?.schemaOrgSnippet || '',
  url: openGraphUrl,
}))
</script>
<template>
  <section
    id="careers-position"
    class="careers-position"
  >
    <LazyCareersUIPositionHeader
      v-if="vacancyData"
      :labels="vacancyData.labels"
      :tags="vacancyData.tags"
      :title="vacancyData.title"
      :subtitle="vacancyData.subtitle"
    />
    <div class="container">
      <div class="careers-position__container">
        <div class="careers-position__info">
          <LazyCareersSlicesComponents
            v-if="vacancyData && vacancyData.slices.length"
            :slices="vacancyData.slices"
          />
          <div class="careers-position__benefits">
            <h2
              class="careers-position__benefits-title"
            >
              Employees benefits
            </h2>
            <div
              class="careers-position__benefits-grid"
            >
              <LazyCareersUIBenefitCard
                v-for="benefit in employeesBenefits"
                v-bind="benefit"
                :key="benefit.title"
              />
            </div>
          </div>
        </div>
        <div
          id="careers-position-form"
          class="careers-position__contacts"
        >
          <LazyCareersUIPositionHRContactCard />
          <div
            class="careers-position__form"
          >
            <LazyWidgetsFormCareers
              v-if="vacancyData"
              :form-uid="vacancyData.position"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.careers-position {
  padding-bottom: 79px;
  background-color: $bgcolor--white-primary;
  color: $text-color--black-oil;
  :deep(.careers-position__container) {
    max-width: 924px;
  }
  &__benefits {
    margin-top: 62px;
    &-title {
      @include font('Poppins', 32px, 600);
      line-height: 43px;
      letter-spacing: -0.04em;
      margin-bottom: 25px;
    }
    &-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 8px 10px;
    }
  }
  &__contacts {
    margin-top: 60px;
    padding-top: 79px;
    border-top: 1px solid $border-color--grey-20-percent;
  }
  &__form {
    margin-top: 45px;
  }

  @media screen and (max-width: 1024px) {
    :deep(.careers-position__container) {
      max-width: 100%;
    }
    &__benefits-title {
      font-size: 26px;
      line-height: 33px;
    }
    &__contacts {
      margin-top: 70px;
      padding-top: 70px;
    }
    &__form {
      margin-top: 39px;
    }
  }

  @media screen and (max-width: 768px) {
    &__benefits-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 576px) {
    &__contacts {
      margin-top: 40px;
      padding-top: 40px;
    }
    &__form {
      margin-top: 26px;
    }
  }
}
</style>
