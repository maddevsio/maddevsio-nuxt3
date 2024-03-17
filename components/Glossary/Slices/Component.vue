<script setup lang="ts">
import { glossaryComponents } from '~/components/Glossary/Slices/index'

defineProps({
  slices: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div class="glossary-components">
    <LazySliceZone
      :slices="slices"
      :components="glossaryComponents"
    />
  </div>
</template>

<style lang="scss" scoped>
.glossary-components {
  max-width: 100%;
  color: $text-color--grey-20-percent;
}

:deep(h1, h2, h3, h4, h5, h6) {
  color: $text-color--white-primary;
  margin-top: 48px;
  margin-bottom: 12px;
}

:deep(h1) {
  @include font('Inter', 38px, 700);
  display: none; // h1 tag should not be used
}

:deep(h2) {
  @include font('Inter', 32px, 600);
  @include title($text-color--white-primary, 32px, -0.04em);
}

:deep(h3) {
  @include font('Inter', 26px, 600);
}
:deep(h4) {
  @include font('Inter', 21px, 800);
}
:deep(h5) {
  @include font('Inter', 17px, 700);
}
:deep(h6) {
  @include font('Inter', 14px, 700);
}

:deep(a) {
  text-decoration: underline;
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
}

:deep(img) {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

:deep(hr) {
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: 1px solid $border-color--grey-20-percent;
  margin: 48px 0;
}

:deep(strong) {
  font-weight: 700;
  color: inherit;
}

:deep(ul),
:deep(ol) {
  padding-left: 18px;
  color: inherit;
}

:deep(ul) {
  list-style: disc;
}

:deep(ol) {
  list-style: decimal;
}

:deep(p),
:deep(li) {
  font-size: 17px;
  line-height: 28px;
  letter-spacing: -0.02em;
}

:deep(li) {
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
}

:deep(p) {
  margin: 12px 0;
  color: inherit;
  & + p {
    margin-top: 24px;
  }
}

:deep(pre) {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  padding: 20px;
  overflow: auto;
  background: #161b22;
  color: #e6edf3;
  border-radius: 2px;
  line-height: 24px;
}

:deep(.anchor_title) {
  position: relative;

  .anchor_copy-link {
    button {
      display: none;
      position: absolute;
      left: -36px;
      top: 50%;
      transform: translateY(-50%);
      padding: 12px;
      cursor: pointer;
      border: 0;
      background-color: transparent;

      img {
        width: 16px;
        height: 16px;
        user-select: none;
        pointer-events: none;
      }
    }

    &-tooltip {
      display: none;
      position: absolute;
      left: -102px;
      top: 50%;
      transform: translateY(-50%);
      background-color: $bgcolor--black-oil;
      padding: 4px 8px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 0;
      line-height: 18px;
      color: $border-color--grey-20-percent;
      transition: all 0.1s ease;
      @include font('Inter', 12px, 400);
    }

    &:hover {
      .anchor_copy-link-tooltip {
        display: block;
      }
    }
  }

  &:hover {
    .anchor_copy-link button {
      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  :deep(h2) {
    font-size: 26px;
    line-height: 33px;
  }

  :deep(h5) {
    font-size: 20px;
    line-height: 27px;
  }

  :deep(p) {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
