<script setup lang="ts">
import { components } from '~/prismicSlices'
import { fetchLinks } from '~/config/constants'

const { client } = usePrismic()
const route = useRoute()

const { data, error } = await useAsyncData(`customPage-${ route.params.uid }`, async () => {
  try {
    return await client.getByUID('custom_page', route.params.uid.toString(), {
      fetchLinks,
    })
  } catch (e) {
    showError({ message: 'Page not found', statusCode: 404 })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>
<template>
  <div
    v-if="data"
  >
    <SliceZone
      :slices="data.data.body"
      :components="components"
    />
  </div>
</template>
