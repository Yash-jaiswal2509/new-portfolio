'use server';

import { getAdmin } from '@/data/user';
import prisma from '@/lib/db';
import { cache } from 'react';

export const getProjects = cache(async () => {
  try {
    const admin = await getAdmin();
    const adminId = admin?.id as string;

    const projects = await prisma.project.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        projectUrl: true,
        githubUrl: true,
        imageUrl: true,
        createdAt: true,
        projectDate: true,
      },
      where: {
        userId: adminId,
      },
    });

    return { success: true, projects };
  } catch (error) {
    // console.error(error);
    return {
      success: false,
      error: 'An error occurred while fetching projects',
      projects: [],
    };
  }
});
