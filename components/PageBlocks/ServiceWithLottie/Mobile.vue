<script setup lang="ts">
import type { PropType } from 'vue'

interface GetLinkProps {
  softwareDevelopmentLink: string
  hrPracticesLink: string
  transparentStaffingLink: string
  technicalAuditLink: string
  technicalInfrastructureLink: string
  techMarketingLink: string
  projectDiscoveryLink: string
  customSoftwareLink: string
}

interface Button {
  label: string
  lottieFrame: number
}

interface CollectedData extends GetLinkProps {
  icons: string[]
  buttons: Button[]
}

const props = defineProps({
  collectedData: {
    type: Object as PropType<CollectedData>,
    required: true,
    default: () => ({}),
  },
})

const indentFromHeader = 230
const { $getMediaFromS3 } = useMediaFromS3()
const activeAccordion = ref('Tech and Development')

const getLottieLink = (groupIdx: number) => {
  switch (groupIdx) {
  case 1: return 'blue-graphic'
  case 2: return 'red-graphic'
  case 3: return 'yellow-graphic'
  default: return ''
  }
}

const getGroupLinks = (groupIdx: number, props: GetLinkProps) => {
  switch (groupIdx) {
  case 1: return [
    {
      url: props.customSoftwareLink,
      label: 'Custom Software Development',
      haveLink: Boolean(props.customSoftwareLink),
    },
    {
      url: props.transparentStaffingLink,
      label: 'Build-Operate-Transfer',
      haveLink: Boolean(props.transparentStaffingLink),
    },
    {
      url: props.technicalInfrastructureLink,
      label: 'Technical Infrastructure Optimization',
      haveLink: Boolean(props.technicalInfrastructureLink),
    },
  ]
  case 2: return [
    {
      url: props.softwareDevelopmentLink,
      label: 'Software Development Process Consulting',
      haveLink: Boolean(props.softwareDevelopmentLink),
    },
    {
      url: props.technicalAuditLink,
      label: 'Technical Audit',
      haveLink: Boolean(props.technicalAuditLink),
    },
    {
      url: props.projectDiscoveryLink,
      label: 'Project Discovery',
      haveLink: Boolean(props.projectDiscoveryLink),
    },
  ]
  case 3: return [
    {
      url: props.hrPracticesLink,
      label: 'HR Practices in Tech Companies Consulting',
      haveLink: Boolean(props.hrPracticesLink),
    },
    {
      url: props.techMarketingLink,
      label: 'Tech Marketing Consulting & Support',
      haveLink: Boolean(props.techMarketingLink),
    },
  ]
  default: return []
  }
}

const getData = (props: CollectedData) => {
  return props.buttons.map((item, itemIdx) => ({
    buttonLabel: item.label,
    buttonIcon: props.icons[itemIdx],
    links: getGroupLinks(itemIdx + 1, props),
    lottieLink: getLottieLink(itemIdx + 1),
  }))
}

const dataForCreateAccordion = getData(props.collectedData)

const changeActiveAccordion = async ({
  $event,
  buttonLabel,
}: { $event: Event, buttonLabel: string }) => {
  activeAccordion.value = buttonLabel
  await useScrollToTab($event, indentFromHeader)
}
</script>
<template>
  <div class="container service-slice-mobile">
    <div
      v-for="(accordion, accordionIdx) in dataForCreateAccordion"
      :key="`${accordion.buttonIcon}-${accordionIdx}`"
      class="service-slice-mobile__item"
      :class="{ 'service-slice-mobile__item--active': activeAccordion === accordion.buttonLabel }"
    >
      <button
        class="service-slice-mobile__item-button"
        @click="changeActiveAccordion({
          $event,
          buttonLabel: accordion.buttonLabel
        })"
      >
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/custom/about/${accordion.buttonIcon}`)"
          :alt="accordion.buttonLabel || 'Button group icon'"
          width="18"
          height="18"
          class="service-slice-mobile__button-icon"
        >
        {{ accordion.buttonLabel }}
      </button>
      <div
        v-show="activeAccordion === accordion.buttonLabel"
        class="service-slice-mobile__content"
      >
        <div
          class="service-slice-mobile__content-lottie"
        >
          <SharedLottieMad
            class="case_lottie"
            height="182px"
            :lottie-link="$getMediaFromS3(`/images/custom/about/${accordion.lottieLink}.json`)"
            :autoplay="true"
          />
        </div>
        <ol
          class="service-slice-mobile__content-list"
        >
          <li
            v-for="(link, linkIdx) in accordion.links"
            :key="`link-${linkIdx}`"
            class="service-slice-mobile__content-list-item"
          >
            <NuxtLink
              v-if="link.haveLink"
              :to="link.url"
              class="service-slice-mobile__content-list-item-link"
            >
              {{ link.label }}
            </NuxtLink>
            <span
              v-else
              class="service-slice-mobile__content-list-item-link service-slice-mobile__content-list-item-link--not-link"
            >
              {{ link.label }}
            </span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.service-slice-mobile {
  display: none;
  visibility: hidden;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (max-width: 875px) {
    display: flex;
    visibility: visible;
  }

  &__item {
    background: $bgcolor--black-pale;
    opacity: 0.4;
    border-radius: 9px;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    will-change: opacity;

    &--active {
      opacity: 1;
    }

    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-bottom: 24px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &__item-button {
    @include font('Inter', 18px, 600);
    line-height: 130%;
    color: $text-color--white-primary;
    padding: 24px 5px 24px 24px;
    background: transparent;
    display: flex;
    align-items: center;
    column-gap: 11px;
    width: 100%;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 550px) {
      font-size: 16px;
    }
  }

  &__button-icon {
    @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
      @supports not (translate: 0) { /* Проверка на версию Safari */
        margin-right: 11px;
        display: block;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
    column-gap: 69px;
    padding: 4px 24px 24px;

    &-lottie {
      max-width: 175px;

      @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
        @supports not (translate: 0) { /* Проверка на версию Safari */
          @media screen and (max-width: 550px) {
            margin-bottom: 25px;
          }
        }
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      margin: 0;
      padding: 0;

      &-item {
        color: $text-color--grey-opacity-40-percent;

        @media not all and (min-resolution:.001dpcm) { /* Проверка на Safari */
          @supports not (translate: 0) { /* Проверка на версию Safari */
            margin-bottom: 24px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }

        &-link {
          @include font('Inter', 16px, 400);
          line-height: 130%;
          color: $text-color--grey-opacity-40-percent;
          border-bottom: 1px solid #47484A;

          &--not-link {
            border: none;
          }
        }
      }
    }

    @media screen and (max-width: 550px) {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 25px;

      &-lottie {
        align-self: center;
        max-width: 279px;
      }

      &-list {
        padding-left: 20px;
      }
    }
  }
}
</style>
