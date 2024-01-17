/* eslint-disable no-console */
// import { CONTENT_GROUPS } from './constants'
// import { isMatchMainDomain } from '~/utils/isMatchMainDomain.js'
// import { getUserType, getUserUID, setUserType } from '~/utils/analyticsUserDataService.js'

export const addUserType = type => {
  // TYPE: 'hr_candidate' | 'lead' | 'download_ebook' | undefined
  setUserType(type)
}

export class AnalyticsEvent {
  constructor(action, strict = true) {
    if (!action) {
      throw new Error(`Event action is missing for ${ this.action }, please add an action for object`)
    }
    this.strict = strict
    this.action = action
    this.properties = {}
    this._applyUser()
  }

  _getNameByPath = (contentGroups, path) => {
    if (path === '/') {
      return 'home_page'
    }
    const paths = path.split('/').filter(Boolean)
    if (paths.length === 1) {
      return contentGroups.filter(item => item.url.includes(path))[0]?.name
    }
    return contentGroups.filter(item =>
      item.url.some(url => {
        if (url.split('/').filter(Boolean).length === 1) {
          return false
        }
        return url.startsWith(`/${ paths[0] }/`)
      }),
    )[0]?.name
  }

  _applyUser() {
    if ('window' in global) {
      this.properties.user_custom_id = getUserUID()
      this.properties.user_type = getUserType()
    }
  }

  _handleError(message) {
    if (this.strict) { throw new Error(message) }
    console.error(message)
  }

  setCategory(category) {
    if (!category) {
      this._handleError('Event category is required')
    }
    this.properties.event_category = category
    return this
  }

  setField(name, value) {
    if (!name || !(value !== undefined && value !== null)) {
      this._handleError('AnalyticsEvent.setField() method is failed. Please add name or values params')
    }
    this.properties[name] = value
    return this
  }

  _setPath() {
    this.properties.path = window.location.pathname
  }

  _collectGoogleAnalyticsKeys() {
    const keys =
			window.dataLayer
			  ?.filter(dataLayerValue => dataLayerValue[0] === 'config' && dataLayerValue.length >= 3)
			  .map(dataLayerValue => dataLayerValue[1]) || []
    return [...new Set(keys)]
  }

  _log(analyticsKeys) {
    const msg = [
      '<------- GOOGLE ANALYTICS EVENT SENDING -------->',
      `EVENT: ${ this.action }`,
      `PROPS: ${ JSON.stringify(this.properties) }`,
      `ANALYTICS: ${ JSON.stringify(analyticsKeys) }`,
    ]
    console.log(msg.join('\n'))
  }

  _setClickLocation(location, fromUrl) {
    this.properties.from_page = fromUrl || window.location.pathname
    this.properties.event_location = location || 'Page'
  }

  send(location = '', fromUrl = '') {
    console.log(location, fromUrl)
    // if (isMatchMainDomain(window.location.origin)) {
    //   this._setPath()
    //   this._applyUser()
    //   this._setClickLocation(location, fromUrl)
    //   const analyticsKeys = this._collectGoogleAnalyticsKeys()
    //
    //   if (process.env.NODE_ENV !== 'production') {
    //     this._log(analyticsKeys)
    //   }
    //
    //   const nameByPath = this._getNameByPath(CONTENT_GROUPS, window.location.href)
    //   analyticsKeys.forEach(analyticsId => {
    //     const properties = {
    //       ...this.properties,
    //       send_to: analyticsId,
    //       content_group: nameByPath || '',
    //     }
    //     try {
    //       window.gtag('event', this.action, properties)
    //     } catch (error) {
    //       this._handleError(error)
    //     }
    //   })
    // }
  }
}
