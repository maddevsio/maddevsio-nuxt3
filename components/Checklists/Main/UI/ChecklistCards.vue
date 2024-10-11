<script setup lang="ts">
import { ChecklistService } from '~/components/Checklists/classes/ChecklistService'

const props = defineProps({
  checklistData: {
    type: Object,
    default: () => ({}),
  },
})

const totalPages = ref(props.checklistData.totalPages)
const nextPage = ref(props.checklistData.nextPage)
const prevPage = ref(props.checklistData.prevPage)
const cards = ref(props.checklistData.cards)
const prismic = usePrismic()
const config = useRuntimeConfig()
const currentPageChecklist = ref(1)
const route = useRoute()
const router = useRouter()
const checklistRef = ref<HTMLElement & { $el: HTMLElement } | null>()
const { headerHeight } = storeToRefs(useHeaderStore())
const { activeTag } = storeToRefs(useDynamicTagCloudStore())
const checklistService = new ChecklistService(prismic, config.public.domain)
const extraIndentFromHeader = 65

const loadChecklistCards = async (tags: string[], pageSize: number, page: number) => {
  const checklistPagesData = await checklistService.getChecklistsPages({
    tags,
    pageSize,
    page,
    ffEnvironment: config.public.ffEnvironment,
  })
  if (!checklistPagesData) {
    return
  }
  totalPages.value = checklistPagesData?.total_pages
  nextPage.value = checklistPagesData?.next_page
  prevPage.value = checklistPagesData?.prev_page
  cards.value = checklistService.transformChecklistDataForCards(checklistPagesData)
}

const { allTagNames } = useDynamicTagCloudStore()

const { changePage, getTagsFromRoute } = usePagination({
  router,
  route,
  mainTagForQuery: checklistService.mainTagForQuery,
  mainTagName: allTagNames.checklists,
  pageName: checklistService.pageName,
  activeTag: activeTag.value.checklists,
  currentPage: currentPageChecklist,
  scrollRef: checklistRef,
  withScrollToStart: true,
})

watch(() => route.query, async query => {
  const tags = getTagsFromRoute(query.tag as string)
  if (!('tag' in query) && !(checklistService.pageName in query)) {
    currentPageChecklist.value = checklistService.firstPage
    await loadChecklistCards(tags as string[], checklistService.pageCount, checklistService.firstPage)
  }
  await loadChecklistCards(tags as string[], checklistService.pageCount, Number(query[checklistService.pageName]) || currentPageChecklist.value)
}, { immediate: true })
</script>

<template>
  <div class="container checklist">
    <div
      ref="checklistRef"
      class="checklist__cards"
      :style="`scroll-margin-top: ${(headerHeight ? headerHeight : extraIndentFromHeader) + extraIndentFromHeader}px`"
    >
      <LazyChecklistsMainUIChecklistCard
        v-for="(card) in cards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        :tag="card.tag"
        :url="card.url"
        :image-background-color="card.imageBackgroundColor"
      />
    </div>
    <LazySharedUIPagination
      v-if="nextPage || prevPage"
      :key="'checklist'"
      :current-page="currentPageChecklist"
      :total-pages="totalPages"
      class="checklist__pagination"
      where="checklistPage"
      @page-changed="changePage"
    />
  </div>
</template>

<style scoped lang="scss">
.checklist {
  &__cards {
    @include grid(repeat(2, 1fr), auto, 62px, 40px);

    @media screen and (max-width: 1440px) {
      @include grid(repeat(2, 1fr), auto, 40px, 40px);
    }

    @media screen and (max-width: 1026px) {
      @include grid(repeat(2, 1fr), auto, 22px, 22px);
    }

    @media screen and (max-width: 640px) {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }
  }

  :deep(.pagination) {
    margin-top: 34px;
  }
}
</style>
