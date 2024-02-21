<script setup lang="ts">
const {
  showModal,
} = defineProps({
  showModal: {
    type: Function,
    required: true,
  },
})
</script>
<template>
  <button
    type="button"
    class="contact-me-button"
    @click="showModal"
  >
    Get in touch
  </button>
</template>
<style lang="scss" scoped>
.contact-me-button {
  @include font('Inter', 15px, 600);
  line-height: 25px;
  letter-spacing: -0.1px;
  color: $text-color--chinese-black;
  min-width: 122px;
  border-radius: 4px;
  border: none;
  padding: 7.5px 28.5px;
  transition: all 0.3s ease;
  background-color: $bgcolor--white-primary;
  position: relative;
  overflow: hidden;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: $text-color--chinese-black;
  }
  &:active {
    background-color: $bgcolor--red;
    color: $text-color--white-primary;
  }
  @media screen and (max-width: 1026px) {
    display: none;
  }

  &::after {
    content: '';
    width: 120px;
    height: 100%;
    left: 0;
    top: 0;
    transform: translateX(-120px);
    position: absolute;
    background: linear-gradient(90deg, transparent 0%, #000 50%, transparent 100%) no-repeat 0;
    z-index: 9;
    opacity: 0.3;
    animation: blink-btn 20s infinite cubic-bezier(0,1.08,1,.99);
    will-change: transform;
  }

  @keyframes blink-btn {
    20%, 100% {
      transform: translateX(130%);
    }
    0% {
      transform: translateX(-120px);
    }
    10% {
      transform: translateX(130%);
    }
  }
}
</style>
