<script setup lang="ts">
defineProps({
  colorTheme: {
    type: String,
    default: 'black',
  },
})
</script>
<template>
  <div :class="`spinner-loader spinner-loader--${colorTheme}`" />
</template>
<style lang="scss" scoped>
.spinner-loader {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1.2s linear infinite;
  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    animation: prixClipFix 2.2s linear infinite ;
  }

  &--black {
    &::before {
      border: 5px solid #fff7;
    }
  }

  &--white {
    &::before {
      border: 5px solid #1117;
    }
  }
}

@keyframes rotate {
  100%   {transform: rotate(360deg)}
}

@keyframes prixClipFix {
  0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
  25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
  50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
  75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
  100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
}
</style>
