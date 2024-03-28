<script setup lang="ts">
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  isLink: {
    type: Boolean,
    default: false,
  },

  to: {
    type: String,
    default: '/',
  },

  fullWidth: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
const router = useRouter()
const setNoopener = ref<boolean | null | 'noopener'>(null)
const isTag = computed(() => {
  if (props.isLink) { return 'a' }
  return 'button'
})

const linkTo = computed(() => {
  if (props.isLink) { return props.to }
  return null
})

const handleClick = () => {
  if (props.isLink) {
    const { ourDomain, url } = checkAndExtractDomain(props.to)
    if (ourDomain) {
      router.push(url)
    } else {
      const link = document.createElement('a')
      link.href = props.to
      link.target = '_blank'
      link.click()
    }
  }
  if (!props.disabled) { emit('click') }
}

onMounted(() => {
  setNoopener.value = !checkAndExtractDomain(props.to).ourDomain && 'noopener'
})
</script>
<template>
  <Component
    :is="isTag"
    :href="linkTo"
    class="ui-button"
    :class="{
      'ui-button--disabled': disabled,
      'ui-button--full-width': fullWidth,
    }"
    :disabled="disabled"
    :rel="setNoopener"
    @click.prevent="handleClick"
  >
    <span v-if="loading">Waiting...</span>
    <slot v-else />
  </Component>
</template>
<style lang="scss" scoped>
.ui-button {
  @include font('Inter', 16px, 600);
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $border-color--red-opacity;
  background-color: $bgcolor--red;
  border-radius: 4px;
  color: $text-color--white;
  letter-spacing: -0.02em;
  line-height: 24px;
  box-shadow: none;
  transition: 0.4s;
  cursor: pointer;

  &:not(.ui-button--disabled) {
    &:hover {
      background-color: $bgcolor--red;
      color: $text-color--white;
    }

    &:active {
      background-color: $button-active--red;
      border-color: $button-active-border--red;
    }
  }

  &--full-width {
    display: flex;
    width: 100%;
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    user-select: none;
  }

  &--transparent-bgc {
    background-color: transparent;
    color: $text-color--red;
  }

  &_submit-button-footer {
    @include font('Inter', 16px, 400);
    width: 100%;
    height: 54px;
    line-height: 27px;
    letter-spacing: -0.1px;
    font-weight: 400;
  }

  @media only screen and (max-width: 360px) {
    font-size: 14px;
  }
}
</style>
