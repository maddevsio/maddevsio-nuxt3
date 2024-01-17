import type { Ref } from 'vue'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export interface TabItem {
	tabName: string
	tabDescription: string
  tabListTitle: string
	tabListItem: string
	tabListItems: []
	showButton: boolean
	buttonText: string
	tabImageIndentFromBottom: string
	tabImage: {
		url: string
		alt: string
		dimensions: {
			width: number
			height: number
		}
	}
	tabTextAndCheckmarkColor: string
}

export interface ITabsSlice {
	triggerBreakpoint: number
	indentFromHeader: number

	tabs: Ref<TabItem[]>
	activeTab: Ref<string | undefined>
	intervalId: Ref<NodeJS.Timeout | undefined>
	currentActiveTab: Ref<number>
	tabItemsRef: Ref<Element | null>
	tabButtons: Ref<string[] | null | NodeListOf<Element>>
	setLoopActiveClass: Ref<boolean>
	observerSection: Ref<IntersectionObserverInstance | null>
	tabSliceRef: Ref<Element | null>
	setActiveClassNames(tabName: string, tabTextAndCheckmarkColor: string): (string | false)[]
	changeActiveTab(options: { $event?: Event | null; tabName?: string; event?: string }): Promise<void>
	removeActiveLoopClass(): void
	initIntersectionObserverForSections(): void
}

export type TabsSlicePropTypes = {
	items: TabItem[]
}
