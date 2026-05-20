import {pool} from './db.ts'

export const createTable = async () => {
    pool.query(`CREATE TABLE "users"(
        "userId" SERIAL NOT NULL,
        "email" TEXT NOT NULL UNIQUE,
        "passwordHash" TEXT NOT NULL,
        "createdAt" TIMESTAMPTZ DEFAULT NOW())`)
}