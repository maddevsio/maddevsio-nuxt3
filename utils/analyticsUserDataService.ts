import { loadState, saveState } from '~/utils/localStorage'

const LOCAL_STORAGE_KEYS = {
  // used in analytics: Google, FaceBook Pixel
  ID: 'GA_USER_ID',
  TYPE: 'GA_USER_TYPE',
}

export function checkUserExist() {
  return !!loadState(LOCAL_STORAGE_KEYS.ID)
}

export function setUserUID() {
  if (!loadState(LOCAL_STORAGE_KEYS.ID)) {
    saveState(uid(), LOCAL_STORAGE_KEYS.ID)
  }
}

export const setUserType = (type: string) => {
  // TYPE: 'hr_candidate' | 'lead' | 'download_ebook' | undefined
  saveState(type, LOCAL_STORAGE_KEYS.TYPE)
}

export function getUserType() {
  return loadState(LOCAL_STORAGE_KEYS.TYPE)
}

export function getUserUID() {
  if (loadState(LOCAL_STORAGE_KEYS.ID)) {
    return loadState(LOCAL_STORAGE_KEYS.ID)
  }
  setUserUID()
  return loadState(LOCAL_STORAGE_KEYS.ID)
}
