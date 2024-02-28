<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlogTextProps } from '~/components/PageBlocks/Text/interfaces/IBlogText'
import { BlogText } from '~/components/PageBlocks/Text/classes/BlogText'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<BlogTextProps>,
    default: () => ({}),
  },
})

const {
  text,
  richTextRef,
  observeTitles,
  unObserveTitles,
  addEventListeners,
  removeEventListeners,
} = new BlogText(slice)
const { updateActiveTitle } = useTableOfContentStore()

onMounted(() => {
  addEventListeners()
  observeTitles(updateActiveTitle)
})

onUnmounted(() => {
  removeEventListeners()
  unObserveTitles()
})
</script>
<template>
  <section class="text-slice">
    <PrismicRichText
      ref="richTextRef"
      :field="text"
      :html-serializer="blogHtmlSerializer"
      class="textslice"
    />
  </section>
</template>
<style lang="scss" scoped>
.textslice {
  word-break: break-word;
}
</style>
