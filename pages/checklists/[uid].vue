<script setup lang="ts">
import { ChecklistService } from '~/components/Checklists/classes/ChecklistService'
import { buildHead } from '~/SEO/buildMetaTags'

const prismic = usePrismic()
const route = useRoute()
const config = useRuntimeConfig()
const checklistService = new ChecklistService(prismic, config.public.domain)

const { data: checklist, error } = await useAsyncData('checklist', async () => {
  try {
    const checklistMainPageData = await checklistService.getChecklistsPageContent(route.params.uid as string)
    const checklistPageContent = checklistService.extractChecklistMainPageData(checklistMainPageData)

    if (!checklistPageContent.released && config.public.ffEnvironment === 'production') {
      showError({
        statusCode: 404,
        statusMessage: 'Page not found',
      })
    }

    return {
      checklistPageContent,
    }
  } catch (e) {
    showError({
      statusCode: 404,
      statusMessage: 'Page not found',
    })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useClearStoresBeforeRouteLeave()

// @ts-ignore
useHead(buildHead({
  url: checklist.value?.checklistPageContent.url || '',
  title: checklist.value?.checklistPageContent.metaTitle || '',
  description: checklist.value?.checklistPageContent.metaDescription || '',
  jsonLd: checklist.value!.checklistPageContent.schemaOrg!,
  image: checklist.value?.checklistPageContent.ogImage,
}))
</script>
<template>
  <LazyChecklistsSlicesComponent
    v-if="checklist"
    :slices="checklist.checklistPageContent.slices"
  />
</template>
