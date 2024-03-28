export const ManageCookie = {
  checkCookie(name: string) {
    return document.cookie.includes(name)
  },
  setCookie({ name, value, expires }: { name: string, value: boolean | string, expires: number }) {
    if (!this.checkCookie(name)) {
      const expiresDate = new Date(Date.now() + (expires || 365) * 864e5) // 864e5 - Day after January 1, 1970
      document.cookie = `${ name }=${ value };expires=${ expiresDate.toUTCString() };path=/`
    }
  },
}
