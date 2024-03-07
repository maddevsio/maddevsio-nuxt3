<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_megauni__workflow m-96_bottom media-m-48_bottom">
    <div
      class="container_regular m-48_bottom media-m-24_bottom"
    >
      <h3 class="case_title_h2 m-12_bottom">
        Project Development Workflow
      </h3>
      <LazyCaseStudiesUITextParagraph>
        MegaUni and Mad Devs teams used a simple, efficient Agile development workflow to build this platform.
        We used various tools to track teamwork, such as Jira, Confluence and Slack, making it was easier for
        team members to communicate, monitor the development process, and prepare technical and user guides.
        For project managers, it was simpler to prioritize tasks and get feedback from the clients’ team.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver p-50_top p-50_bottom media-p-12_top media-p-12_bottom m-48_bottom media-m-12_bottom">
      <div class="container_regular">
        <LazySharedLottieMad
          class="case_lottie"
          height="544px"
          :lottie-link="$getMediaFromS3(`/images/Cases/megauni/lottie/project-workflow.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div
      class="container_regular m-48_bottom media-m-24_bottom"
    >
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        An organized project management workflow helps projects run more efficiently.
        It increases collaboration, saves time, and helps to get desired results.
        Not to be a stickler for details, but in brief, tasks were assigned a priority by the client team,
        or after discussion by managers with the client and based on the priority, tasks were pulled
        from the backlog and transferred to the 'TO DO' status. From this moment, the team can see the task on the Kanban board.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        The image above clearly shows that the task goes through several stages, moving along the Kanban board.
        When its functionality is ready, it is sent for review, where it must be approved and tested on staging.
        As throughout the whole development and testing processes, the project managers are also actively engaged
        with the team and constantly support stakeholders in reviewing and accepting the work.
        It is worth noting the significant contribution of the stakeholders and clients’ team in the work process.
        They always kept in touch and timely reviewed and tested new features as soon as they were ready.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph>
        To set up a smooth cooperation between our team and the external testing team from MegaUni,
        Mad Devs created a separate Jira board where we could interact with each other and monitor the testing process.
        It became possible to see what is being tested and what issues need to be fixed. Moreover, project managers
        could review issues there and accordingly assign them to the development team. Thus, the workflow became
        more flexible and transparent, and the process became simpler and collaborative.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-48_bottom media-m-24_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="safari top bar"
        />
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1028"
          :height="502.81"
          folder="megauni"
          file="google-meet"
          extension="png"
          alt="Google Meet MegaUni"
        />
      </div>
    </div>
    <div
      class="container_regular m-48_bottom media-m-24_bottom"
    >
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        MegaUni with Mad Devs divided the development process into three milestones for the MVP version,
        each consisting a specific set of features that must be delivered on time. For convenient tracking
        of this task by milestones, the Mad Devs team used a Jiras functions: Releases. One benefit of using
        Releases is that it provides a clear picture of where we are, where we are going, and what to expect.
        As a transparency-providing feature, it helps the client and the development team see the bigger picture.
        In this way, it becomes possible to wrap tasks in one scope, check task statuses, and track when
        the milestone starts and ends. It was also possible to convert release notes and send them to the client
        to inform them about project changes and precise adjustments likely to affect their major and minor experiences.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph>
        Throughout the project development process, teams always communicated via Slack.
        We had daily calls with the team and asynchronous daily standups in Slack. The Mad Devs team
        in Slack connected the Enji.ai bot. Generally,
        <a
          href="https://enji.ai/"
          target="_blank"
          rel="noopener"
          class="case_link-in-text"
        >
          Enji.ai
        </a> is a product that automates the work processes
        of software development teams and has the ability to plan the company’s finances. The system collects
        data from Jira, Slack, and the code repository and then provides a comprehensive project overview.
        This system allowed our teamwork to become more organized.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_middle m-48_bottom media-m-24_bottom">
      <div class="case_image-wrapper case_box-shadow">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1028"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="safari top bar"
        />
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="true"
          :width="1028"
          :height="720"
          folder="megauni"
          file="stand-ups"
          extension="png"
          alt="Stand Up MD"
        />
      </div>
    </div>
    <div
      class="container_regular"
    >
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        Besides those activities, Mad Devs also practised daily calls with the MegaUni product team.
        During these calls, we not only discussed priority tasks, feature implementations, and timelines
        but also demonstrated features according to their readiness. At the end of each milestone,
        the team held retrospective meetings that let us pause and think about what we had done well,
        what went wrong, and how to improve future performances.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph>
        In the Confluence work process, we practised two types of documentation. First is technical
        documentation prepared by the developers, which describes technical nuances of how the required
        feature was deployed with standard Open edX tools. It is necessary because Open edX is an open-source
        platform that represents only the essential functions, which were not enough for the client project.
        The second type is user guides that describe how to configure and use the features.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
