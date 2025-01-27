'use server';

import * as zod from 'zod';
import { AddAchievementSchema } from '@/schemas';
import prisma from '@/lib/db';

type AddProjectDataProps = {
  values: zod.infer<typeof AddAchievementSchema>;
  userId: string;
};

export const addAchievement = async ({
  values,
  userId,
}: AddProjectDataProps) => {
  const validatedFields = AddAchievementSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  try {
    const data = validatedFields.data;
    const { title, description, achievementImageUrl } = data;

    await prisma.achievement.create({
      data: {
        title: title,
        description: description,
        achievementImageUrl: achievementImageUrl,
        userId,
      },
    });
  } catch (error) {
    return { success: false, message: 'Error adding project' };
  }

  return { success: true, message: 'Achievement added successfully' };
};
