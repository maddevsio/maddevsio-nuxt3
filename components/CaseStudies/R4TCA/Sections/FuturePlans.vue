<template>
  <section class="case-future container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Future plans
    </h2>
    <LazyCaseStudiesUITextParagraph class="case_bold-text m-12_bottom">
      ITC and Mad Devs are hoping for further cooperation, and when the time comes, we are planning to add the following functionality to the digital manual:
    </LazyCaseStudiesUITextParagraph>
    <LazyCaseStudiesUIListDots class="m-48_bottom">
      <LazyCaseStudiesUIListDotsItem>Travel requests: create them; add details; display their lists, statuses, and workflow; and send email notifications</LazyCaseStudiesUIListDotsItem>
      <LazyCaseStudiesUIListDotsItem>Travel calendar and travel request reports</LazyCaseStudiesUIListDotsItem>
      <LazyCaseStudiesUIListDotsItem>Editable captions for initial approach questionnaires (IAQs) and post-mission questionnaires (PMQs)</LazyCaseStudiesUIListDotsItem>
      <LazyCaseStudiesUIListDotsItem>With certain localisation efforts, the app will be fit for similar trade facilitation initiatives in more countries in the future</LazyCaseStudiesUIListDotsItem>
    </LazyCaseStudiesUIListDots>
  </section>
</template>
<style scoped lang="scss">

.case {
  &-future {
    :deep(.case_bold-text.case_paragraph) {
      font-weight: 700
    }
  }
}

:deep(.list-item_dot) {
  margin-bottom: 0;
}
</style>
