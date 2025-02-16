'use server';

import { getAdmin } from '@/data/user';
import prisma from '@/lib/db';

export const getAchievements = async () => {
  try {
    const admin = await getAdmin();
    const adminId = admin?.id as string;

    const achievements = await prisma.achievement.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        achievementImageUrl: true,
      },
      where: {
        userId: adminId,
      },
    });

    return { success: true, achievements };
  } catch (error) {
    return {
      success: false,
      error: 'An error occurred while fetching achievements',
      achievements: [],
    };
  }
};
