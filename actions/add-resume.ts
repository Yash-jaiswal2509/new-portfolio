"use server";

import prisma from '@/lib/db';
import { ExtendedUser } from '@/next-auth';

type AddResumeData = {
  user: ExtendedUser;
  resume: string;
};

export const addResume = async (data: AddResumeData) => {
  const { user, resume } = data;

  if (!user) return { success: false, message: 'User not found' };
  if (!resume) return { success: false, message: 'Resume not found' };

  if (user.role === 'ADMIN') {
    const email = user?.email!;

    try {
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          resume: resume,
        },
      });
    } catch (error) {
      console.log(error);
      return { success: false, message: 'Failed to upload resume' };
    }

    return { success: true, message: 'Resume uploaded successfully' };
  }
};
