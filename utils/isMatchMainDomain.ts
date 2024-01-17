export const isMatchMainDomain = (domain: string) => {
  const mainDomains = ['https://maddevs.io', 'https://maddevs.co']
  return mainDomains.includes(domain)
}
