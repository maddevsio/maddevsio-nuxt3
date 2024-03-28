<script setup lang="ts">
import { components } from '~/prismicSlices'
import { fetchLinks } from '~/config/constants'
import { buildHead } from '~/SEO/buildMetaTags'
import type { TransformedCustomType } from '~/interfaces/common/commonInterfaces'

const { client } = usePrismic()
const config = useRuntimeConfig()
const { updateFooterVisible } = useFooterStore()

const { data: authorsHome, error } = await useAsyncData('authorsHome', async () => {
  try {
    const response = await client.getByUID('custom_page', 'authors', {
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

if (authorsHome.value?.uid) {
  updateFooterVisible(authorsHome.value.showFooter)
}

// @ts-ignore
useHead(buildHead({
  url: `${ config.public.domain }/authors/`,
  title: authorsHome.value?.metaTitle || '',
  description: authorsHome.value?.metaDescription || '',
  jsonLd: authorsHome.value!.schemaOrgSnippet!,
  image: authorsHome.value!.ogImage!,
}))
</script>

<template>
  <div>
    <SliceZone
      v-if="authorsHome"
      :slices="authorsHome.slices"
      :components="components"
    />
  </div>
</template>
