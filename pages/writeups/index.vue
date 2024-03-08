<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'
import { Writeup } from '~/components/Writeup/classes/Writeup'
import { extractWriteupsHomePageData } from '~/components/Writeup/helpers/extractWriteupsHomePageData'

const prismic = usePrismic()
const route = useRoute()
const config = useRuntimeConfig()
const { updateFooterVisible } = useFooterStore()

const writeupService = new Writeup()

const { data: writeupData, error } = await useAsyncData('writeupData', async () => {
  try {
    const writeupPageData = await writeupService.getWriteupPage(prismic, 'writeups')
    const pageContent = extractWriteupsHomePageData(writeupPageData)

    const { tagCloud } = pageContent

    const tags = tagCloud?.length ? tagCloud[0].items : []

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
      tags,
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
  url: writeupData.value?.pageContent.url || '',
  title: writeupData.value?.pageContent.metaTitle || '',
  description: writeupData.value?.pageContent.metaDescription || '',
  jsonLd: writeupData.value!.pageContent.schemaOrg!,
  image: writeupData.value?.pageContent.ogImage,
}))
</script>

<template>
  <div class="writeup-main-page">
    <LazyWriteupMain :page-content="writeupData!.pageContent" :tags="writeupData!.tags" />
    <LazyWriteupSlicesComponent
      :slices="writeupData?.pageContent?.slices"
    />
  </div>
</template>
