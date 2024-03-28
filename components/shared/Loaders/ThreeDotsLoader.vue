<template>
  <div class="three-dots-loader" />
</template>
<style lang="scss" scoped>
.three-dots-loader {
  width: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: threeDotsLoader 1s infinite linear alternate;
}
@keyframes threeDotsLoader {
  0%  {box-shadow: 20px 0 #fff, -20px 0 #fff2; background: #fff }
  33% {box-shadow: 20px 0 #fff, -20px 0 #fff2; background: #fff2}
  66% {box-shadow: 20px 0 #fff2,-20px 0 #fff; background: #fff2}
  100%{box-shadow: 20px 0 #fff2,-20px 0 #fff; background: #fff }
}

</style>
