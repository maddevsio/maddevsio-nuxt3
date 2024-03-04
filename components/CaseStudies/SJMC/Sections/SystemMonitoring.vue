<script setup lang="ts">

import { swiperGrafanaPrometheus } from '~/components/CaseStudies/SJMC/constants/sjmcConstants'
</script>
<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        SJMC System monitoring
      </h2>
      <LazyCaseStudiesUITextParagraph>
        System monitoring is a proactive method to improve the quality of SJMC software and hardware by gathering data
        from 6 servers and 100+ BRIX multimedia computers highlighting areas that might need Mad Devs’ engineers'
        attention.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
        Sophisticated system monitoring is the fight life of defence against downtime.
      </LazyCaseStudiesUITextQuote>
      <h3 class="case_title_h3 m-12_bottom">
        Grafana + Prometheus
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        To achieve maximum observability of the SJMC hardware Grafana was used to build all the graphs for the current
        state. It enables the Mad Devs team to configure the reports and alerts if any of the system components fail
        or are under high load or in case of any other problem.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_middle m-48_bottom media-m-24_bottom">
      <LazyCaseStudiesUISwiperWithThumbs
        :components="swiperGrafanaPrometheus"
        :safari-top-bar="false"
        :box-shadow="true"
        safari-top-bar-image="safari-top-bar"
        safari-top-bar-alt="Safari Top Bar."
        :width="1026"
        :height="608"
      />
    </section>
    <section class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-56_bottom media-m-24_bottom">
        Prometheus acts as the storage backend and exposes a wide variety of metrics gathered from 6 servers while
        Grafana acts as a visualisation layer and works as the interface for analysis and visualisation.
      </LazyCaseStudiesUITextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Elasticsearch+Kibana+<br class="case_mobile-break">Logstash
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        Logstash ingests, transforms, and ships SJMC logging data from 100+ BRIX (multimedia computers). Before
        unstructured logging data was scattered across hundreds of folders and was not properly monitored, which
        ultimately caused breakages and deterioration of expensive hardware. Now Logstash collects and transforms
        logging data by sending it to Elasticsearch. Elasticsearch enables the SJMC to store, search, and analyse
        logged data with ease at scale.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_middle">
      <LazyCaseStudiesUIPicture
        :shadow="true"
        :width="1025"
        :height="525"
        folder="sjmc"
        file="kibana"
        extension="jpg"
        alt="Kibana Reports Which Help to Manage SJMC Hardware in a Single Dashboard."
      />
    </section>
    <section class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-48_top media-m-24_top m-72_bottom media-m-48_bottom">
        Kibana pulls up logged data and creates user-friendly visualizations with charts, graphs, heatmaps, and more.
        It is easy to understand solutions to manage SJMC hardware in a single dashboard.
      </LazyCaseStudiesUITextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Continuous integration and delivery (CI/CD)
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-72_bottom media-m-48_bottom">
        CI/CD shortens the feedback cycle and allows Mad Devs’ engineers to minimise risks and increase productivity
        by configuring CI/CD for autotest running and automatic deployment.
      </LazyCaseStudiesUITextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Sentry
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-96_bottom media-m-72_bottom">
        Integration of Sentry provides the Mad Devs team with automated error tracking and shows us every fault that
        happens with the SJMC MMIT Brain by organising its logs. Sentry enables the Mad Devs team to identify,
        prioritise, and reproduce each issue.
      </LazyCaseStudiesUITextParagraph>
    </section>
  </section>
</template>
