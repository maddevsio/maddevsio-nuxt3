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
const config = useRuntimeConfig()
const glossaryService = new GlossaryService(prismic, config.public.ffEnvironment)

const { data: glossaryPost, error } = await useAsyncData('glossaryPost', async () => {
  try {
    const glossaryPostData = await glossaryService.getGlossaryPageContent(route.params.uid as string) as GlossaryPage
    const glossaryPostContent = extractGlossaryPostData(glossaryPostData)
    const glossaryPageData = extractGlossaryPageData(glossaryPostData, config.public.domain)
    const glossaryStartScreenData = extractGlossaryStartScreenData(glossaryPostData)

    const currentPageWordTitle = glossaryStartScreenData?.wordTitle
    const { tagForSubtitle } = glossaryStartScreenData
    const activeLetter = currentPageWordTitle ? currentPageWordTitle[0] : ''

    const lastNewestGlossaryPages = await glossaryService.getAllGlossaryPages(1, [tagForSubtitle])

    const lastNewestFilteredWords = filterLastGlossaryWords(lastNewestGlossaryPages as GlossaryPage[], currentPageWordTitle)

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
  url: glossaryPost.value?.glossaryPageData.url || '',
  title: glossaryPost.value?.glossaryPageData?.metaTitle || '',
  description: glossaryPost.value?.glossaryPageData?.metaDescription || '',
  jsonLd: glossaryPost?.value?.glossaryPageData?.schemaOrg || '',
  image: glossaryPost.value?.glossaryPageData?.ogImage,
}))
</script>

<template>
  <div class="glossary-page-content">
    <LazyGlossaryPageStartScreen v-if="glossaryPost" class="glossary-start-screen" :start-screen-data="glossaryPost.glossaryStartScreenData" />
    <LazyGlossaryToolBar v-if="glossaryPost" :active-letter-prop="glossaryPost.activeLetter" />
    <LazyGlossaryPostView v-if="glossaryPost" :glossary-post-content="glossaryPost.glossaryPostContent" />
    <LazyGlossaryNewestWords v-if="glossaryPost" :last-newest-filtered-words="glossaryPost.lastNewestFilteredWords" :tag="glossaryPost.tagForSubtitle" />
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
