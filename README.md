# Prisma Client datamodel path ("schema.prisma") issue

In a monorepo environment, Prisma generates into the `prisma` folder at service root, but when the `PrismaClient` instance is created, it tries to read the schema file in random subdirectories.

That happened after upgrading Prisma to `3.x`.

## How to reproduce
```shell
yarn install
yarn reproduce
```
