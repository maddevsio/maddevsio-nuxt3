<script setup lang="ts">
import { usageScenarios } from '~/components/CaseStudies/NambaFood/constants/nambaFoodConstants'
</script>
<template>
  <section class="container_regular">
    <h2 class="case_title_h2 case_text-align-center m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
      Typical usage scenarios and user roles
    </h2>
    <LazyCaseStudiesUITextParagraph class="case_text-align-center m-48_bottom media-m-24_bottom">
      Namba Food involves several user journeys for different roles. Each user journey required different sets of
      functionalities and user interfaces.
    </LazyCaseStudiesUITextParagraph>
    <div class="case_usage-scenarios">
      <LazyCaseStudiesUICard
        v-for="useCase in usageScenarios"
        :key="useCase.title"
        :class="useCase.classList.cardColor"
        class="case_usage-scenarios-card"
      >
        <LazyCaseStudiesNambaFoodUICardUseCase
          :title="useCase.title"
          :description="useCase.description"
          :file-name="useCase.fileName"
          :file-extension="useCase.fileExtension"
          :alt="useCase.alt || 'Image'"
          :class-list="useCase.classList"
          picture-folder="nambafood"
        />
      </LazyCaseStudiesUICard>
    </div>
  </section>
</template>
