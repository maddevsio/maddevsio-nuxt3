<script setup lang="ts">
import { components } from '~/prismicSlices'
import { fetchLinks } from '~/config/constants'

const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', async () => {
  try {
    return await client.getByUID('custom_page', 'main-page', {
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
  <div>
    <SliceZone
      :slices="home?.data.body"
      :components="components"
    />
  </div>
</template>
