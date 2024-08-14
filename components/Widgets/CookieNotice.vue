<script setup lang="ts">
const emit = defineEmits(['change-cookie'])

const prefs = reactive({
  ad_storage: true,
  ad_user_data: true,
  ad_personalization: true,
  analytics_storage: true,
})
const isShowPrefs = ref(false)

const prefsArray = [
  { type: 'ad_storage', label: 'Save Data for Ads' },
  { type: 'ad_user_data', label: 'Share Info for Ads' },
  { type: 'ad_personalization', label: 'Personalized Ads' },
  { type: 'analytics_storage', label: 'Save Data for Analytics' },
]

const acceptCookie = () => {
  saveState(true, LOCAL_STORAGE_KEYS.ACCEPT_COOKIE)
  emit('change-cookie', false)
}

const showPrefs = () => {
  isShowPrefs.value = !isShowPrefs.value
}

const acceptCookieManaged = () => {
  saveState(true, LOCAL_STORAGE_KEYS.ACCEPT_COOKIE)
  if ('gtag' in window) {
    // @ts-ignore
    window.gtag('consent', 'update', {
      ad_storage: prefs.ad_storage ? 'granted' : 'denied',
      ad_user_data: prefs.ad_user_data ? 'granted' : 'denied',
      ad_personalization: prefs.ad_personalization ? 'granted' : 'denied',
      analytics_storage: prefs.analytics_storage ? 'granted' : 'denied',
    })
  }
  emit('change-cookie', false)
}
</script>
<template>
  <div
    class="cookie-notice"
  >
    <div class="container">
      <p class="cookie-notice__title">
        Your Privacy, Our Priority
      </p>
      <div class="cookie-notice__content">
        <div class="cookie-notice__message">
          To deliver a better browsing experience to you at Mad Devs, we use cookies.
          Your data helps us deliver the best services possible.
          You can manage your consent preferences below. Read our
          <NuxtLink to="/privacy/" class="cookie-notice__message-link">
            Privacy Policy
          </NuxtLink> for details.
        </div>
        <div class="cookie-notice__buttons">
          <SharedUIButton
            class="cookie-notice__button"
            @click="acceptCookie"
          >
            Accept All
          </SharedUIButton>
          <SharedUIButton
            class="cookie-notice__necessary"
            @click="acceptCookie"
          >
            Accept Only Necessary
          </SharedUIButton>
        </div>
      </div>
      <div class="cookie-notice__managed-wrapper">
        <button
          class="cookie-notice__manage-btn"
          @click="showPrefs"
        >
          Manage Preferences
          <svg
            v-if="isShowPrefs"
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.0433226 1.4832L0.927489 0.599871L5.74332 5.41404C5.82095 5.49118 5.88256 5.58291 5.9246 5.68395C5.96664 5.78499 5.98828 5.89335 5.98828 6.00279C5.98828 6.11223 5.96664 6.22058 5.9246 6.32162C5.88256 6.42267 5.82095 6.5144 5.74332 6.59154L0.927489 11.4082L0.0441556 10.5249L4.56416 6.00404L0.0433226 1.4832Z" fill="#CFCFD0" />
          </svg>
        </button>
        <div
          v-if="isShowPrefs"
          class="cookie-notice__managed-fields"
        >
          <div
            v-for="(pref) in prefsArray"
            :key="pref.type"
            class="cookie-notice__managed-field-wrapper"
          >
            <input
              :id="pref.type"
              v-model="prefs[pref.type]"
              type="checkbox"
              :name="pref.type"
              class="cookie-notice__managed-field"
            >
            <label
              :for="pref.type"
              class="cookie-notice__managed-field-label"
            >
              <span class="cookie-notice__managed-field-checkbox">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91667 0.75C1.60725 0.75 1.3105 0.872916 1.09171 1.09171C0.872916 1.3105 0.75 1.60725 0.75 1.91667V10.0833C0.75 10.3928 0.872916 10.6895 1.09171 10.9083C1.3105 11.1271 1.60725 11.25 1.91667 11.25H10.0833C10.3928 11.25 10.6895 11.1271 10.9083 10.9083C11.1271 10.6895 11.25 10.3928 11.25 10.0833V1.91667C11.25 1.60725 11.1271 1.3105 10.9083 1.09171C10.6895 0.872916 10.3928 0.75 10.0833 0.75H1.91667ZM8.8875 4.71433C8.99696 4.60495 9.05848 4.45657 9.05853 4.30183C9.05859 4.14709 8.99717 3.99867 8.88779 3.88921C8.77841 3.77975 8.63003 3.71823 8.47529 3.71817C8.32055 3.71812 8.17212 3.77954 8.06267 3.88892L5.17517 6.77642L3.93792 5.53917C3.88376 5.48497 3.81945 5.44197 3.74868 5.41262C3.6779 5.38328 3.60203 5.36816 3.52541 5.36813C3.37067 5.36808 3.22225 5.4295 3.11279 5.53888C3.00333 5.64825 2.94181 5.79664 2.94176 5.95138C2.9417 6.10612 3.00312 6.25454 3.1125 6.364L4.72133 7.97283C4.78092 8.03245 4.85167 8.07974 4.92954 8.11201C5.00741 8.14427 5.09088 8.16088 5.17517 8.16088C5.25946 8.16088 5.34292 8.14427 5.42079 8.11201C5.49866 8.07974 5.56941 8.03245 5.629 7.97283L8.8875 4.71433Z" fill="#A0A0A1" />
                </svg>
              </span>
              {{ pref.label }}
            </label>
          </div>
          <button
            class="cookie-notice__apply"
            @click="acceptCookieManaged"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cookie-notice {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000000000;
  background-color: rgba(64, 65, 67, 1);
  padding: 25px 0;

  @media screen and (max-width: 400px) {
    padding: 20px 0;
  }

  &__title {
    @include font('Inter', 14px, 700);
    line-height: 16.94px;
    color: $text-color--white-primary;
    margin-bottom: 10px;
  }

  &__buttons {
    flex-shrink: 0;

    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }

  :deep(.cookie-notice__button.ui-button) {
    width: 97px;
    height: 36px;

    @media screen and (max-width: 450px) {
      width: 100%;
      margin-bottom: 15px;
    }
  }

  :deep(.cookie-notice__necessary.ui-button) {
    border: 1px solid rgba(160, 160, 161, 1);
    background: transparent;
    color: rgba(160, 160, 161, 1);
    @include font('Inter', 14px, 400);
    width: 186px;
    height: 36px;
    margin-left: 28px;

    @media screen and (max-width: 450px) {
      margin-left: 0;
      width: 100%;
    }
  }

  &__manage-btn {
    @include font('Inter', 14px, 400);
    line-height: 26px;
    color: rgba(207, 207, 208, 1);
    text-decoration: underline;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 7px;

    svg {
      margin-top: 3px;
    }
  }

  &__managed-wrapper {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 15px;
    height: 30px;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      height: auto;
      align-items: flex-start;
      gap: 15px;
    }
  }

  &__managed-fields {
    display: flex;
    align-items: center;
    gap: 17px;

    @media screen and (max-width: 836px) {
      flex-wrap: wrap;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__managed-field {
    display: none;
  }

  &__managed-field-checkbox {
    width: 10px;
    height: 10px;
    border: 1px solid rgba(160, 160, 161, 1);
    border-radius: 1px;
    display: flex;
    place-items: center;
    place-content: center;

    svg {
      display: none;
    }
  }

  &__managed-field-label {
    @include font('Inter', 12px, 400);
    line-height: 26px;
    color: rgba(160, 160, 161, 1);
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  &__managed-field {
    &:checked {
      & ~ .cookie-notice__managed-field-label .cookie-notice__managed-field-checkbox {
        border-color: transparent;

        svg {
          display: block;
        }
      }
    }
  }

  &__apply {
    border: 1px solid rgba(160, 160, 161, 1);
    background: transparent;
    @include font('Inter', 10px, 400);
    line-height: 26px;
    color: rgba(160, 160, 161, 1);
    cursor: pointer;
    border-radius: 5px;
  }

  &__content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 936px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
  }

  &__message {
    color: $text-color--white-primary;
    margin-right: 50px;
    &-link {
      color: $text-color--white-primary;
      text-decoration: underline;
    }
    @include font('Inter', 14px, 400);
    @media screen and (max-width: 400px) {
      margin-right: 10px;
      @include font('Inter', 12px, 400);
    }
  }

  &__button {
    flex-shrink: 0;
    padding: 7px 5px;
    @include font('Inter', 14px, 400);
    line-height: 23px;
  }
}
</style>
