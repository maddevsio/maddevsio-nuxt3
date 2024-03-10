<template>
  <LazyCareersSectionsStartScreen />
  <LazyCareersSectionsProjectsCountries />
  <LazyCareersSectionsBenefits />
  <LazyCareersSectionsKeyMetrics />
  <div class="careers_white-section">
    <LazyCareersSectionsEmployeesBenefits />
    <LazyCareersSectionsOpenPositions />
    <LazyCareersSectionsCTABanner />
  </div>
  <LazyCareersUIScrollToPositionsLink />
</template>
<style lang="scss" scoped>
.careers {
  &_white-section {
    background-color: $bgcolor--white-primary;
  }
}
</style>
