<script setup lang="ts">
import type { PropType } from 'vue'
import type { TableBlogProps } from '~/components/PageBlocks/Table/interfaces/ITableBlog'
import { TableBlog } from '~/components/PageBlocks/Table/classes/TableBlog'

const {
  slice,
} = defineProps({
  slice: {
    type: Object as PropType<TableBlogProps>,
    default: () => ({}),
  },
})
const {
  tableRich,
} = new TableBlog(slice)
</script>
<template>
  <section class="table-blog-slice">
    <div class="table">
      <PrismicRichText
        :field="tableRich"
        :html-serializer="prismicHtmlSerializer"
        class="table__item"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.table {
  position: relative;
  overflow: hidden;
  margin: 12px 0;

  &__item {
    width: 100%;

    :deep(table) {
      width: 100% !important;
      table-layout: auto !important;

      @media screen and (max-width: 650px) {
        width: 632px !important;
      }

      li {
        font-size: inherit;
      }
    }
  }
}
</style>
