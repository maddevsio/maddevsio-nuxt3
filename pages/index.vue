<script setup lang="ts">
import { components } from '~/prismicSlices'
import { fetchLinks } from '~/config/constants'
import { buildHead } from '~/SEO/buildMetaTags'
import type { TransformedCustomType } from '~/interfaces/common/commonInterfaces'

const { client } = usePrismic()
const { updateFooterVisible } = useFooterStore()
const { updateEmailSubject } = useEmailSubjectStore()
const config = useRuntimeConfig()

const { data: home, error } = await useAsyncData('home', async () => {
  try {
    const response = await client.getByUID('custom_page', 'main-page', {
      fetchLinks,
    })

    return extractCustomPageData(response) as TransformedCustomType
  } catch (e: any) {
    showError({ statusMessage: e.toString(), statusCode: 404 })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useClearStoresBeforeRouteLeave()

if (home.value && home.value.uid) {
  updateFooterVisible(home.value.showFooter)
  updateEmailSubject(home.value?.emailSubject as string)
}

if (home.value!.schemaOrgSnippet) {
  useJsonld(() => home.value!.schemaOrgSnippet!.map(snippet => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  url: `${ config.public.domain }/`,
  title: home.value?.metaTitle || '',
  description: home.value?.metaDescription || '',
  image: home.value!.ogImage!,
}))
</script>

<template>
  <div>
    <SliceZone
      v-if="home"
      :slices="home.slices"
      :components="components"
    />
  </div>
</template>
