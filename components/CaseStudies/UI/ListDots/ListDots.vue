<template>
  <ul class="case_list">
    <slot />
  </ul>
</template>
<style lang="scss" scoped>
.case_list {
  display: flex;
  flex-direction: column;
}
</style>
