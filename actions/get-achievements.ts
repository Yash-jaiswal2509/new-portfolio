'use server';

import { getAdmin } from '@/data/user';
import prisma from '@/lib/db';
import { unstable_cache } from 'next/cache';

export const getAchievements = unstable_cache(
  async () => {
    try {
      const admin = await getAdmin();
      const adminId = admin?.id as string;

      const achievements = await prisma.achievement.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          achievementImageUrl: true,
          createdAt: true,
          achievedAt: true,
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
  },
  ['achievements-list'],
  {
    revalidate: 3600,
    tags: ['achievements'],
  },
);
