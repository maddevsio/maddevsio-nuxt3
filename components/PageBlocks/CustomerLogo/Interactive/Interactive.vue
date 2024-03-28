<script setup lang="ts">
import type { CustomerLogoInteractiveProps } from '~/components/PageBlocks/CustomerLogo/interfaces/ICustomerLogoInteractive'
import { CustomerLogoInteractive } from '~/components/PageBlocks/CustomerLogo/classes/CustomerLogoInteractive'

interface Props {
  slice: CustomerLogoInteractiveProps
}

const { slice } = defineProps<Props>()
const {
  cards,
  containerSize,
  setBackgroundClassname,
} = new CustomerLogoInteractive(slice)
</script>
<template>
  <section
    class="customers-logo-interactive"
    :class="setBackgroundClassname()"
  >
    <div
      class="container"
      :class="`customers-logo-interactive--container-size-${containerSize}`"
    >
      <LazyPageBlocksCustomerLogoInteractiveCards
        :cards-instance="cards"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.customers-logo-interactive {
  &--white {
    background: $bgcolor--white-primary;
  }

  &--black {
    background: $bgcolor--black;
  }

  &--container-size-1026 {
    max-width: 1026px;
  }

  &--container-size-816 {
    max-width: 816px;
  }
}
</style>
