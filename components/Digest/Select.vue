<script setup lang='ts'>
import { DigestSelect } from '~/components/Digest/classes/DigestSelect'

const emit = defineEmits(['changeYear'])

const prismic = usePrismic()

const { selectDigestOptions, createSelectOptionsList } = new DigestSelect(prismic)

await useAsyncData(() => createSelectOptionsList(), {
  server: false,
  lazy: true,
})

const handleOptionChangeYear = (option: object) => emit('changeYear', option)
</script>

<template>
  <div class="digest-select-wrapper">
    <LazySharedDropdownSelector
      :options="selectDigestOptions"
      color-theme="white"
      select-title="Digests of the Year"
      @option:selected="handleOptionChangeYear"
    />
  </div>
</template>

<style lang='scss' scoped>
.digest-select-wrapper {
  width: 20%;
  min-width: 300px;
  @media screen and (max-width: 670px) {
    width: 100%;
    min-width: unset;
  }
}
</style>
