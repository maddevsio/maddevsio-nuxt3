<script setup lang="ts">
import { teamBandpay } from '~/components/CaseStudies/Bandpay/constants/bandpayConstants'

const intoView = ref(false)
const meetTheTeamList = ref<HTMLElement>()
const mountWhenVisible = () => {
  const Observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intoView.value = true
        observer.unobserve(entry.target)
      }
    })
  })
  if (meetTheTeamList.value) {
    Observer.observe(meetTheTeamList.value)
  }
}

onMounted(() => {
  mountWhenVisible()
})
</script>
<template>
  <section class="container_regular">
    <h3 class="case_title_h2 m-24_bottom">
      Meet the team
    </h3>
    <div
      ref="meetTheTeamList"
    >
      <LazyCaseStudiesUIListTeam
        v-if="intoView"
        class="m-72_bottom media-m-41_bottom"
      >
        <LazyCaseStudiesUIListTeamItem
          v-for="member in teamBandpay"
          :key="member.name"
          v-bind="member"
        />
      </LazyCaseStudiesUIListTeam>
    </div>
  </section>
</template>
