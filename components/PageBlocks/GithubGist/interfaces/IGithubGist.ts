import type { ComputedRef, Ref } from 'vue'

export interface GithubGistProps {
  primary: {
    gist_id: string
    file_name: string
  }
}

export interface IGithubGist {
  gistId: string
  fileName: string
  isMounted: Ref<boolean>
  gistUrl: string
  gistData: Ref<string>
  gistError: Ref<boolean>
  fullGistUrl: ComputedRef<string>
  setIsMounted(value: boolean): void
  getGistData(): void
}
