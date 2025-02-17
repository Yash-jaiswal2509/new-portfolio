'use server';

import * as zod from 'zod';
import { AddProjectSchema } from '@/schemas';
import prisma from '@/lib/db';

type AddProjectDataProps = {
  values: zod.infer<typeof AddProjectSchema>;
  userId: string;
};

export const addProject = async ({ values, userId }: AddProjectDataProps) => {
  try {
    const validatedFields = AddProjectSchema.safeParse(values);
    if (!validatedFields.success) {
      return { success: false, error: 'Invalid fields' };
    }

    await prisma.project.create({
      data: {
        name: values.name,
        description: values.description,
        projectUrl: values.projectLink,
        githubUrl: values.projectGithub,
        imageUrl: values.projectImage,
        projectDate: values.projectDate,
        userId,
      },
    });

    return { success: true, message: 'Project added successfully' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error adding project' };
  }
};
