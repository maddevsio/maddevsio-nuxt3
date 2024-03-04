<script setup lang="ts">
import type { PropType } from 'vue'
import type { ICUSelector } from '~/components/Blog/interfaces/Post/ICUSelector'

const props = defineProps({
  cuSelector: {
    type: Object as PropType<ICUSelector>,
    default: () => ({}),
  },
})

const {
  cuPosts,
  handleChange,
} = props.cuSelector

const router = useRouter()
const getActiveOption = (selectedOption: { label: string, uid: string }) => handleChange(selectedOption, router)
</script>
<template>
  <div class="cu-navigation__select-wrapper">
    <LazySharedDropdownSelector
      color-theme="black"
      :options="cuPosts"
      @option:selected="getActiveOption"
    />
  </div>
</template>
<style lang="scss" scoped>
.cu-navigation__select-wrapper {
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 25px;
  }
}
</style>
