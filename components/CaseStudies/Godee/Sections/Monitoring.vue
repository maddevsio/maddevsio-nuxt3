<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Monitoring
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-12_bottom">
        <!-- Выставить оступы на мобиле -->
        We believe that every production system requires proper monitoring. For this purpose, we use the Datadog
        service, which allows us to discover possible issues before they affect our users.
      </LazyCaseStudiesUITextParagraph>
      <p class="m-12_bottom case_monitoring-section-bold">
        Here is an example of our monitoring configuration for the GoDee project:
      </p>
    </section>
    <section class="container_middle m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUIPicture
        :shadow="true"
        :width="1028"
        :height="463"
        :background="true"
        folder="godee"
        file="datadog"
        extension="jpg"
        alt="GoDee: Monitoring Configuration for Transportation App."
      />
    </section>
  </section>
</template>
