<script setup lang="ts">
import { lookingAtFrontendCards } from '~/components/CaseStudies/Bandpay/constants/bandpayConstants'
</script>
<template>
  <section class="container_regular m-96_bottom media-m-48_bottom">
    <h3 class="case_title_h2 m-12_bottom">
      Looking at the frontend
    </h3>
    <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
      We chose React.js to develop the frontend of the BandPay solution,
      taking advantage of the library’s opportunities, such as the following:
    </LazyCaseStudiesUITextParagraph>
    <LazyCaseStudiesUIColoredCards
      grid-type="two-one"
      :cards-data="lookingAtFrontendCards.slice(0, 3)"
      class="m-24_bottom"
    />
    <LazyCaseStudiesUIColoredCards
      grid-type="two-one"
      :cards-data="lookingAtFrontendCards.slice(3)"
      class="m-48_bottom media-m-24_bottom"
    />
    <LazyCaseStudiesUITextParagraph>
      We used Stripe.js and Stripe elements to integrate Stripe in the BandPay
      React app and create custom payment forms. The Mad Devs engineers made it possible to send an
      agreement via email with an inserted link that leads to the payment form UI.
    </LazyCaseStudiesUITextParagraph>
  </section>
</template>
