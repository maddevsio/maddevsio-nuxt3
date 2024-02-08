<script setup lang="ts">
import type { TextListDefaultProps } from '~/components/TextList/interfaces/ITextListDefault'
import { TextListDefault } from '~/components/TextList/classes/TextListDefault'

interface Props {
  slice: TextListDefaultProps
}
const { slice } = defineProps<Props>()
const {
  containerSize,
  title,
  items,
} = new TextListDefault(slice)
</script>
<template>
  <section class="text-list-slice">
    <div
      class="text-list-slice__container container"
      :style="`max-width: ${containerSize}px`"
    >
      <h4
        v-if="title"
        class="text-list-slice__title"
      >
        {{ title }}
      </h4>
      <ul
        v-if="items.length"
        data-testid="default-list"
        class="text-list-slice__list"
      >
        <li
          v-for="(item, i) of items"
          :key="`text-list-item-${i}-${createUID(item.listText)}`"
          class="text-list-slice__list-item"
        >
          {{ item.listText }}
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import './styles/textListStyles';
</style>
