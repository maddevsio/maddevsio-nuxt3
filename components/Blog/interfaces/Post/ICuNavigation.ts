import type { ICUSelector } from '~/components/Blog/interfaces/Post/ICUSelector'
import type { ICuNavigationButtons } from '~/components/Blog/interfaces/Post/ICuNavigationButtons'
import type { BlogPost } from '~/interfaces/common/commonInterfaces'

export interface CuNavigationProps {
  clusterData: {
    primary: {
      cluster_name: {
        text: string
      }[]
    }
    items: BlogPost[]
  }
  uid: string
}

export interface ICuNavigation {
  uid: string
  clusterName: string
  cuSelector: ICUSelector
  cuNavigationButtons: ICuNavigationButtons
  transformCuPosts(cuPosts: BlogPost[]): { label: string, uid: string }[]
}
