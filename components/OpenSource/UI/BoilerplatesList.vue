<script setup lang="ts">
import { boilerplatesList } from '~/components/OpenSource/constants/openSourceConstants'
</script>
<template>
  <section>
    <ul class="boilerplates-list">
      <LazyOpenSourceUIBoilerplatesListItem
        v-for="item of boilerplatesList"
        :key="item.id"
        v-bind="item"
      />
    </ul>
  </section>
</template>
<style lang="scss" scoped>
.boilerplates-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;

  @media screen and (max-width: 1260px) {
    grid-gap: 24px;
  }

  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
  }
}
</style>
