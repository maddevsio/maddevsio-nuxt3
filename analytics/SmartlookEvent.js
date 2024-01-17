/* eslint-disable no-console */
import { isMatchMainDomain } from '~/client/utils/isMatchMainDomain.ts'

export class SmartlookEvent {
  constructor(action, strict = true) {
    if (!action) {
      throw new Error(`Event action is missing for ${ this.action }, please add an action for object`)
    }

    this.strict = strict
    this.action = action
    this.properties = {}
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

  _setPageInfo() {
    this.properties.page_path = window.location.pathname
    this.properties.page_location = window.location.href
    this.properties.page_title = document.title
  }

  _log() {
    const msg = [
      '<------- SMARTLOOK CUSTOM EVENT SENDING -------->',
      `EVENT: ${ this.action }`,
      `PROPS: ${ JSON.stringify(this.properties) }`,
    ]
    console.log(msg.join('\n'))
  }

  _setField(props = {}) {
    if (!Object.keys(props).length) { return }

    Object.keys(props).forEach(key => {
      this.properties[key] = props[key]
    })
  }

  send(props = {}) {
    this._setPageInfo()

    if (Object.keys(props).length) {
      this._setField(props)
    }

    if (process.env.NODE_ENV !== 'production') {
      this._log()
    }

    if (
      isMatchMainDomain(window.location.origin) &&
			process.env.NODE_ENV === 'production' &&
			window.location.origin !== 'https://maddevs.co'
    ) {
      try {
        window.smartlook('track', this.action, this.properties)
      } catch (error) {
        this._handleError(error)
      }
    }
  }
}
