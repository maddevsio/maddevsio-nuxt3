<script setup lang="ts">
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    default: 3,
  },
  totalPages: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: 6,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  where: {
    type: String,
    default: 'page',
  },
})

const emit = defineEmits(['page-changed'])
const route = useRoute()

const activePage = ref(1)
const activePageComputed = computed({
  get() {
    return props.currentPage
  },
  set(newVal) {
    activePage.value = newVal
  },
})
const firstPage = ref(1)
const showFirstPageIfCurrentMoreThan = ref(2)
const showDotsIfCurrentPageMoreThan = ref(3)
const visibleButtons = computed(() => props.totalPages > 5 ? props.maxVisibleButtons : props.totalPages)
const startPage = computed(() => {
  if (activePage.value === 1) { return 1 }
  if (activePage.value === props.totalPages && props.totalPages >= visibleButtons.value) {
    return props.totalPages - visibleButtons.value + 1
  }
  if (props.totalPages === visibleButtons.value) { return 1 }
  return activePage.value - 1
})
const pages = computed(() => {
  const range = []

  if (props.totalPages > visibleButtons.value) {
    for (let i = startPage.value;
      countOfIterationsToCreateThreeVisiblePages(i);
      i += 1) {
      range.push({
        name: i,
        isDisabled: i === activePage.value,
      })
    }
  } else {
    for (let i = startPage.value; i <= props.totalPages && i > 0; i += 1) {
      range.push({
        name: i,
        isDisabled: i === activePage.value,
      })
    }
  }
  return range
})

const isInFirstPage = computed(() => activePage.value === 1)

const isInLastPage = computed(() => activePage.value === props.totalPages)

watch(activePage, newPage => {
  emit('page-changed', newPage)
})

watch(() => route.query, query => {
  if (props.where in query) {
    if (Number(query[props.where]) !== activePage.value) {
      activePageComputed.value = Number(query[props.where])
    }
  }
}, { deep: true, immediate: true })

const onClickPreviousPage = () => {
  activePageComputed.value -= 1
}

const onClickPage = (page: number) => {
  activePageComputed.value = page
}

const onClickNextPage = () => {
  activePageComputed.value += 1
}

const isPageActive = (page: number) => activePage.value === page

const isTotalPagesMoreThanVisibleButtons = () => {
  return props.totalPages > visibleButtons.value
}

const showFirstPageOrDots = (currentPageIsBiggerThanWhat: number) => activePage.value > currentPageIsBiggerThanWhat && isTotalPagesMoreThanVisibleButtons()

const showLastDotsIfTotalPagesBiggerVisiblePages = () => props.totalPages - 1 > activePage.value + 1 && isTotalPagesMoreThanVisibleButtons()

const showLastPageIfTotalPagesBiggerOrEqualVisiblePages = () => props.totalPages - 1 >= activePage.value + 1 && isTotalPagesMoreThanVisibleButtons()

const countOfIterationsToCreateThreeVisiblePages = (currentIteration: number) => currentIteration <= Math.min(startPage.value + visibleButtons.value - 1, props.totalPages)
</script>
<template>
  <div class="pagination">
    <ul
      class="pagination__list"
      :class="{'pagination__list--few-items': totalPages <= 3}"
    >
      <li class="pagination__list-item">
        <button
          class="pagination__list-arrow-btn"
          :disabled="isInFirstPage"
          :title="isInFirstPage && 'No pages'"
          aria-label="Go to previous page"
          @click="onClickPreviousPage"
        >
          <svg
            width="40"
            height="11"
            viewBox="0 0 40 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.76136 11L6.63636 10.125L3.03409 6.53409H40V5.28409H3.03409L6.63636 1.68182L5.76136 0.818182L0.670452 5.90909L5.76136 11Z"
              fill="#CFCFD0"
            />
          </svg>
          Prev
        </button>
      </li>
      <li v-if="showFirstPageOrDots(showFirstPageIfCurrentMoreThan)">
        <button
          type="button"
          :disabled="currentPage === firstPage"
          class="pagination__list-pages-btn"
          :class="{ 'pagination__list-pages-btn--active': isPageActive(1) }"
          :aria-label="`Go to page number 1`"
          @click="onClickPage(1)"
        >
          1
        </button>
      </li>
      <li v-if="showFirstPageOrDots(showDotsIfCurrentPageMoreThan)">
        <span
          class="pagination__list-pages-btn"
          style="cursor: default;"
        >
          ...
        </span>
      </li>
      <li
        v-for="page in pages"
        :key="page.name"
      >
        <button
          type="button"
          :disabled="page.isDisabled"
          :title="page.isDisabled && 'This is current page'"
          class="pagination__list-pages-btn"
          :class="{ 'pagination__list-pages-btn--active': isPageActive(page.name) }"
          :aria-label="`Go to page number ${page.name}`"
          @click="onClickPage(page.name)"
        >
          {{ page.name }}
        </button>
      </li>
      <li v-if="showLastDotsIfTotalPagesBiggerVisiblePages()">
        <span
          class="pagination__list-pages-btn"
          style="cursor: default;"
        >
          ...
        </span>
      </li>
      <li v-if="showLastPageIfTotalPagesBiggerOrEqualVisiblePages()">
        <button
          type="button"
          :disabled="currentPage === totalPages"
          class="pagination__list-pages-btn"
          :class="{ 'pagination__list-pages-btn--active': isPageActive(totalPages) }"
          :aria-label="`Go to page number ${totalPages}`"
          @click="onClickPage(totalPages)"
        >
          {{ totalPages }}
        </button>
      </li>
      <li class="pagination__list-item">
        <button
          class="pagination__list-arrow-btn"
          data-testid="text-next-btn"
          :disabled="isInLastPage"
          :title="isInLastPage && 'No pages'"
          aria-label="Go to next page"
          @click="onClickNextPage"
        >
          Next
          <svg
            width="40"
            height="11"
            viewBox="0 0 40 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.2386 11L33.3636 10.125L36.9659 6.53409H0V5.28409H36.9659L33.3636 1.68182L34.2386 0.818182L39.3295 5.90909L34.2386 11Z"
              fill="#CFCFD0"
            />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
%btn {
  background-color: transparent;
  border: none;
  @include font('Inter', 16px, 400);
  line-height: 27px;
  cursor: pointer;
}

.pagination {
  max-width: 390px;
  margin: 0 auto;
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 0;
    &--few-items {
      justify-content: space-evenly;
    }
  }
  &__list-arrow-btn {
    @extend %btn;
    color: $text-color--red;
    min-width: 95px;

    svg {
      path {
        fill: $text-color--red;
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: $text-color--grey-20-percent;
      svg {
        path {
          fill: $text-color--grey-20-percent;
        }
      }
    }
  }

  &__list-pages-btn {
    @extend %btn;
    color: $text-color--grey-20-percent;
    outline: 5px solid transparent !important;
    &--active {
      cursor: not-allowed;
      color: $text-color--red;
    }
  }

  @media screen and (max-width: 430px) {
    max-width: 366px;
    &__list {
      justify-content: space-evenly;

      &-item {
        display: none;
      }
    }
  }
}
</style>
