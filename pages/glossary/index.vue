<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'
import { GlossaryService } from '~/components/Glossary/classes/GlossaryService'
import { extractGlossaryStartScreenData } from '~/components/Glossary/helpers/extractGlossaryStartScreenData'
import { extractGlossaryPageData } from '~/components/Glossary/helpers/extractGlossaryPageData'
import type { GlossaryPage } from '~/interfaces/common/commonInterfaces'

const prismic = usePrismic()
const config = useRuntimeConfig()
const glossaryService = new GlossaryService(prismic, config.public.ffEnvironment)

const { data: glossaryData, error } = await useAsyncData('glossaryData', async () => {
  try {
    const glossaryPageData = await glossaryService.getGlossaryPageContent('glossary') as GlossaryPage
    const glossaryPageContent = extractGlossaryPageData(glossaryPageData, config.public.domain)
    const glossaryStartScreenData = extractGlossaryStartScreenData(glossaryPageData)

    if (!glossaryPageContent?.released && config.public.ffEnvironment === 'production') {
      showError({
        statusCode: 404,
        statusMessage: 'Page not found',
      })
    }

    return {
      glossaryPageContent,
      glossaryStartScreenData,

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
provide('glossaryService', glossaryService)

if (glossaryData.value!.glossaryPageContent.schemaOrg) {
  useJsonld(() => glossaryData.value!.glossaryPageContent.schemaOrg!.map(snippet => ({
    ...JSON.parse(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  })))
}

// @ts-ignore
useHead(buildHead({
  url: glossaryData.value?.glossaryPageContent.url || '',
  title: glossaryData.value?.glossaryPageContent?.metaTitle || '',
  description: glossaryData.value?.glossaryPageContent?.metaDescription || '',
  image: glossaryData.value?.glossaryPageContent?.ogImage,
}))
</script>

<template>
  <div class="glossary-page-content">
    <LazyGlossaryPageStartScreen
      v-if="glossaryData"
      class="glossary-start-screen"
      :start-screen-data="glossaryData.glossaryStartScreenData"
    />
    <LazyGlossaryMainPageContent />
  </div>
</template>

<style lang="scss" scoped>
.glossary-start-screen {
  :deep(.glossary-head-start-screen__title) {
    max-width: 100%;
    @media screen and (max-width: 768px) {
      font-size: 48px;
    }

    @media screen and (max-width: 600px) {
      font-size: 31px;
    }
  }
}
</style>
