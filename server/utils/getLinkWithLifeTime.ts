import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY } from '~/server/config/envs'

export const getLinkWithLifeTime = async (params: any) => {
  const {
    region,
    bucket,
    file,
    expiresIn,
  } = params
  const s3Configuration = [{
    credentials: {
      accessKeyId: S3_ACCESS_KEY_ID,
      secretAccessKey: S3_SECRET_ACCESS_KEY,
    },
    region,
  }]
  const client = new S3Client(s3Configuration)
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: file,
  })
  return await getSignedUrl(client, command, { expiresIn })
}
