<script setup lang="ts">
import type { TransformedWriteup } from '~/components/Writeup/interfaces/IWriteupList'

interface Props {
  writeups: TransformedWriteup[]
  colorTheme: string
  currentPage: number
}

withDefaults(defineProps<Props>(), {
  colorTheme: 'white',
  currentPage: 1,
})

const headerHeightGlobal = 63 // TODO: Need to add dynamic header height
</script>
<template>
  <div
    class="writeup-list"
    :style="`scroll-margin-top: ${(headerHeightGlobal ? headerHeightGlobal : 63) + 60}px`"
  >
    <WriteupCard
      v-for="(writeup, index) in writeups"
      :key="`writeup-list-item-${index}-${writeup.uid}`"
      :index="index"
      :title="writeup.title"
      :uid="writeup.uid"
      :date="writeup.date"
      :author="writeup.author"
      :tags="writeup.tags"
      :current-page="currentPage"
      :class="`writeup-list__item--${colorTheme}`"
    />
  </div>
</template>
<style lang="scss" scoped>
.writeup-list {
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
}
</style>
