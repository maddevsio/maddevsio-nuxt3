<script setup lang="ts">
import { CaseStudiesService } from '~/components/CaseStudies/classes/CaseStudiesService'

const props = defineProps({
  casesData: {
    type: Object,
    default: () => ({}),
  },
})

const prismic = usePrismic()
const { isDesktop, isTablet, isMobile } = useDevice()
const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const caseStudiesService = new CaseStudiesService(prismic)

const totalPages = ref(props.casesData.totalPages)
const nextPage = ref(props.casesData.nextPage)
const prevPage = ref(props.casesData.prevPage)
const cards = ref(props.casesData.cards)
const currentPage = ref(1)
const casesListRef = ref<HTMLElement & { $el: HTMLElement } | null>(null)
const { headerHeight } = storeToRefs(useHeaderStore())
const dynamicTagStore = useDynamicTagCloudStore()
const extraIndentFromHeader = 65

const pageCount = computed(() => {
  if (isDesktop) {
    return 11
  }
  if (isTablet) {
    return 6
  }
  if (isMobile && !isTablet) {
    return 5
  }
  return 6
})

const loadCaseCards = async (tags: string[], pageSize: number, page: number) => {
  const casesPagesData = await caseStudiesService.getCaseStudiesPages({
    tags,
    pageSize,
    page,
    ffEnvironment: config.public.ffEnvironment,
  })
  if (!casesPagesData) {
    return
  }
  totalPages.value = casesPagesData?.total_pages
  nextPage.value = casesPagesData?.next_page
  prevPage.value = casesPagesData?.prev_page
  cards.value = caseStudiesService.transformationCasesDataForCards(casesPagesData)
}

const removeAnimationBlockOnLoad = () => {
  const blockedCards = document.querySelectorAll('.cases-list-card')
  if (blockedCards.length) {
    blockedCards.forEach(item => {
      if (item.classList.contains('cases-list-card--no-events')) {
        item.classList.remove('cases-list-card--no-events')
      }
    })
  }
}

const { changePage, getTagsFromRoute } = usePagination({
  router,
  route,
  mainTagForQuery: caseStudiesService.mainTagForQuery,
  mainTagName: caseStudiesService.mainTagName,
  pageName: caseStudiesService.pageName,
  activeTag: dynamicTagStore.activeTag.caseStudies,
  currentPage,
  scrollRef: casesListRef,
  withScrollToStart: true,
})

watch(() => route.query, async query => {
  const tags = getTagsFromRoute(query.tag as string)
  if (!('tag' in query) && !(caseStudiesService.pageName in query)) {
    currentPage.value = caseStudiesService.firstPage
    await loadCaseCards(tags as string[], pageCount.value, caseStudiesService.firstPage)
    removeAnimationBlockOnLoad()
    return
  }

  await loadCaseCards(tags as string[], pageCount.value, Number(query[caseStudiesService.pageName]) || currentPage.value)
  removeAnimationBlockOnLoad()
})

onMounted(() => {
  removeAnimationBlockOnLoad()
  lazyLoadVideo()
})
</script>
<template>
  <section
    class="cases"
  >
    <div
      ref="casesListRef"
      class="container cases__container"
      :style="`scroll-margin-top: ${(headerHeight ? headerHeight : extraIndentFromHeader) + extraIndentFromHeader}px`"
    >
      <div
        v-if="cards.length"
        class="cases__list"
      >
        <LazyCaseStudiesMainUICaseCard
          v-for="(item, i) in cards"
          :key="`case-list-card-${i}`"
          :item="item"
        />
      </div>
    </div>
    <LazySharedUIPagination
      v-if="nextPage || prevPage"
      :current-page="currentPage"
      :total-pages="totalPages"
      class="cases__pagination"
      where="caseStudiesPage"
      @page-changed="changePage"
    />
  </section>
</template>
<style lang="scss" scoped>
.cases {
  &__container {
    * {
      box-sizing: border-box;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 110px;
    gap: 20px;

    @media screen and (max-width: 1180px) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 91px;
    }

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 97px;
    }
  }

  :deep(.pagination) {
    margin-top: 72px;

    @media screen and (max-width: 768px) {
      margin-top: 48px;
    }
  }
}
</style>
