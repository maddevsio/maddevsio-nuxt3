<script setup lang="ts">
import { ChecklistService } from '~/components/Checklists/classes/ChecklistService'
import { buildHead } from '~/SEO/buildMetaTags'

const prismic = usePrismic()
const route = useRoute()
const config = useRuntimeConfig()
const checklistsService = new ChecklistService(prismic, config.public.domain)

const { data: checklistHomePage, error } = await useAsyncData('checklistHomePage', async () => {
  try {
    const checklistMainPageData = await checklistsService.getChecklistsPageContent('checklists')
    const checklistPageContent = checklistsService.extractChecklistMainPageData(checklistMainPageData)

    const { tagCloud } = checklistPageContent

    const tags = tagCloud?.length ? tagCloud[0].items : []
    const allTag = tags.length && tags[0] ? tags[0].name : ''
    const { writeAllTagName } = useDynamicTagCloudStore()
    writeAllTagName(allTag, 'checklists')

    const allChecklistMainPageData = await checklistsService.loadChecklistsPagesData(
      4,
      route,
      config.public.ffEnvironment,
      allTag,
    )

    if (!checklistPageContent.released && config.public.ffEnvironment === 'production') {
      showError({ statusMessage: 'Page not found', statusCode: 404 })
    }

    const checklistsData = {
      totalPages: allChecklistMainPageData?.total_pages,
      nextPage: allChecklistMainPageData?.next_page,
      prevPage: allChecklistMainPageData?.prev_page,
      cards: checklistsService.transformChecklistDataForCards(allChecklistMainPageData!),
    }

    return {
      checklistPageContent,
      tags,
      checklistsData,
    }
  } catch {
    showError({ statusMessage: 'Page not found', statusCode: 404 })
  }
})

if (error.value) {
  throw createError({ statusMessage: 'Page not found', statusCode: 404 })
}

if (checklistHomePage.value!.checklistPageContent.schemaOrg) {
  useJsonld(() => checklistHomePage.value!.checklistPageContent.schemaOrg!.map(snippet => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  url: checklistHomePage.value?.checklistPageContent.url as string,
  title: checklistHomePage.value?.checklistPageContent.metaTitle || '',
  description: checklistHomePage.value?.checklistPageContent.metaDescription || '',
  image: checklistHomePage.value?.checklistPageContent.ogImage,
}))
</script>

<template>
  <div>
    <LazyChecklistsMain
      v-if="checklistHomePage"
      :page-content="checklistHomePage.checklistPageContent"
      :tags="checklistHomePage.tags"
      :check-list-data="checklistHomePage.checklistsData"
    />
    <LazyChecklistsSlicesComponent
      v-if="checklistHomePage"
      :slices="checklistHomePage.checklistPageContent.slices"
    />
  </div>
</template>
