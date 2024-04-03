import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
// eslint-disable-next-line import/no-named-as-default
import Database from 'better-sqlite3'

export const sqlite = new Database('sqlite.db')
export const db: BetterSQLite3Database = drizzle(sqlite)
