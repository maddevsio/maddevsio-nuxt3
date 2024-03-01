<script setup lang="ts">
import type { PropType } from 'vue'
import type { ICuNavigation } from '~/components/Blog/interfaces/Post/ICuNavigation'

const props = defineProps({
  cuNavigation: {
    type: Object as PropType<ICuNavigation>,
    default: () => ({}),
  },
})

const {
  clusterName,
  cuSelector,
  cuNavigationButtons,
} = props.cuNavigation
</script>
<template>
  <div class="cu-navigation">
    <div
      v-if="clusterName"
      class="cu-navigation__name"
    >
      {{ clusterName }}
    </div>
    <LazyBlogUICuSelector
      :cu-selector="cuSelector"
    />
    <LazyBlogUICuPageNavigations
      :cu-navigation-buttons-instance="cuNavigationButtons"
    />
  </div>
</template>
<style lang="scss" scoped>
.cu-navigation {
  color: $text-color--white-primary;
  align-items: center;
  margin-bottom: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__name {
    flex-shrink: 0;
    width: 100%;
    @include font('Inter', 16px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
    color: $text-color--grey-opacity-40-percent;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;

    &__name {
      margin-bottom: 13.5px;
      margin-top: 0;
    }
  }
}
</style>
