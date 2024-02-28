import crypto from 'crypto'
import { ATLASSIAN_TOKEN, CIPHER_ALGORITHM, S3_SECRET_ACCESS_KEY } from '~/server/config/envs'

export class Cipher {
  private secret = crypto
    .createHash('sha512')
    .update(ATLASSIAN_TOKEN!)
    .digest('hex')
    .substring(0, 32)

  private cipherIV = crypto
    .createHash('sha512')
    .update(S3_SECRET_ACCESS_KEY!)
    .digest('hex')
    .substring(0, 16)

  private algorithm = CIPHER_ALGORITHM!

  private error = ''

  constructor() {
    this.encrypt = this.encrypt.bind(this)
    this.decrypt = this.decrypt.bind(this)
  }

  encrypt(text: string) {
    try {
      const cipher = crypto.createCipheriv(this.algorithm, this.secret, this.cipherIV)
      const encrypted = Buffer.from(
        cipher.update(text, 'utf8', 'hex') + cipher.final('hex'),
      ).toString('base64')
      return {
        encrypted,
      }
    } catch (e: any) {
      this.error = e.message
      return e.message
    }
  }

  decrypt(encryptedData: string) {
    try {
      const buff = Buffer.from(encryptedData, 'base64')
      const decipher = crypto.createDecipheriv(this.algorithm, this.secret, this.cipherIV)

      return (
        decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
        decipher.final('utf8')
      )
    } catch (e: any) {
      this.error = e.message
      return e.message
    }
  }
}
