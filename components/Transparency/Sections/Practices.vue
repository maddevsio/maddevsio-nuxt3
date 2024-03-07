<script setup lang="ts">
const cardsData = [
  {
    icon: 'images/transparency/svg/retrospectives.svg',
    title: 'Retrospectives',
    titleColor: '#5159F6',
    description: 'Transparency enhances coordination between the PM, team, and customers. Retrospectives drive structured reflections, feedback, and issue identification using Miro whiteboards.',
  },
  {
    icon: 'images/transparency/svg/stand-ups.svg',
    title: 'Stand-ups & status-checks',
    titleColor: '#00C05B',
    description: 'Maintaining transparency through daily team stand-ups keeps customers informed about progress and challenges.',
  },
  {
    icon: 'images/transparency/svg/knowledge.svg',
    title: 'Knowledge management',
    titleColor: '#F24E1E',
    description: 'Documentation is vital across projects to prevent redundancy and micromanagement. Structured storage simplifies teamwork.',
  },
  {
    icon: 'images/transparency/svg/worklogs.svg',
    title: 'Worklogs',
    titleColor: '#9963F6',
    description: 'Worklogs are essential for accountability and transparency, allowing customers to review and discuss results for productivity assessment.',
  },
  {
    icon: 'images/transparency/svg/field-to-work.svg',
    title: 'Field of work',
    titleColor: '#2DA7FF',
    description: 'Our priority when working with customers are plan, sprint, and task breakdown in Jira. Customers and PMs track progress and ensure task sequence and collaboration.',
  },
  {
    icon: 'images/transparency/svg/tracking-project.svg',
    title: 'Tracking project progress',
    titleColor: '#1F4DC3',
    description: 'We use Jira filters and email notifications for customer updates and sync Jira and GitLab with Slack for real-time notifications.',
  },
]

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="transparency-practices">
    <div class="container transparency-practices__container">
      <LazyTransparencyUITitle
        title-tag="h2"
        with-subtitle
        max-width-title="702.399px"
        max-width-subtitle="969px"
      >
        <template #title>
          Our practices to maintain transparency
        </template>
        <template #subtitle>
          Although we have people spread around 13 time zones, we stay up-to-date and involved in each other’s projects.
          To do this, we use seven tools that help us keep in touch and be transparent.
        </template>
      </LazyTransparencyUITitle>
      <div class="transparency-practices__cards">
        <div
          v-for="(card, cardIdx) in cardsData"
          :key="`${card.icon}--${cardIdx}`"
          class="transparency-practices__card"
        >
          <div class="transparency-practices__card-header">
            <img
              loading="lazy"
              :src="$getMediaFromS3(card.icon)"
              :alt="card.title"
              width="50"
              height="50"
              class="transparency-practices__card-icon"
            >
            <h3
              class="transparency-practices__card-title"
              :style="`color: ${card.titleColor}`"
            >
              {{ card.title }}
            </h3>
          </div>
          <p class="transparency-practices__card-description">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.transparency-practices {
  padding-top: 128px;
  background-color: $bgcolor--white-primary;

  &__cards {
    @include grid(repeat(2, 1fr), auto, 22px, 20px);
    margin-top: 48px;
  }

  &__card {
    background-color: $bgcolor--cultured;
    border-radius: 10px;
    padding: 45px 55px 57px;

    &-header {
      display: flex;
      align-items: center;
      gap: 19px;
    }

    &-icon {
      width: 50px;
      height: 50px;
      display: block;
    }

    &-title {
      @include font('Inter', 32px, 700);
      line-height: 150%;
      letter-spacing: -1px;

      @include old-safari-support {
        margin-left: 19px;
      }
    }

    &-description {
      @include font('Inter', 20px, 400);
      line-height: 150%;
      letter-spacing: -1px;
      color: $text-color--black-pale;
      margin-top: 17px;
    }
  }

  @include laptop-media-query {
    padding-top: 72px;

    &__cards {
      gap: 18px;
    }

    &__card {
      padding-inline: 45px;

      &-title {
        font-size: 30px;
      }
    }
  }

  @media screen and (max-width: 1026px) {
    padding-top: 48px;

    .container {
      padding-inline: 77px;
    }

    &__card {
      padding: 32px 24.5px;

      &-title {
        font-size: 20px;
        line-height: 130%;
      }

      &-icon {
        width: 30px;
        height: 30px;
      }

      &-description {
        font-size: 14px;
        line-height: 130%;
        margin-top: 18px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding-inline: 56px;
      max-width: 620px;
    }
  }

  @media screen and (max-width: 680px) {
    &__cards {
      @include grid(repeat(1, 1fr), auto, 22px, 15px);
      margin-top: 19px;
    }

    &__card {
      padding: 32px 21px;

      &-title {
        font-size: 22px;
        max-width: 195px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      padding-inline: 24px;
    }
  }
}
</style>
