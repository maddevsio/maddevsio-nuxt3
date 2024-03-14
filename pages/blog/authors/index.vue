<script setup lang="ts">
import { components } from '~/prismicSlices'
import { fetchLinks } from '~/config/constants'
import { buildHead } from '~/SEO/buildMetaTags'
import type { TransformedCustomType } from '~/interfaces/common/commonInterfaces'

const { client } = usePrismic()
const route = useRoute()
const config = useRuntimeConfig()
const { updateFooterVisible } = useFooterStore()
const { updateHeaderPlateData } = useHeaderPlateStore()
const cookiePlate = useCookie(`seenArticlePlate_${ route.path }`)

const { data: authorsHome, error } = await useAsyncData('authorsHome', async () => {
  try {
    const response = await client.getByUID('custom_page', 'authors', {
      fetchLinks,
    })

    const authorPage = extractCustomPageData(response) as TransformedCustomType

    if (!cookiePlate.value) {
      updateHeaderPlateData(authorPage.headerPlate)
    }

    return authorPage
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
