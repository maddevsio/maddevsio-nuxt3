<script setup lang="ts">
import { HeaderSearchPanel } from '~/components/Widgets/Header/classes/HeaderSearchPanel'

const searchPanel = new HeaderSearchPanel()
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="header-search-panel">
    <button
      type="button"
      class="header-search-panel__button"
      @click="searchPanel.openModalSearch()"
    >
      <img
        :src="$getMediaFromS3(`images/core/common/magnify--white.svg`)"
        width="16"
        height="18"
        alt="Magnify"
      >
    </button>
    <transition name="slide-fade">
      <LazyWidgetsModalSearch
        v-if="searchPanel.isActiveModalSearch.value"
        @on-close="searchPanel.openModalSearch()"
      />
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.header-search-panel {
  &__button {
    height: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    img {
      display: block;
      width: 16px;
      min-width: 16px;
      height: 18px;
    }
  }

  @media screen and (max-width: 1026px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
