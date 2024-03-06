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
const checklistRef = ref<HTMLElement>()
const { headerHeight } = storeToRefs(useHeaderStore())
const { activeTag } = storeToRefs(useDynamicTagCloudStore())
const checklistService = new ChecklistService(prismic, config.public.domain)

const loadChecklistCards = async (tags: string[], pageSize: number, page: number) => {
  const checklistPagesData = await checklistService.getChecklistsPages({
    tags,
    pageSize,
    page,
    ffEnvironment: config.public.ffEnvironment,
  })
  if (!checklistPagesData) { return }
  totalPages.value = checklistPagesData?.total_pages
  nextPage.value = checklistPagesData?.next_page
  prevPage.value = checklistPagesData?.prev_page
  cards.value = checklistService.transformChecklistDataForCards(checklistPagesData)
}

const scrollToStart = () => {
  if (!checklistRef.value) { return }
  checklistRef.value.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  })
}

const changePageChecklist = async (page: number) => {
  currentPageChecklist.value = page
  if ('tag' in route.query && !('checklistPage' in route.query)) {
    if (currentPageChecklist.value !== 1) {
      await router.push({
        path: route.path,
        query: {
          tag: route.query.tag || activeTag.value.checklists,
          checklistPage: currentPageChecklist.value,
        },
      })
      scrollToStart()
    }
  }

  if ('tag' in route.query && 'checklistPage' in route.query) {
    await router.push({
      path: route.path,
      query: {
        tag: route.query.tag || activeTag.value.checklists,
        checklistPage: currentPageChecklist.value,
      },
    })
    scrollToStart()
  }

  if (!('tag' in route.query)) {
    await router.push({
      path: route.path,
      query: {
        checklistPage: currentPageChecklist.value,
      },
    })
    scrollToStart()
  }

  const tagsFromRoute = route.query.tag === 'All Checklists' ? ['Checklist'] : [route.query.tag] as string[]
  if (tagsFromRoute.every(tag => tag)) {
    await loadChecklistCards(tagsFromRoute, 4, currentPageChecklist.value)
  } else {
    await loadChecklistCards([activeTag.value.checklists || 'Checklist'], 4, currentPageChecklist.value)
  }
}

watch(() => route.query, async () => {
  if ('tag' in route.query && ('checklistPage' in route.query && Number(route.query.checklistPage) === 1)) {
    await loadChecklistCards([activeTag.value.checklists], 4, 1)
  }
}, { immediate: true })
</script>
<template>
  <div class="container checklist">
    <div
      ref="checklistRef"
      class="checklist__cards"
      :style="`scroll-margin-top: ${(headerHeight ? headerHeight : 65) + 60}px`"
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
      @page-changed="changePageChecklist"
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
