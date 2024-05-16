<script setup lang="ts">
import type { PropType } from 'vue'
import type { SelectOption } from '~/interfaces/common/commonInterfaces'

const props = defineProps({
  colorTheme: {
    type: String,
    default: 'black',
  },

  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
  },

  selectTitle: {
    type: String,
    default: 'Explore the chapters',
  },

  orderedList: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['option:selected'])
const isDropdownOpen = ref(false)
const selectedOption = ref<SelectOption>({ label: props.selectTitle, uid: '' })
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const selectOption = (option: SelectOption) => {
  selectedOption.value = option
  toggleDropdown()
  emit('option:selected', option)
}

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.dropdown-selector')) {
    closeDropdown()
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
<template>
  <div
    :class="[
      'dropdown-selector',
      `dropdown-selector--${colorTheme}`,
      { 'dropdown-selector--open': isDropdownOpen },
    ]"
  >
    <button
      type="button"
      :class="`dropdown-selector__selected dropdown-selector__selected--${colorTheme}`"
      @click="toggleDropdown"
    >
      {{ selectedOption.label }}
      <LazySharedDropdownSelectorSelectOpenIndicator
        class="dropdown-selector__open-indicator"
        :class="{ 'dropdown-selector__open-indicator--open' : isDropdownOpen }"
      />
    </button>
    <LazySharedUITransitionFade>
      <ul
        v-if="isDropdownOpen"
        :class="`dropdown-selector__options dropdown-selector__options--${colorTheme}`"
      >
        <li
          v-for="(option, index) in options"
          :key="`${option.uid}-${index}`"
          tabindex="0"
          :class="[
            `dropdown-selector__option dropdown-selector__option--${colorTheme}`,
            { 'dropdown-selector__option--active': option.uid === selectedOption.uid }
          ]"
          @click="selectOption(option)"
        >
          <span v-if="orderedList" class="dropdown-selector__option--number">{{ index + 1 }}.</span> {{ option.label }}
        </li>
      </ul>
    </LazySharedUITransitionFade>
  </div>
</template>
<style scoped lang="scss">
.dropdown-selector {
  position: relative;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;

  &--black {
    background: $bgcolor--black-pale;
  }

  &--white {
    background: $bgcolor--grey-light;
  }

  * {
    box-sizing: border-box;
  }

  &__selected {
    width: 100%;
    padding: 13px 15px 13px 20px;
    text-align: left;
    border: none;
    background: transparent;
    cursor: pointer;
    @include font('Inter', 16px, 400);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--black {
      color: $bgcolor--silver;
    }

    &--white {
      color: $text-color--black-oil;
    }
  }

  &__open-indicator {
    transition: 0.2s ease-in-out;
    &--open {
      transform: rotate(180deg);
    }
  }

  &__options {
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    border-radius: 4px;
    z-index: 20;
    max-height: 350px;
    overflow-y: auto;

    &--black {
      background: $bgcolor--black-pale;
    }

    &--white {
      background: $bgcolor--grey-light;
    }
  }

  &__option {
    padding: 15px 20px 15px 20px;
    background: transparent;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    @include font('Inter', 16px, 400);
    font-style: normal;
    line-height: 160%;
    letter-spacing: -0.02em;
    display: flex;

    &--number {
      margin-right: 10px;
    }

    &--black {
      color: $bgcolor--silver;

      &:hover {
        background: rgba(56, 56, 56, 0.6);
      }
    }

    &--white {
      color: $text-color--black-oil;

      &:hover {
        background: rgba(230, 230, 230, 0.6);
      }
    }
  }
}
</style>
