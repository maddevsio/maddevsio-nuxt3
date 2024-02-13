import axios from 'axios'
import { IP_BAN_LIST, IP_INFO_TOKEN, IP_TEST_LIST, TEST_EMAIL } from '~/server/config/envs'

export class IPService {
  private checkIPAddress(ip: string) {
    const pattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b|\b(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}\b/
    return pattern.test(ip)
  }

  private async getIpInfo(ip: string) {
    if (!this.checkIPAddress(ip)) { return null }
    const info = await axios.get(`https://ipinfo.io/${ ip }?token=${ IP_INFO_TOKEN }`)

    return info.data
  }

  public async getIpInfoByIp(ip: string) {
    if (!this.checkIPAddress(ip)) { return null }
    const info = await axios.get(`http://ip-api.com/json/${ ip }`)

    return info.data
  }

  public async getLocation(ip: string) {
    const local = await this.getIpInfoByIp(ip) || {}
    const fromAPI = await this.getIpInfo(ip) || {}

    return {
      ip: fromAPI.ip || local.query || '-',
      country: fromAPI.country || local.country || '-',
      city: fromAPI.city || local.city || '-',
    }
  }

  public getIPByRequest(headers: any, connection: any) {
    const ip = headers['x-forwarded-for'] || connection
    /**
     * In several cases ip can be an array of ips separated with comma('92.38.148.60, 172.68.132.29')
     * To resolve this behavior we need to split an ip and get only the first element
     */
    return ip?.split(',')[0]
  }

  public isBlockedIP(ip: string) {
    const banList = (IP_BAN_LIST || '').split(',')
    return banList.includes(ip)
  }

  public isTestIP(ip: string) {
    const banList = (IP_TEST_LIST || '').split(',')
    return { testIP: banList.includes(ip), testEmail: TEST_EMAIL || '' }
  }
}
