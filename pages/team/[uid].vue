<script setup lang="ts">
import { fetchLinks } from '~/config/constants'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'
import { buildHead } from '~/SEO/buildMetaTags'
import { components } from '~/prismicSlices'

const route = useRoute()
const prismic = usePrismic()
const config = useRuntimeConfig()

const { data: expertData, error } = await useAsyncData('expertData', async () => {
  try {
    let schemaOrgSnippet
    const openGraphUrl = `${ config.public.domain }/team/${ route.params.uid }/`
    const expert = await prismic.client.getByUID('expert', route.params.uid as string, { fetchLinks })
    if ((!expert.data.released && config.public.ffEnvironment === 'production')) {
      showError({ statusCode: 404, statusMessage: 'Page not found' })
    }
    if (expert?.data?.schemaOrgSnippets &&
      Array.isArray(expert.data.schemaOrgSnippets) &&
      // @ts-ignore
      expert?.data?.schemaOrgSnippets[0]?.singleSnippet[0]?.text) {
      schemaOrgSnippet = extractSchemaOrg(expert.data.schemaOrgSnippets as SchemaOrgSnippet[])
    }

    return {
      expert: {
        id: expert.id,
        uid: expert.uid,
        title: prismic.asText(expert.data.metaTitle),
        slices: expert.data.slices,
        metaTitle: prismic.asText(expert.data.metaTitle),
        metaDescription: prismic.asText(expert.data.metaDescription),
        ogImage: expert.data.ogImage.url,
        openGraphUrl,
      },
      schemaOrgSnippet,
      openGraphUrl,
    }
  } catch {
    showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})

if (error.value) {
  throw createError({ statusMessage: 'Page not found', statusCode: 404 })
}

if (expertData.value!.schemaOrgSnippet) {
  useJsonld(() => expertData.value!.schemaOrgSnippet!.map(snippet => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  title: expertData.value?.expert.metaTitle || '',
  metaTitle: expertData.value?.expert.metaTitle || '',
  description: expertData.value?.expert.metaDescription || '',
  url: expertData.value?.openGraphUrl || '',
  image: expertData.value?.expert.ogImage || '',
}))
</script>

<template>
  <div>
    <LazySliceZone
      v-if="expertData"
      :slices="expertData.expert.slices"
      :components="components"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
