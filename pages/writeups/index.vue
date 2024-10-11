<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'
import { Writeup } from '~/components/Writeup/classes/Writeup'
import { extractWriteupsHomePageData } from '~/components/Writeup/helpers/extractWriteupsHomePageData'
import { transformationWriteupListData } from '~/components/Writeup/helpers/transformationWriteupListData'
import type { Writeups } from '~/components/Writeup/interfaces/IWriteupList'
import type { TagCloudItem } from '~/interfaces/common/commonInterfaces'

const prismic = usePrismic()
const route = useRoute()
const config = useRuntimeConfig()

const writeupService = new Writeup(config.public.ffEnvironment)

const { data: writeupData, error } = await useAsyncData('writeupData', async () => {
  try {
    const writeupPageData = await writeupService.getWriteupPage(prismic, 'writeups')
    const pageContent = extractWriteupsHomePageData(writeupPageData, config.public.domain)
    const { tagCloud } = pageContent

    const tags = tagCloud?.length ? tagCloud[0].items as TagCloudItem[] : []
    const allTag = tags.length && tags[0] ? tags[0].name : ''
    const { writeAllTagName } = useDynamicTagCloudStore()
    writeAllTagName(allTag, 'writeUps')

    const allWriteups = await writeupService.loadWriteupPagesData(prismic, 5, route, allTag) as Writeups

    const transformedWriteupsData = transformationWriteupListData(allWriteups)

    if (!pageContent.released && config.public.ffEnvironment === 'production') {
      showError({ statusCode: 404, statusMessage: 'Page not found' })
    }

    return {
      pageContent,
      transformedWriteupsData,
      tags,
    }
  } catch {
    showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

provide('transformedWriteupsData', writeupData.value?.transformedWriteupsData)

useClearStoresBeforeRouteLeave()

if (writeupData.value!.pageContent.schemaOrg) {
  useJsonld(() => writeupData.value!.pageContent.schemaOrg!.map(snippet => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  url: writeupData.value?.pageContent.url || '',
  title: writeupData.value?.pageContent.metaTitle || '',
  description: writeupData.value?.pageContent.metaDescription || '',
  image: writeupData.value?.pageContent.ogImage,
}))
</script>

<template>
  <div class="writeup-main-page">
    <LazyWriteupMain :page-content="writeupData?.pageContent" :tags="writeupData?.tags" />
    <LazyWriteupSlicesComponent
      :slices="writeupData?.pageContent?.slices"
    />
  </div>
</template>
