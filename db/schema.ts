import { type InferModel } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const pages = sqliteTable('pages', {
  id: integer('id').primaryKey(),
  uid: text('uid'),
  jsonData: text('json_data'),
});

export type User = InferModel<typeof pages>;
export type InsertPages = InferModel<typeof pages, 'insert'>;
