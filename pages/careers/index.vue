<script setup lang="ts">
import { CareersService } from '~/components/Careers/classes/CareersService'
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

const prismic = usePrismic()
const config = useRuntimeConfig()
const careersService = new CareersService(prismic, config.public.domain)

const { data: careersHome, error } = await useAsyncData('careersHome', async () => {
  try {
    const careersHome = await careersService.getCareersHome()
    const vacancyCategories = careersHome.data.vacancy_categories.map(category => ({
      title: category.category_title,
      tags: (category.tags && category.tags.length) ? category.tags.split(/, */g) : [],
    }))
    const response = await careersService.getVacancies()
    const vacancies = response.results.map(vacancy => careersService.extractVacancyData(vacancy)).filter(vacancy => {
      if (config.public.ffEnvironment === 'production') { return vacancy.released }
      return vacancy.released || !vacancy.released
    })

    return {
      vacancyCategories,
      vacancies,
    }
  } catch {
    showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

provide('vacancyCategories', careersHome.value?.vacancyCategories)
provide('vacancies', careersHome.value?.vacancies)

useClearStoresBeforeRouteLeave()

// @ts-ignore
useHead(buildHead(
  {
    ...getMetadata('careers'),
    url: `${ config.public.domain }/careers/`,
    title: 'Mad Devs Careers: Work with Us',
    description: 'Join our team of 100+ staff members working on unique projects, master new IT skills, and build a fantastic career path in cloud and software engineering.',
    image: 'https://maddevs.io/careers.png',
  },
))
</script>
<template>
  <div>
    <LazyCareersMain
      v-if="careersHome"
    />
  </div>
</template>
