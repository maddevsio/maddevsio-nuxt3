import axios from 'axios'
import { parseUserAgentForLeads } from '~/components/Widgets/Form/helpers/parseUserAgentForLeads'

export const catchAndSendError = async ({
  route,
  error,
  from,
}: {
  route: any
  error: any
  from: any
}) => {
  try {
    const err = {
      message: error,
      statusCode: 'Внутренняя ошибка',
    }

    if (error.response && error.response.data) {
      err.message = error.response.data.error
      err.statusCode = error.response.status
    }

    const {
      userBrowser,
      userOS,
      userPlatform,
    } = parseUserAgentForLeads()

    const payload = {
      message: err.message,
      from,
      fromPage: window.location.href || `https://maddevs.io${ route.path }`,
      userBrowser,
      userOS,
      userPlatform,
      errorStatusCode: err.statusCode,
      pageTitle: document.title || 'Страница без мета заголовка',
    }
    await axios.post('/api/notify', payload)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}
