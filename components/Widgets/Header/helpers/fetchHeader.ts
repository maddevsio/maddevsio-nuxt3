import { fetchLinks } from '~/config/constants'

export const fetchHeader = async () => {
  const config = useRuntimeConfig()
  const prismic = usePrismic()
  const headerDocument = config.public.ffEnvironment !== 'production' ? 'header_for_local_dev' : 'header'
  const { data } = await prismic.client.getSingle(headerDocument, {
    fetchLinks,
  })
  return data
}
