<template>
  <div class="default-layout">
    <NuxtLoadingIndicator
      color="#ec1c24"
      :height="2"
    />
    <WidgetsHeader />
    <NuxtLayout>
      <main class="main-section">
        <NuxtPage />
      </main>
    </NuxtLayout>
    <footer>FOOTER</footer>
  </div>
</template>
<style lang="scss" scoped>
.default-layout {
  background-color: $bgcolor--black;
}

.main-section {
  margin-top: -66px !important;
  position: relative;
  z-index: 1;
}
</style>
