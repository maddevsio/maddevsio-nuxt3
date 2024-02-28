import {
  INTERNAL_BACKEND_ACCESS_TOKEN,
  INTERNAL_BACKEND_TOKEN,
  MAD_BACKEND_ACCESS_EMAIL,
} from '~/server/config/envs'

const cipher = new Cipher()
const generateToken = () => cipher.encrypt(INTERNAL_BACKEND_TOKEN).encrypted
const decodeToken = (token: string) => {
  const [accessEmail, accessToken] = cipher.decrypt(token).split(':')
  return accessEmail === MAD_BACKEND_ACCESS_EMAIL && accessToken === INTERNAL_BACKEND_ACCESS_TOKEN
}

export const getToken = () => generateToken()
export const isValidToken = (token: string) => decodeToken(token)
