<script setup lang="ts">
import { careersCustomers } from '~/components/Careers/constants/careersConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div
    class="projects-countries container"
  >
    <h2
      class="projects-countries_title"
    >
      Global projects in 20+ countries
    </h2>
    <p
      class="projects-countries_description"
    >
      We build solutions for 35M+ users worldwide
    </p>
    <div class="projects-countries_img-wrap">
      <img
        loading="lazy"
        :src="$getMediaFromS3('/images/Careers/svg/map.svg')"
        alt="global projects in 20+ countries"
        class="projects-countries_img"
        width="1240"
        height="558"
      >
    </div>
    <LazyCareersUICustomersList
      class="projects-countries_customers-list"
      :customers="careersCustomers"
    />
    <div class="projects-countries_link-btn">
      <LazySharedUIButton
        is-link
        to="https://maddevs.io/case-studies/"
      >
        See all case studies
      </LazySharedUIButton>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.projects-countries {
  margin-bottom: 150px;

  &_title,
  &_description {
    letter-spacing: -0.04em;
    line-height: 72px;
    text-align: center;
    color: $text-color--white;
  }

  &_title {
    @include font('Poppins', 60px, 700);
  }

  &_description {
    margin-bottom: 9px;
    @include font('Inter', 20px, 400);
  }

  &_img-wrap {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  &_img {
    width: 100%;
    height: 100%;
    display: block;
  }

  &_customers-list {
    margin-bottom: 40px;
  }

  &_link-btn {
    text-align: center;
    .ui-button {
      @include font('Inter', 15px, 400);
      padding: 15px 31px 15px 28px;
      line-height: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 98px;

    &_title {
      margin-bottom: 7px;
      font-size: 44px;
      line-height: 50px;
    }

    &_description {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 27px;
    }
  }

  @media screen and (max-width: 620px) {
    &_title {
      font-size: 34px;
      line-height: 118%;
    }

    &_description {
      margin-bottom: 35px;
    }

    &_link-btn a {
      display: block;
    }
  }
}
</style>
