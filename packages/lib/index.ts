import { join } from "path"

export const getDB = async <T = any>(dbURL: string): Promise<T> => {
  const { PrismaClient } = await import(join(process.cwd(), 'prisma'))

  const prisma = new PrismaClient({
    datasources: { db: { url: dbURL } },
    datamodelPath: join(process.cwd(), 'prisma', 'schema.prisma'),
  })

  await prisma.$connect()

  return prisma
}