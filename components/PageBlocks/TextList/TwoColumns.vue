<script setup lang="ts">
import type { TextListTwoColumnsProps } from '~/components/PageBlocks/TextList/interfaces/ITextListTwoColumns'
import { TextListTwoColumns } from '~/components/PageBlocks/TextList/classes/TextListTwoColumns'

interface Props {
  slice: TextListTwoColumnsProps
}

const { slice } = defineProps<Props>()
const {
  title,
  items,
} = new TextListTwoColumns(slice)
</script>
<template>
  <section class="text-list-slice">
    <div class="text-list-slice__container container">
      <h4
        v-if="title"
        class="text-list-slice__title"
      >
        {{ title }}
      </h4>
      <ul
        v-if="items.length"
        data-testid="two-columns"
        class="text-list-slice__list text-list-slice__list--two-columns"
      >
        <li
          v-for="(item, i) of items"
          :key="`text-list-item-${i}-${createUID(item.listText)}`"
          class="text-list-slice__list-item text-list-slice__list-item--two-columns"
        >
          {{ item.listText }}
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import 'styles/textListStyles';
</style>
