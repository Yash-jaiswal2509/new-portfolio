import { PrismaClient } from "@prisma/client";

/*
    This is done so that we can restrict the call to cloud everytime,
    the app is re-rendered after any change by making the prismaClientSinleTon.
    So, if globalThisForPrisma.prisma is already defined, we will use that.
    Otherwise, we will create a new PrismaClient instance.
*/

const prismaClientSinleTon = () => {
  return new PrismaClient();
};

type prismaClientSinleTonType = ReturnType<typeof prismaClientSinleTon>;

// eslint-disable-next-line
const globalThisForPrisma = globalThis as unknown as {
  prisma: prismaClientSinleTonType | undefined;
};

const prisma = globalThisForPrisma.prisma ?? new PrismaClient();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThisForPrisma.prisma = new PrismaClient();
