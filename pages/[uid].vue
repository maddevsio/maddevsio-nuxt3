<script setup lang="ts">
import { components } from '~/prismicSlices'
import { fetchLinks } from '~/config/constants'

const { client } = usePrismic()
const route = useRoute()

const { data: customPage } = await useAsyncData('home', () => client.getByUID('custom_page', route.params.uid.toString(), {
  fetchLinks,
}))

if (!customPage.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>

<template>
  <div>
    <SliceZone
      :slices="customPage.data.body"
      :components="components"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
