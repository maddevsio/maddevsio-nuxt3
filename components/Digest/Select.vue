<script setup lang='ts'>
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { DigestSelect } from '~/components/Digest/classes/DigestSelect'
import { DigestSelectOpenIndicator } from '#components'

interface Props {
  setAllDigestsOptions: boolean
}

const props = withDefaults(defineProps<Props>(), {
  setAllDigestsOptions: false,
})

const emit = defineEmits(['changeYear'])

const prismic = usePrismic()

const digestSelect = new DigestSelect(prismic, emit, props)

await useAsyncData(() => digestSelect.createSelectOptionsList(), {
  server: false,
  lazy: true,
})

const handleOptionChangeYear = (option: object) => emit('changeYear', option)
</script>

<template>
  <div class="digest-select-wrapper">
    <VueSelect
      v-model="digestSelect.currentOption.value"
      :options="digestSelect.selectDigestOptions.value"
      :clearable="false"
      :filterable="false"
      :searchable="false"
      :components="{ OpenIndicator: DigestSelectOpenIndicator }"
      class="digest-select-wrapper__select"
      @update:model-value="handleOptionChangeYear(digestSelect.currentOption.value)"
    />
  </div>
</template>

<style lang='scss' scoped>
.digest-select-wrapper {
  width: 41%;
  min-width: 334px;
  @media screen and (max-width: 670px) {
    width: 100%;
    min-width: unset;
  }

  :deep(.v-select) {
    .vs__search {
      width: 1px;
      height: 1px;
      opacity: 0;
    }

    .vs__dropdown-toggle {
      padding: 13px 15px 13px 20px;
      border: none;
      background: rgba(207, 207, 208, 0.3);
      border-radius: 4px;
      height: 54px;
    }

    .vs__dropdown-menu {
      top: calc(100% + 6px);
      border-radius: 4px;
      list-style: decimal !important;
      width: 100%;
      padding: 0 0 0 38px;
    }

    .vs__dropdown-option {
      @include font('Inter', 16px, 400);
      font-style: normal;
      line-height: 160%;
      letter-spacing: -0.02em;
      padding: 12px 16px 12px 10px;
      color: $text-color--black-oil;
      display: list-item;
      white-space: normal;
      position: relative;

      &:before {
        content: '';
        right: 0;
        top: 0;
        height: 100%;
        width: calc(100% + 40px);
        background: $bgcolor--silver;
        position: absolute;
        z-index: -1;
        opacity: 0;
      }

      &--selected {
        opacity: 0.5;
      }

      &--highlight {
        background-color: transparent;
      }

      &--highlight:before {
        opacity: 1;
      }
    }

    .vs__selected {
      color: $bgcolor--black-oil;
    }
  }

  :deep(.vs--open) {
    .vs__dropdown-toggle {
      background: $bgcolor--silver;
    }

    .vs__selected {
      color: $bgcolor--black-oil;
      opacity: 1;
    }
  }
}
</style>
