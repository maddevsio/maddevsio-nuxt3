<script setup lang="ts">
import { turningPlanList } from '~/components/CaseStudies/Bilimapp/constants/bilimappConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-bilim__plan m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <h3
        class="case_title_h2 m-24_bottom"
      >
        Turning a Plan Into Reality
      </h3>
      <LazyCaseStudiesUITextParagraph
        class="m-48_bottom media-m-24_bottom"
      >
        The application’s end-users were residents of another country. As such, Mad Devs used the empathy map tool to
        deeply understand the stakeholders’ needs. The project manager organized interviews with stakeholders to
        understand the final users’ pains and gains, their environment, and their behaviors.
        Together with the stakeholders, Mad Devs collected data and produced a project roadmap that defined the goals
        and objectives of the project to make the process <strong>efficient.</strong>
      </LazyCaseStudiesUITextParagraph>
      <div>
        <h4
          class="case_title_h4 m-24_bottom"
        >
          Transparency and Management
        </h4>
        <LazyCaseStudiesUITextParagraph
          class="m-24_bottom"
        >
          A fundamental principle of Mad Devs’ project development and communication style is <strong>transparency</strong>,
          both internally and with clients. Their flexible methods and transparency keep the project team engaged
          and allow for relevant adjustments at any time. Every project detail is made clear, and the Mad Devs team
          is always reachable via email, Slack, or Jira.
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph
          class="m-24_bottom"
        >
          Since the Bilim app is not a commercial project, funding is limited.  Therefore, one of the stakeholders’
          requirements was to implement as many no-cost (but still reliable) tools as possible.
          After the application analysis, our developers created a <strong>set of tools</strong> that met requests and ensured
          the sustainable and efficient operation of the application.
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph
          class="m-24_bottom"
        >
          We divided the process into <strong>sprints</strong>—or smaller and more achievable tasks—to ensure that a high-quality
          product was delivered on time. To maintain transparency in the face of asynchronous communication,
          we connected the
          <LazyCaseStudiesUILinkInsideText
            href="https://enji.ai/"
            text-color="blue"
          >
            Enji bot
          </LazyCaseStudiesUILinkInsideText>to the project’s Slack channel and Jira. Enji provides a real-time
          overview of the entire project by collecting data from Jira, analyzing it, and sending
          timely notifications in Slack. This created direct communication lines and reduced the risk of misunderstandings.
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUITextParagraph
          class="m-48_bottom media-m-24_bottom"
        >
          The team’s mission was to make the Bilim application convenient and functional for both final users and
          application administrators. There were four main goals:
        </LazyCaseStudiesUITextParagraph>
        <LazyCaseStudiesUIListDots
          class="m-24_bottom"
        >
          <LazyCaseStudiesUIListDotsCustomCheckMark
            v-for="listItem in turningPlanList"
            :key="listItem.text"
            :background-color="listItem.backgroundColor"
            class="case-bilim__plan-stages-list-item"
          >
            <template #icon>
              <img
                loading="lazy"
                width="25"
                height="25"
                :src="$getMediaFromS3(`/images/Cases/bilimapp/svg/${listItem.icon}.svg`)"
                :alt="listItem.icon"
                class="list-item__box-icon"
              >
            </template>
            <template #description>
              <LazyCaseStudiesUITextParagraph
                :class="`case-bilim__plan-list-item-description text-color-${listItem.textColor}`"
              >
                {{ listItem.text }}
              </LazyCaseStudiesUITextParagraph>
            </template>
          </LazyCaseStudiesUIListDotsCustomCheckMark>
        </LazyCaseStudiesUIListDots>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case-bilim__plan {
  :deep(.list-item-custom-check-mark) {
    padding: 11px 16px 11px 29.5px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    &:first-child {
      padding: 27.5px 16px 27.5px 29.5px;
    }

    &:last-child {
      margin-bottom: 0;
      padding: 19px 16px 19px 29.5px;
    }

    @media screen and (max-width: 768px) {
      &:first-child,
      &:last-child {
        padding: 10px 11px 10px 11.5px;
      }

      align-items: flex-start;
      padding: 10px 11px 10px 11.5px;
      margin-bottom: 10px;
    }
  }

  &-list-item-description {
    font-size: 20px;
    font-weight: 500;
    line-height: 166%;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.02em;
    }
  }
}

.list-item__box-icon {
  vertical-align: text-bottom;
  margin-right: 27.44px;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 16.75px;
  }

  @media screen and (max-width: 430px) {
    width: 12.03px;
    height: 12.03px;
    margin-top: 7px;
  }
}
</style>
