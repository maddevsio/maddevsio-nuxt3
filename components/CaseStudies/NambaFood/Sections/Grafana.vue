<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-96_top m-12_bottom media-m-48_top">
        Grafana — Docker containers’ monitoring service
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom">
        To monitor the stability of Namba Food software, Mad Devs has integrated Grafana. It allows our developers to
        keep track of services in Docker containers. Grafana shows how the load in the project is balanced, including
        disk space consumed, memory allocated, swap, load, container uptime and other parameters.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_middle">
      <LazyCaseStudiesUIPicture
        :shadow="true"
        :width="1026"
        :height="593"
        folder="nambafood"
        file="grafana"
        extension="jpg"
        alt="Namba Food: Software Stability Monitoring with Grafana."
      />
    </section>
  </section>
</template>
