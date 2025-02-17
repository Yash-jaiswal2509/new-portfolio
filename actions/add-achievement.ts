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
    const { title, description, achievementImageUrl, achievedAt } = data;
    console.log(data);
    await prisma.achievement.create({
      data: {
        title: title,
        description: description,
        achievementImageUrl: achievementImageUrl,
        achievedAt: achievedAt,
        userId,
      },
    });
    console.log('Achievement added successfully');
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error adding project' };
  }

  return { success: true, message: 'Achievement added successfully' };
};
