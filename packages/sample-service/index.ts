import { getDB } from "packages/lib"
import { PrismaClient } from "./prisma"

const run = async () => {
  const prisma = await getDB<PrismaClient>(process.env.DATABASE_URL ?? 'postgres://postgres:password@localhost:5432')
}