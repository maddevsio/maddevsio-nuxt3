<script setup lang="ts">
import { CaseStudiesService } from '~/components/CaseStudies/classes/CaseStudiesService'
import { buildHead } from '~/SEO/buildMetaTags'

const prismic = usePrismic()
const route = useRoute()
const { isDesktop, isTablet, isMobile } = useDevice()
const caseStudiesService = new CaseStudiesService(prismic)
const config = useRuntimeConfig()

const { data: caseStudiesMainPage, error } = await useAsyncData('caseStudiesMainPage', async () => {
  try {
    const caseStudiesPageData = await caseStudiesService.getCaseStudiesPageContent('case-studies')
    const pageContent = caseStudiesService.extractCaseStudiesHomePageData(caseStudiesPageData, config.public.domain)

    let pageSize
    if (isDesktop) {
      pageSize = 11
    } else if (isTablet) {
      pageSize = 6
    } else if (isMobile && !isTablet) {
      pageSize = 5
    }

    const allCasesPagesData = await caseStudiesService.loadCasesPagesData(pageSize, route, config.public.ffEnvironment)

    const { tagCloud } = pageContent

    const tags = tagCloud.length ? tagCloud[0].items : []

    if (!pageContent.released && config.public.ffEnvironment === 'production') {
      showError({
        statusCode: 404,
        statusMessage: 'Page not found',
      })
    }

    const casesData = {
      totalPages: allCasesPagesData?.total_pages,
      nextPage: allCasesPagesData?.next_page,
      prevPage: allCasesPagesData?.prev_page,
      cards: caseStudiesService.transformationCasesDataForCards(allCasesPagesData!),
    }

    return {
      pageContent,
      tags,
      casesData,
    }
  } catch {
    showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})

if (error.value) {
  throw createError({ statusMessage: 'Page not found', statusCode: 404 })
}

useClearStoresBeforeRouteLeave()

// @ts-ignore
useHead(buildHead({
  url: caseStudiesMainPage.value?.pageContent.url as string,
  title: caseStudiesMainPage.value?.pageContent.metaTitle || '',
  description: caseStudiesMainPage.value?.pageContent.metaDescription || '',
  jsonLd: caseStudiesMainPage.value!.pageContent.schemaOrg!,
  image: caseStudiesMainPage.value?.pageContent.ogImage,
}))
</script>

<template>
  <div>
    <LazyCaseStudiesMain
      v-if="caseStudiesMainPage"
      :cases-data="caseStudiesMainPage.casesData"
      :tags="caseStudiesMainPage.tags"
      :page-content="caseStudiesMainPage.pageContent"
    />
    <LazyCaseStudiesSlicesComponent
      v-if="caseStudiesMainPage"
      :slices="caseStudiesMainPage.pageContent.slices"
    />
  </div>
</template>
