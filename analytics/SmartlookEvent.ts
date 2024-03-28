/* eslint-disable no-console */
export class SmartlookEvent {
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

  _setField(props: { [key: string]: string } = {}) {
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
			window.location.origin !== 'https://maddevs.co' &&
      'smartlook' in window
    ) {
      try {
        // @ts-ignore
        window.smartlook('track', this.action, this.properties)
      } catch (error: any) {
        this._handleError(error)
      }
    }
  }
}
