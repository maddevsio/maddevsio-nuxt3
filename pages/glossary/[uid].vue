<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'
import { GlossaryService } from '~/components/Glossary/classes/GlossaryService'
import { extractGlossaryPostData } from '~/components/Glossary/helpers/extractGlossaryPostData'
import type { GlossaryPost } from '~/interfaces/common/commonInterfaces'
import { extractGlossaryStartScreenData } from '~/components/Glossary/helpers/extractGlossaryStartScreenData'
import { filterLastGlossaryWords } from '~/components/Glossary/helpers/filterLastGlossaryWords'

const prismic = usePrismic()
const route = useRoute()
const config = useRuntimeConfig()
const glossaryService = new GlossaryService(prismic, config.public.ffEnvironment)
const { updateFooterVisible } = useFooterStore()

const { data: glossaryData, error } = await useAsyncData('glossaryPost', async () => {
  try {
    const glossaryPostData = await glossaryService.getGlossaryPostContent(route.params.uid as string) as GlossaryPost
    const glossaryPostContent = extractGlossaryPostData(glossaryPostData, config.public.domain)
    const glossaryStartScreenData = extractGlossaryStartScreenData(glossaryPostData)

    const currentPageWordTitle = glossaryStartScreenData?.wordTitle
    const { tagForSubtitle } = glossaryStartScreenData
    const activeLetter = currentPageWordTitle ? currentPageWordTitle[0] : ''

    const lastNewestGlossaryPages = await glossaryService.getGlossaryPages(
      5,
      1,
      [tagForSubtitle],
      { field: 'my.glossary.word_title', direction: 'desc' })

    const lastNewestFilteredWords = filterLastGlossaryWords(lastNewestGlossaryPages.results as GlossaryPost[], currentPageWordTitle)

    // const { headerPlate } = glossaryPostContent
    //
    // if (!$cookies.get(`seenArticlePlate_${route.path}`)) {
    //   store.commit('SET_HEADER_PLATE_CONTENT', headerPlate)
    // }

    if (!glossaryPostContent?.released && config.public.ffEnvironment === 'production') {
      showError({
        statusCode: 404,
        statusMessage: 'Page not found',
      })
    }

    return {
      glossaryPostContent,
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

onBeforeRouteLeave(() => {
  updateFooterVisible(true)
})

// @ts-ignore
useHead(buildHead({
  url: glossaryData.value?.glossaryPostContent.url || '',
  title: glossaryData.value?.glossaryPostContent?.metaTitle || '',
  description: glossaryData.value?.glossaryPostContent?.metaDescription || '',
  jsonLd: glossaryData?.value?.glossaryPostContent?.schemaOrg,
  image: glossaryData.value?.glossaryPostContent?.ogImage,
}))
</script>

<template>
  <div class="glossary-page-content">
    <LazyGlossaryPageStartScreen class="glossary-start-screen" :start-screen-data="glossaryData?.glossaryStartScreenData" />
    <LazyGlossaryToolBar :active-letter="glossaryData?.activeLetter" :get-all-glossary-pages="glossaryService.getAllGlossaryPages" />
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
