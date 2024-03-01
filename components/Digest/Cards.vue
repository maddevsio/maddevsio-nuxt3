<script setup lang="ts">
import type { PropType } from 'vue'
import type { TransformedDigest } from '~/components/Digest/interfaces/IDigests'

defineProps({
  digestList: {
    type: Array as PropType<TransformedDigest[]>,
    required: true,
    default: () => [],
  },
})

</script>

<template>
  <div class="digest-cards">
    <DigestCard
      v-for="digest in digestList"
      :key="digest.uid"
      :uid="digest.uid"
      :date="digest.date"
      :subtitle="digest.subtitle"
      :order-number="digest.orderNumber"
    />
  </div>
</template>
