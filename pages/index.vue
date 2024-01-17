<script setup lang="ts">
import { components } from '~/prismicSlices'
import { fetchLinks } from '~/config/constants'

const { client } = usePrismic()

const { data: home } = await useAsyncData('home', () => client.getByUID('custom_page', 'main-page', {
  fetchLinks,
}))
</script>

<template>
  <div>
    <SliceZone
      :slices="home?.data.body"
      :components="components"
    />
  </div>
</template>
