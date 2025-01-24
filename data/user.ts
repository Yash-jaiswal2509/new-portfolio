import prisma from '@/lib/db';

export const getUserByEmail = async (email: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return result;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { id },
    });

    return result;
  } catch (error) {
    return null;
  }
};
