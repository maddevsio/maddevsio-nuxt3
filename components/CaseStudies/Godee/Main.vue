<script setup lang="ts">
const isIphone = ref(false)

onMounted(() => {
  isIphone.value = !!navigator.userAgent.match(/(iPhone)/i)
  lazyLoadVideo()
})
</script>
<template>
  <LazyCaseStudiesGodeeSectionsAbout />
  <LazyCaseStudiesGodeeSectionsIssuesAndSolutions />
  <LazyCaseStudiesGodeeSectionsParallaxImage />
  <LazyCaseStudiesGodeeSectionsIssuesAndSolutionCards />
  <section class="container_full case_video-wrapper m-60_top media-m-24_top m-96_bottom media-m-48_bottom">
    <iframe
      width="1440"
      height="809"
      src="https://www.youtube.com/embed/_XCRbXmTUwI"
      frameborder="0"
      allowfullscreen
    />
  </section>
  <LazyCaseStudiesGodeeSectionsCollaborations />
  <LazyCaseStudiesGodeeSectionsMvp />
  <LazyCaseStudiesGodeeSectionsBeforeAfter />
  <LazyCaseStudiesGodeeSectionsDevelopmentGoals />
  <LazyCaseStudiesGodeeSectionsPreviewCards />
  <LazyCaseStudiesGodeeSectionsIntellegentManagementPanel :is-iphone="isIphone" />
  <LazyCaseStudiesGodeeSectionsTripsMonitor :is-iphone="isIphone" />
  <LazyCaseStudiesGodeeSectionsRouteOptimisation :is-iphone="isIphone" />
  <LazyCaseStudiesGodeeSectionsRealTimeETA />
  <LazyCaseStudiesGodeeSectionsInfrastructureScheme />
  <LazyCaseStudiesGodeeSectionsTechnologyStack />
  <LazyCaseStudiesGodeeSectionsMonitoring />
  <LazyCaseStudiesGodeeSectionsStableScalableSolution />
  <LazyCaseStudiesGodeeSectionsTeam />
</template>
