<script setup lang="ts">
import { CaseStudiesService } from '~/components/CaseStudies/classes/CaseStudiesService'
import { buildHead } from '~/SEO/buildMetaTags'

const prismic = usePrismic()
const route = useRoute()
const caseStudiesService = new CaseStudiesService(prismic)
const config = useRuntimeConfig()

const { data: caseData, error } = await useAsyncData('caseData', async () => {
  try {
    const caseStudiesPageData = await caseStudiesService.getCaseStudiesPageContent(route.params.uid as string)
    const pageContent = caseStudiesService.extractCaseStudiesHomePageData(caseStudiesPageData, config.public.domain)

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

useClearStoresBeforeRouteLeave()

if (caseData.value!.pageContent.schemaOrg) {
  useJsonld(() => caseData.value!.pageContent.schemaOrg!.map(snippet => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  url: caseData.value?.pageContent.url || '',
  title: caseData.value?.pageContent.metaTitle || '',
  description: caseData.value?.pageContent.metaDescription || '',
  image: caseData.value?.pageContent.ogImage,
}))
</script>

<template>
  <LazyCaseStudiesSlicesComponent
    v-if="caseData"
    :slices="caseData.pageContent.slices"
  />
</template>
