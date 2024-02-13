import { USERS_TO_BE_MENTIONED } from '~/server/config/envs'

export default defineEventHandler(async event => {
  const slackNotify = new SlackNotify()
  const body = await readBody(event)
  try {
    const payloadData = {
      message: JSON.stringify(body.message),
      from: body.from,
      fromPage: body.fromPage,
      browser: body.userBrowser,
      OS: body.userOS,
      platform: body.userPlatform,
      pageTitle: body.pageTitle,
      errorStatusCode: body.errorStatusCode,
    }
    const messageBlock = [
      `*Статус код:* ${ payloadData.errorStatusCode }`,
      `*Ошибка:* ${ payloadData.message }`,
      `*Страница:* <${ payloadData.fromPage }|${ payloadData.pageTitle }>`,
      `*Браузер:* ${ payloadData.browser }`,
      `*ОС:* ${ payloadData.OS }`,
      `*Платформа:* ${ payloadData.platform }`,
    ]
    if (body.message && body.from) {
      await slackNotify
        .createMessage({
          type: 'header',
          text: `В работе ${ payloadData.from } возникли проблемы.`,
        })
        .createMessage({ type: 'divider' })
        .createMessage({
          type: 'section',
          text: JSON.parse(USERS_TO_BE_MENTIONED!).map((user: { name: string, id: string }) => user.id).join(' '),
        })
        .createMessage({
          type: 'section',
          text: messageBlock.join('\n'),
        })
        .sendNotify()
        .catch(console.error) // eslint-disable-line no-console

      return 'An error alert has been successfully sent.'
    }
  } catch (e) {
    // eslint-disable-next-line
    console.error('[NOTIFY CONTROLLER]: ', e)
  }
})
