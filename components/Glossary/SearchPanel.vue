<script setup lang="ts">
const { isMobile } = useCheckMobile(680)
const glossaryStore = useGlossaryStore()
const { searchIsActive, searchValue } = storeToRefs(glossaryStore)
const {
  openSearchPanel,
  closeSearchPanel,
  searchQuery,
} = glossaryStore
</script>

<template>
  <div
    class="glossary-search-panel"
  >
    <label
      class="glossary-search-panel__button"
      for="glossary-search"
      @click="openSearchPanel"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="glossary-search-panel__icon"
      >
        <path
          d="M13.454 13.5398L10.7807 10.8665M10.7807 10.8665C11.238 10.4093 11.6007 9.8664 11.8482 9.26894C12.0957 8.67149 12.223 8.03114 12.223 7.38447C12.223 6.73779 12.0957 6.09744 11.8482 5.49999C11.6007 4.90253 11.238 4.35967 10.7807 3.9024C10.3234 3.44513 9.78058 3.0824 9.18313 2.83493C8.58568 2.58746 7.94533 2.46008 7.29865 2.46008C6.65197 2.46008 6.01162 2.58746 5.41417 2.83493C4.81672 3.0824 4.27386 3.44513 3.81659 3.9024C2.89308 4.8259 2.37427 6.07844 2.37427 7.38447C2.37427 8.69049 2.89308 9.94303 3.81659 10.8665C4.74009 11.79 5.99262 12.3088 7.29865 12.3088C8.60468 12.3088 9.85721 11.79 10.7807 10.8665Z"
          stroke="white"
          stroke-width="2.05177"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </label>
    <Transition name="slide-right">
      <div
        v-show="searchIsActive || isMobile"
        class="glossary-search-panel__input-wrapper"
      >
        <input
          id="glossary-search"
          :value="searchValue"
          type="text"
          class="glossary-search-panel__input"
          placeholder="Search"
          @input="searchQuery"
        >
        <button
          class="glossary-search-panel__close"
          :class="{'glossary-search-panel__close--visible': searchIsActive || isMobile}"
          :disabled="isMobile && !searchValue.length"
          @click="closeSearchPanel"
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="glossary-search-panel__close-icon"
          >
            <path
              d="M2.68938 13.656C1.92529 12.9181 1.31584 12.0353 0.896565 11.0593C0.477293 10.0832 0.256603 9.03348 0.247372 7.97125C0.238142 6.90901 0.440555 5.85558 0.842803 4.87241C1.24505 3.88924 1.83907 2.99602 2.59022 2.24488C3.34136 1.49374 4.23457 0.899713 5.21774 0.497466C6.20091 0.0952185 7.25435 -0.107195 8.31659 -0.0979645C9.37882 -0.088734 10.4286 0.131956 11.4046 0.551228C12.3806 0.9705 13.2634 1.57996 14.0014 2.34404C15.4586 3.85286 16.265 5.87367 16.2468 7.97125C16.2285 10.0688 15.3872 12.0753 13.9039 13.5586C12.4207 15.0419 10.4142 15.8832 8.31659 15.9014C6.21901 15.9197 4.19819 15.1133 2.68938 13.656ZM9.46538 8.00004L11.7294 5.73604L10.6014 4.60804L8.34538 6.87204L6.08138 4.60804L4.95338 5.73604L7.21738 8.00004L4.95338 10.264L6.08138 11.392L8.34538 9.12804L10.6094 11.392L11.7374 10.264L9.47338 8.00004H9.46538Z"
              fill="#1D1D1F"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.glossary-search-panel {
  min-height: 33px;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: $text-color--white-primary;
    -webkit-box-shadow: 0 0 0 40rem $bgcolor--grey-selected inset;
  }

  input::placeholder {
    color: $text-color--white-primary;
    opacity: 0.4;
  }

  &__button {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    min-width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: $bgcolor--grey-selected;
    margin: 0;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  &__icon {
    width: 15px;
    min-width: 15px;
    height: 15px;
  }

  &__input-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  &__input {
    @include font('Inter', 14px, 400);
    line-height: 1;
    border: 0;
    border-radius: 24px;
    height: 33px;
    width: 100%;
    color: $text-color--white-primary;
    padding: 9px 9px 9px 40px;
    box-sizing: border-box;
    background-color: $bgcolor--grey-selected;
    caret-color: $text-color--white-primary;
  }

  &__close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 9px;
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    width: 0;
    transition: width 0.2s ease 0s;

    &--visible {
      width: auto;
      transition: width 0.2s ease 0.1s;
    }
  }

  @media screen and (max-width: 680px) {
    &__button {
      width: 40px;
      min-width: 40px;
      height: 40px;
    }

    &__close {
      right: 11px;
    }

    &__icon {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }

    &__input {
      height: 40px;
      line-height: 40px;
    }
  }
}

.slide-right-enter-active {
  animation: slideRightAndBack 0.4s;
}

.slide-right-leave-active {
  animation: slideRightAndBack 0.4s reverse;
}

@keyframes slideRightAndBack {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
