<script setup lang="ts">
import type { PropType } from 'vue'
import type { TableCustomPageProps } from '~/components/PageBlocks/Table/interfaces/ITableCustomPage'
import { TableCustomPage } from '~/components/PageBlocks/Table/classes/TableCustomPage'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<TableCustomPageProps>,
    default: () => ({}),
  },
})

const tableCustomPage = new TableCustomPage(slice)
</script>
<template>
  <section
    :style="{ backgroundColor: tableCustomPage.sliceBackground}"
  >
    <div
      class="table-wrapper"
    >
      <div
        :style="{ maxWidth: `${tableCustomPage.containerSize}px`}"
        :class="`table ${tableCustomPage.tableColor}`"
      >
        <PrismicRichText
          :field="tableCustomPage.tableRich"
          :html-serializer="tableHtmlSerializer"
          class="table__item"
        />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import 'assets/styles/colorClasses/colors';
.table {
  position: relative;
  overflow: hidden;
  margin: 12px 0;

  &-wrapper {
    display: flex;
    justify-content: center;

    & > .table {
      flex-grow: 1;
      margin: 0;
      padding: 0 90px;

      @media (max-width: 768px) {
        padding: 0 56px;
      }

      @media (max-width: 576px) {
        padding: 0 44px;
      }

      @media (max-width: 440px) {
        padding: 0 24px;
      }
    }
  }

  &__item {
    width: 100%;

    :deep(table) {
      width: 100% !important;
      table-layout: auto !important;

      @media screen and (max-width: 650px) {
        width: 632px !important;
      }
    }

    :deep(li) {
      font-size: inherit;
    }
  }
}
</style>
