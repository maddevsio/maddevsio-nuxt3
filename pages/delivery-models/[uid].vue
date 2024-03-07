<script setup lang="ts">
import { deliveryModels } from '~/components/DeliveryModels/constants/deliveryModelsConstants'
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

const modelData = ref({})
const route = useRoute()
const uid = route.params.uid as string
const model = deliveryModels[uid]

if (model) {
  modelData.value = {
    uid: route.params.uid,
    ...model,
  }
} else {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

// @ts-ignore
useHead(buildHead(getMetadata(route.params.uid)))
</script>
<template>
  <LazyDeliveryModelsDynamicMain
    :uid="modelData.uid"
    v-bind="modelData"
  />
</template>
