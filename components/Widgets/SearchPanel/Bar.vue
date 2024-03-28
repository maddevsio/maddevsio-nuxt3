<script setup lang="ts">
const emit = defineEmits(['closeSearchPanel', 'searchQuery'])
const searchInput = ref<HTMLInputElement | null>(null)
const searchValue = ref('')
const { $getMediaFromS3 } = useMediaFromS3()
const closeSearchPanel = () => {
  searchValue.value = ''
  emit('closeSearchPanel')
}

const searchQuery = debounce((event: InputEvent) => {
  const target = event.target as HTMLInputElement
  const { value } = target
  if (!value) { return null }
  searchValue.value = value
  emit('searchQuery', searchValue.value)
  return value
}, 500)

onMounted(() => {
  if (searchInput.value) { searchInput.value.focus() }
})
</script>
<template>
  <div
    class="search-panel__search-bar"
  >
    <img
      :src="$getMediaFromS3('images/Blog/svg/magnify--black.svg')"
      alt="Search icon"
      class="search-panel__magnify-icon"
      height="14"
      width="14"
    >
    <input
      ref="searchInput"
      :value="searchValue"
      class="search-panel__search-field"
      placeholder="Find what you're looking for..."
      type="text"
      @input="searchQuery"
    >
    <button
      class="search-panel__close-button"
      @click="closeSearchPanel"
    >
      <img
        alt="Close"
        height="14"
        :src="$getMediaFromS3('images/Blog/svg/close-icon-search.svg')"
        width="14"
      >
    </button>
  </div>
</template>
<style lang="scss" scoped>
.search-panel {
  &__search-bar {
    width: 100%;
    padding: 17px 20px;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    column-gap: 12px;

    @media screen and (max-width: 505px) {
      padding: 17px 12px;
    }
  }

  &__search-field {
    width: 100%;
    @include font('Inter', 16px, 400);
    line-height: 130%;
    background: transparent;
    border: none;
    color: $text-color--chinese-black;

    &::placeholder {
      font-size: 12px;
    }
  }

  &__close-button {
    background: transparent;
    border: none;
    display: flex;
    place-items: center;
    cursor: pointer;
    margin-left: auto;
    padding: 0;
  }
}
</style>
