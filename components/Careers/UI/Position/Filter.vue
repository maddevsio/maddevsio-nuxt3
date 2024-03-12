<script setup lang="ts">
const props = defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
  activeCategory: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['change-category'])
const handleFilterChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('change-category', target.value !== props.activeCategory ? target.value : null)
}
</script>
<template>
  <ul class="positions-filter">
    <li
      v-for="category in categories"
      :key="category.title"
      class="positions-filter__item"
    >
      <input
        :id="category.title"
        data-testid="vacancy-input-id"
        type="radio"
        name="tag"
        :value="category.title"
        :checked="activeCategory === category.title"
        @click="handleFilterChange"
      >
      <label :for="category.title">{{ category.title }}</label>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.positions-filter {
  display: flex;
  flex-flow: row wrap;
  &__item {
    margin-right: 8px;
    margin-bottom: 8px;
    &:last-child {
      margin-right: 0;
    }
    input[type="radio"] {
      display: none;
    }
    label {
      display: block;
      cursor: pointer;
      box-shadow: none;
      padding: 12px 20px;
      letter-spacing: -0.013em;
      line-height: 19px;
      color: $text-color--black-oil;
      background-color: $bgcolor--silver;
      border-radius: 2px;
      transition: 0.2s;
    }
    input[type="radio"]:checked + label {
      color: $text-color--red;
    }
  }
}
</style>
