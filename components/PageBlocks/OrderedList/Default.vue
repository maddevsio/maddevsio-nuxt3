<script setup lang="ts">
import type { PropType } from 'vue'
import type { OrderedListProps } from '~/components/PageBlocks/OrderedList/interfaces/IOrderedList'
import { OrderedList } from '~/components/PageBlocks/OrderedList/classes/OrderedList'

const {
  slice,
} = defineProps({
  slice: {
    type: Object as PropType<OrderedListProps>,
    default: () => ({}),
  },
})

const {
  items,
  unorderedList,
  listIntroduction,
  hasListIntroduction,
} = new OrderedList(slice)
</script>
<template>
  <div class="ordered-list-slice">
    <PrismicRichText
      v-if="hasListIntroduction"
      :field="listIntroduction"
      :html-serializer="prismicHtmlSerializer"
    />
    <LazySharedListNumberedBox :unordered-list="unorderedList">
      <LazySharedListNumberedBoxItem
        v-for="(item, index) in items"
        :key="index"
        :unordered-list="unorderedList"
      >
        <PrismicRichText
          :field="item.list_item"
          :html-serializer="prismicHtmlSerializer"
        />
      </LazySharedListNumberedBoxItem>
    </LazySharedListNumberedBox>
  </div>
</template>
<style lang="scss" scoped>
.case-list_numbered {
  margin: 35px 0;
}
</style>
