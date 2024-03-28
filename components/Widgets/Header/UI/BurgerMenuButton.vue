<script setup lang="ts">
const {
  toggleMobileMenu,
  isActiveMobileMenu,
} = defineProps({
  toggleMobileMenu: {
    type: Function,
    required: true,
  },

  isActiveMobileMenu: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <button
    type="button"
    data-testid="test-burger"
    class="burger-menu-button"
    @click="toggleMobileMenu"
  >
    <svg
      v-if="isActiveMobileMenu"
      class="burger-menu-button--close"
      data-testid="test-burger--close"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.807613 19.1924L19.1924 0.807623M19.1914 19.1924L0.806641 0.807617"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <svg
      v-else
      class="burger-menu-button--open"
      width="30"
      height="10"
      viewBox="0 0 30 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H30V1H0V0Z"
        fill="#F5F7F9"
      />
      <path
        d="M0 9H30V10H0V9Z"
        fill="#F5F7F9"
      />
    </svg>
  </button>
</template>
<style lang="scss" scoped>
.burger-menu-button {
  display: none;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    display: flex;
  }
}
</style>
