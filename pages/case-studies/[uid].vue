<script setup lang="ts">
import { CaseStudiesService } from '~/components/CaseStudies/classes/CaseStudiesService'
import { buildHead } from '~/SEO/buildMetaTags'

const prismic = usePrismic()
const route = useRoute()
const caseStudiesService = new CaseStudiesService(prismic)
const config = useRuntimeConfig()
const { updateFooterVisible } = useFooterStore()

const { data: caseData, error } = await useAsyncData('caseData', async () => {
  try {
    const caseStudiesPageData = await caseStudiesService.getCaseStudiesPageContent(route.params.uid as string)
    const pageContent = caseStudiesService.extractCaseStudiesHomePageData(caseStudiesPageData, config.public.domain)

    // const { headerPlate } = pageContent
    //
    // if (!$cookies.get(`seenArticlePlate_${route.path}`)) {
    //   store.commit('SET_HEADER_PLATE_CONTENT', headerPlate)
    // }

    if (!pageContent.released && process.env.ffEnvironment === 'production') {
      showError({ statusCode: 404, statusMessage: 'Page not found' })
    }

    return {
      pageContent,
    }
  } catch {
    showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

onBeforeRouteLeave(() => {
  updateFooterVisible(true)
})

// @ts-ignore
useHead(buildHead({
  url: caseData.value?.pageContent.url || '',
  title: caseData.value?.pageContent.metaTitle || '',
  description: caseData.value?.pageContent.metaDescription || '',
  jsonLd: caseData.value!.pageContent.schemaOrg!,
  image: caseData.value?.pageContent.ogImage,
}))
</script>

<template>
  <LazyCaseStudiesSlicesComponent
    v-if="caseData"
    :slices="caseData.pageContent.slices"
  />
</template>
