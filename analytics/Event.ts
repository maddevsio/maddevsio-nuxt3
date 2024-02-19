/* eslint-disable no-console */
import { CONTENT_GROUPS } from './constants'

export const addUserType = (type: string) => {
  // TYPE: 'hr_candidate' | 'lead' | 'download_ebook' | undefined
  setUserType(type)
}

export class AnalyticsEvent {
  action: string
  strict: boolean
  properties: {
    user_custom_id?: string
    user_type?: string
    event_category?: string
    path?: string
    from_page?: string
    event_location?: string
    [key: string]: any
  }

  constructor(action: string, strict = true) {
    this.strict = strict
    this.action = action
    this.properties = {}
    this._applyUser()
  }

  _getNameByPath = (contentGroups: Array<{ url: string[], name: string }>, path: string) => {
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
    if (window) {
      this.properties.user_custom_id = getUserUID()
      this.properties.user_type = getUserType()
    }
  }

  _handleError(message: string) {
    if (this.strict) { throw new Error(message) }
    console.error(message)
  }

  setCategory(category: string) {
    if (!category) {
      this._handleError('Event category is required')
    }
    this.properties.event_category = category
    return this
  }

  setField(name: string, value: string) {
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
    if ('dataLayer' in window) {
      const keys =
        (window?.dataLayer as string[]).filter((dataLayerValue: any) => dataLayerValue[0] === 'config' && dataLayerValue.length >= 3).map((dataLayerValue: any) => dataLayerValue[1]) || []
      return [...new Set(keys)]
    }
  }

  _log(analyticsKeys: any) {
    const msg = [
      '<------- GOOGLE ANALYTICS EVENT SENDING -------->',
      `EVENT: ${ this.action }`,
      `PROPS: ${ JSON.stringify(this.properties) }`,
      `ANALYTICS: ${ JSON.stringify(analyticsKeys) }`,
    ]
    console.log(msg.join('\n'))
  }

  _setClickLocation(location: string, fromUrl: string) {
    this.properties.from_page = fromUrl || window.location.pathname
    this.properties.event_location = location || 'Page'
  }

  send(location = '', fromUrl = '') {
    if (isMatchMainDomain(window.location.origin)) {
      this._setPath()
      this._applyUser()
      this._setClickLocation(location, fromUrl)
      const analyticsKeys = this._collectGoogleAnalyticsKeys()

      if (process.env.NODE_ENV !== 'production') {
        this._log(analyticsKeys)
      }

      const nameByPath = this._getNameByPath(CONTENT_GROUPS, window.location.href)
      if (analyticsKeys) {
        analyticsKeys.forEach(analyticsId => {
          const properties = {
            ...this.properties,
            send_to: analyticsId,
            content_group: nameByPath || '',
          }
          try {
            if ('gtag' in window) {
              // @ts-ignore
              window.gtag('event', this.action, properties)
            }
          } catch (error: any) {
            this._handleError(error)
          }
        })
      }
    }
  }
}
