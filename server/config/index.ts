import { MAD_BACKEND_TOKEN } from '~/server/config/envs'

export const authConfig = {
  headers: {
    Authorization: `Basic ${ Buffer.from(MAD_BACKEND_TOKEN).toString('base64') }`,
  },
}
