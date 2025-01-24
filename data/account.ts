import prisma from '@/lib/db';

export const getAccountByUserId = async (userId: string) => {
  try {
    const result = await prisma.account.findFirst({
      where: { userId },
    });

    return result;
  } catch (error) {
    return null;
  }
};
