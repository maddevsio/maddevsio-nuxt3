import { fetchLinks } from '~/config/constants'

export const fetchFooter = async () => {
  const config = useRuntimeConfig()
  const prismic = usePrismic()
  const footerDocument = config.public.ffEnvironment !== 'production' ? 'footer-for-local-dev' : 'footer'
  const { data } = await prismic.client.getSingle(footerDocument, {
    fetchLinks,
  })
  return data
}
