<template>
  <div class="default-layout">
    <header>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/project-discovery/">
        Project discovery
      </NuxtLink>
    </header>
    <main class="main-section">
      <slot />
    </main>
    <footer>FOOTER</footer>
  </div>
</template>
<style lang="scss" scoped>
.default-layout {
  background-color: $bgcolor--black;
}

header {
  width: 100%;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;
}

.main-section {
  margin-top: -66px !important;
  position: relative;
  z-index: 1;
}
</style>
