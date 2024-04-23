<script setup lang="ts">
import { components } from '~/prismicSlices'
import { buildHead } from '~/SEO/buildMetaTags'
import type { TransformedCustomType } from '~/interfaces/common/commonInterfaces'
import { fetchLinks } from '~/config/constants'

const route = useRoute()
const { updateFooterVisible } = useFooterStore()
const { updateEmailSubject } = useEmailSubjectStore()
const config = useRuntimeConfig()
const { client } = usePrismic()

const { data, error } = await useAsyncData(`customPage-${ route.params.uid }`, async () => {
  try {
    const response = await client.getByUID('custom_page', route.params.uid.toString(), {
      fetchLinks,
    })

    const customPage = extractCustomPageData(response) as TransformedCustomType

    if (
      !customPage?.slices ||
      (!customPage.released && config.public.ffEnvironment === 'production') ||
      getRoutePrefixClient(route.path) !== `${ customPage.routePrefix ? `${ customPage.routePrefix }/` : '' }${ route.params.uid }`
    ) {
      showError({ message: 'Page not found', statusCode: 404 })
    }

    return customPage
  } catch (e) {
    showError({ message: 'Page not found', statusCode: 404 })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useClearStoresBeforeRouteLeave()

if (data.value && data.value.uid) {
  if (data.value.showFooter !== undefined) {
    updateFooterVisible(data.value.showFooter)
  }

  updateEmailSubject(data.value?.emailSubject as string)
}

// @ts-ignore
useHead(buildHead({
  url: `${ config.public.domain }/${ route.params.uid }/`,
  title: data.value?.metaTitle || '',
  description: data.value?.metaDescription || '',
  jsonLd: data.value!.schemaOrgSnippet!,
  image: data.value!.ogImage!,
}))
</script>
<template>
  <div>
    <SliceZone
      v-if="data"
      :slices="data.slices"
      :components="components"
    />
  </div>
</template>
