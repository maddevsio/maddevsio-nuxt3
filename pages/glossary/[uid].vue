<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'
import { GlossaryService } from '~/components/Glossary/classes/GlossaryService'
import { extractGlossaryPostData } from '~/components/Glossary/helpers/extractGlossaryPostData'
import type { GlossaryPage } from '~/interfaces/common/commonInterfaces'
import { extractGlossaryStartScreenData } from '~/components/Glossary/helpers/extractGlossaryStartScreenData'
import { filterLastGlossaryWords } from '~/components/Glossary/helpers/filterLastGlossaryWords'
import { extractGlossaryPageData } from '~/components/Glossary/helpers/extractGlossaryPageData'

const prismic = usePrismic()
const route = useRoute()
const cookiePlate = useCookie(`seenArticlePlate_${ route.path }`)
const config = useRuntimeConfig()
const { updateHeaderPlateData } = useHeaderPlateStore()
const glossaryService = new GlossaryService(prismic, config.public.ffEnvironment)

const { data: glossaryData, error } = await useAsyncData('glossaryPost', async () => {
  try {
    const glossaryPostData = await glossaryService.getGlossaryPageContent(route.params.uid as string) as GlossaryPage
    const glossaryPostContent = extractGlossaryPostData(glossaryPostData)
    const glossaryPageData = extractGlossaryPageData(glossaryPostData, config.public.domain)
    const glossaryStartScreenData = extractGlossaryStartScreenData(glossaryPostData)

    const currentPageWordTitle = glossaryStartScreenData?.wordTitle
    const { tagForSubtitle } = glossaryStartScreenData
    const activeLetter = currentPageWordTitle ? currentPageWordTitle[0] : ''

    const lastNewestGlossaryPages = await glossaryService.getGlossaryPages(
      5,
      1,
      [tagForSubtitle],
      { field: 'my.glossary.word_title', direction: 'desc' })

    const lastNewestFilteredWords = filterLastGlossaryWords(lastNewestGlossaryPages.results as GlossaryPage[], currentPageWordTitle)

    const { headerPlate } = glossaryPageData

    if (!cookiePlate.value) {
      updateHeaderPlateData(headerPlate)
    }

    if (!glossaryPageData?.released && config.public.ffEnvironment === 'production') {
      showError({
        statusCode: 404,
        statusMessage: 'Page not found',
      })
    }

    return {
      glossaryPostContent,
      glossaryPageData,
      glossaryStartScreenData,
      lastNewestFilteredWords,
      tagForSubtitle,
      activeLetter,
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

// @ts-ignore
useHead(buildHead({
  url: glossaryData.value?.glossaryPageData.url || '',
  title: glossaryData.value?.glossaryPageData?.metaTitle || '',
  description: glossaryData.value?.glossaryPageData?.metaDescription || '',
  jsonLd: glossaryData?.value?.glossaryPageData?.schemaOrg,
  image: glossaryData.value?.glossaryPageData?.ogImage,
}))
</script>

<template>
  <div class="glossary-page-content">
    <LazyGlossaryPageStartScreen class="glossary-start-screen" :start-screen-data="glossaryData?.glossaryStartScreenData" />
    <LazyGlossaryToolBar :active-letter-prop="glossaryData?.activeLetter" />
    <LazyGlossaryPostView :glossary-post-content="glossaryData?.glossaryPostContent" />
    <LazyGlossaryNewestWords :last-newest-filtered-words="glossaryData?.lastNewestFilteredWords" :tag="glossaryData?.tagForSubtitle" />
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
