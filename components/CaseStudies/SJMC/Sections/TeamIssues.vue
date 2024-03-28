<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-78_top media-m-48_top m-12_bottom">
        Technical debt
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-12_bottom">
        Although the previous vendors have developed incredible software, an independent organisation prepared a
        detailed audit and evaluated deficiencies or areas of improvement.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-72_bottom media-m-48_bottom">
        The complexity of the system raises particular challenges for the Mad Devs team, as they had to submerge
        themselves into the full comprehensiveness of the Brain solution to be able to improve it. It took our team a
        month of onboarding and reading documentation before we could fix even a minor issue.
      </LazyCaseStudiesUITextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Code refactoring and optimization
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-12_bottom">
        Refactoring the SJMC code and covering it with the unit and integration tests improved the stability and
        usability of both mobile applications and the MMIT Brain.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-72_bottom media-m-48_bottom">
        On top of that, by establishing an efficient testing process we significantly increased iOS and Android
        applications' 40% test coverage that ultimately prevented defect leakage. Moreover, after fighting 1000+ minor
        defects and optimising applications to support the latest mobile operating systems, Mad Devs’ engineers
        successfully finished the technical debt on time and planned the deployment of the changes on site.
      </LazyCaseStudiesUITextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Analytics and user-friendly reports
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        Extensive SJMC data gathered from the Multimedia IT System is organised into user-friendly reports by an
        Analytics feature. Such reports enabled the Centre’s managers to easily track performance and report directly
        to stakeholders.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_middle">
      <LazyCaseStudiesUIPicture
        :shadow="true"
        :width="1025"
        :height="516"
        folder="sjmc"
        file="kibana-reports"
        extension="jpg"
        alt="Kibana Reports Which Help to Manage SJMC Hardware in a Single Dashboard."
      />
    </section>
    <section class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-48_top media-m-24_top m-6_bottom">
        The analytics show the following metrics:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="m-104_bottom media-m-56_bottom">
        <LazyCaseStudiesUIListDotsItem>Number of visitors</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Number of school groups</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Number of students</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Average visit time – i.e. time detected on-site</LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>
          The average length of time of the SJMC Experience – i.e. time between connections to first and last
          site
        </LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>
          Popular stands, by analysing the longevity of visitors listening to/watching/interacting with
          content
        </LazyCaseStudiesUIListDotsItem>
        <LazyCaseStudiesUIListDotsItem>Average time visitors spend in each SJMC zone</LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
    </section>
  </section>
</template>
