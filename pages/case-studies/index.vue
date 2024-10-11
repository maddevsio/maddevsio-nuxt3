<script setup lang="ts">
import { CaseStudiesService } from '~/components/CaseStudies/classes/CaseStudiesService'
import { buildHead } from '~/SEO/buildMetaTags'
import type { TagCloudItem } from '~/interfaces/common/commonInterfaces'

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

    const { tagCloud } = pageContent

    const tags = tagCloud.length ? tagCloud[0].items as TagCloudItem[] : []
    const allTag = tags.length && tags[0] ? tags[0].name : ''
    const { writeAllTagName } = useDynamicTagCloudStore()
    writeAllTagName(allTag, 'caseStudies')
    const allCasesPagesData = await caseStudiesService.loadCasesPagesData(pageSize, route, config.public.ffEnvironment, allTag)

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

if (caseStudiesMainPage.value!.pageContent.schemaOrg) {
  useJsonld(() => caseStudiesMainPage.value!.pageContent.schemaOrg!.map(snippet => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  url: caseStudiesMainPage.value?.pageContent.url as string,
  title: caseStudiesMainPage.value?.pageContent.metaTitle || '',
  description: caseStudiesMainPage.value?.pageContent.metaDescription || '',
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
