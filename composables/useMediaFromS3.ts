export const useMediaFromS3 = () => ({
  $getMediaFromS3: (path: string): string | null => {
    const runtimeConfig = useRuntimeConfig()
    let resultPath = path
    if (!path) {
      return null
    }
    if (path[0] !== '/') {
      resultPath = `/${ resultPath }`
    }
    try {
      return `${ runtimeConfig.public.s3PublicUrl }${ resultPath.replace('//', '/') }`
    } catch (error: any) {
      throw new Error(error)
    }
  },
})
