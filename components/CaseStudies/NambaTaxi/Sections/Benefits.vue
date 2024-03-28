<script setup lang="ts">
import { nambaBenefits } from '~/components/CaseStudies/NambaTaxi/constants/nambaTaxiConstants'
</script>
<template>
  <section
    class="container_regular m-96_bottom media-m-48_bottom"
  >
    <h2
      class="case_title_h2 m-12_bottom "
    >
      Why the city needed a better taxi service
    </h2>
    <LazyCaseStudiesUITextParagraph class="m-12_bottom">
      Before Namba Taxi, people in Bishkek had two options if they needed a taxi: a private driver or a dispatcher-operated service. Arbitrary rates and the need to hitchhike made the service unreliable and inconvenient for a modern city resident who wants to plan their schedule and make it to places on time. Dispatcher-based systems, in turn, lack efficiency: the intermediary between the passenger and the driver makes the whole process overly time-consuming.
    </LazyCaseStudiesUITextParagraph>
    <LazyCaseStudiesUITextParagraph class="m-96_bottom media-m-48_bottom">
      Automation of the driver-passenger interactions is what Namba Taxi decided to pursue. Mad Devs’ mission is to
      automate as many interactions as possible: we want to let machines do everything that they can do better than
      humans. Namba Taxi wanted an automated, next-generation, Uber-like transportation solution. We undertook the
      challenge of developing this software. We undertook the challenge of developing this software and started in 2013.
    </LazyCaseStudiesUITextParagraph>
    <h3
      class="case_title_h2 m-50_bottom media-m-12_bottom"
    >
      Benefits of Namba Taxi
    </h3>
    <LazyCaseStudiesUIParallaxCards
      :data-cards="nambaBenefits"
    />
  </section>
</template>
