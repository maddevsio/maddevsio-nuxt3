<script setup lang="ts">
import type { Taxon, Organization } from 'schema-dts'
import { CareersService } from '~/components/Careers/classes/CareersService'
import { employeesBenefitsWithCorePoints } from '~/components/Careers/constants/careersConstants'
import { buildHead } from '~/SEO/buildMetaTags'
import { buildWebPageSchema } from '~/utils/schemaOrg/buildWebPageSchema'
import { buildOrganizationSchema } from '~/utils/schemaOrg/buildOrganizationSchema'

const prismic = usePrismic()
const config = useRuntimeConfig()
const route = useRoute()
const careersService = new CareersService(prismic, config.public.domain)
const openGraphUrl = `${ config.public.domain }/careers/${ route.params.uid }/`

const { data: vacancyData, error } = await useAsyncData('vacancyData', async () => {
  const response = await careersService.getVacancy(route.params.uid as string)
  const vacancy = careersService.extractVacancyData(response)

  if (!vacancy.released && config.public.ffEnvironment === 'production') {
    await navigateTo('/careers/', {
      redirectCode: 303,
    })
  }

  return vacancy
})

if (error.value) {
  await navigateTo('/careers/', {
    redirectCode: 303,
  })
}

useClearStoresBeforeRouteLeave()

const metaDescription = `We are looking for a ${ vacancyData.value?.position || vacancyData.value?.title } to join the Mad Devs team. If you're interested, apply now and advance your career with us!`

useJsonld([
  buildOrganizationSchema() as Organization & { '@context': 'https://schema.org' },
  buildWebPageSchema(
    vacancyData.value?.position || vacancyData.value?.title,
    metaDescription) as Taxon & { '@context': 'https://schema.org' },
])

// @ts-ignore
useHead(buildHead({
  title: vacancyData.value?.position || vacancyData.value?.title || '',
  metaTitle: vacancyData.value?.position || vacancyData.value?.title || '',
  description: metaDescription,
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
                v-for="benefit in employeesBenefitsWithCorePoints"
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
