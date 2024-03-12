<script setup lang="ts">
defineProps({
  buttonText: {
    type: String,
    default: 'See more',
  },
})

const emit = defineEmits(['click'])
const handleClick = event => {
  emit('click', event)
}
</script>
<template>
  <button
    class="load-more-button"
    data-testid="test-load-more-button"
    @click="handleClick"
  >
    {{ buttonText }}
  </button>
</template>
<style scoped lang="scss">
.load-more-button {
  display: block;
  margin: 0 auto;
  padding: 12px 156px;
  border: 1px solid $border-color--black;
  font-size: 16px;
  line-height: 26px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  font-family: inherit;
  color: $text-color--black;
  transition: 0.4s;

  &:hover {
    background-color: $bgcolor--black;
    color: $text-color--white;
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
    padding: 12px 0;
  }
}
</style>
