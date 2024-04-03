import { eq } from 'drizzle-orm';
import { db } from './sqlite-service';
import { pages } from '~/db/schema'

export default defineEventHandler(event => {
  const { uid } = getQuery(event)
  const pageResp = db
    .select()
    .from(pages)
    .where(eq(pages.uid, uid as string))
    .get();
  return { page: pageResp }
})
