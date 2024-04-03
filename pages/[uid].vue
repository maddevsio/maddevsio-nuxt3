<script setup lang="ts">
import { components } from '~/prismicSlices'
import { buildHead } from '~/SEO/buildMetaTags'
import type { TransformedCustomType } from '~/interfaces/common/commonInterfaces'

const route = useRoute()
const { updateFooterVisible } = useFooterStore()
const { updateEmailSubject } = useEmailSubjectStore()
const config = useRuntimeConfig()
const customPage = ref<null | TransformedCustomType>(null)

const { data, error } = await useFetch(`/api/get-custom-page?uid=${ route.params.uid }`)
if (data.value) {
  customPage.value = JSON.parse(data.value.page!.jsonData!)
}

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

if (customPage.value &&
  (!customPage.value.slices ||
  (!customPage.value?.released && config.public.ffEnvironment === 'production') ||
  getRoutePrefixClient(route.path) !== `${ customPage.value?.routePrefix ? `${ customPage.value?.routePrefix }/` : '' }${ route.params.uid }`)
) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useClearStoresBeforeRouteLeave()

if (customPage.value && customPage.value.uid) {
  if (customPage.value.showFooter !== undefined) {
    updateFooterVisible(customPage.value.showFooter)
  }

  updateEmailSubject(customPage.value?.emailSubject as string)
}

// @ts-ignore
useHead(buildHead({
  url: `${ config.public.domain }/${ route.params.uid }/`,
  title: customPage.value?.metaTitle || '',
  description: customPage.value?.metaDescription || '',
  jsonLd: customPage.value!.schemaOrgSnippet!,
  image: customPage.value!.ogImage!,
}))
</script>
<template>
  <div>
    <SliceZone
      v-if="customPage"
      :slices="customPage.slices"
      :components="components"
    />
  </div>
</template>
