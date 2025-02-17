'use server';

import * as zod from 'zod';
import { AddAchievementSchema } from '@/schemas';
import prisma from '@/lib/db';

type AddAchievementDataProps = {
  values: zod.infer<typeof AddAchievementSchema>;
  userId: string;
};

export const addAchievement = async ({
  values,
  userId,
}: AddAchievementDataProps) => {
  try {
    const validatedFields = AddAchievementSchema.safeParse(values);
    if (!validatedFields.success) {
      return { success: false, error: 'Invalid fields' };
    }

    await prisma.achievement.create({
      data: {
        title: values.title,
        description: values.description,
        achievementImageUrl: values.achievementImageUrl,
        achievedAt: values.achievedAt,
        userId,
      },
    });

    return { success: true, message: 'Achievement added successfully' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error adding achievement' };
  }
};
