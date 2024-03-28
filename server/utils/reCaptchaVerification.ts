import axios from 'axios'
import { RECAPTCHA_KEY } from '~/server/config/envs'

export const reCaptchaVerification = async (token: string) => {
  try {
    const { data } = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      new URLSearchParams({
        response: token,
        secret: RECAPTCHA_KEY!,
      }),
    )

    return data.success
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('ReCaptcha error:', e)
    return false
  }
}
