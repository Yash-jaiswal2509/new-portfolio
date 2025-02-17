'use server';

import * as zod from 'zod';
import { AddProjectSchema } from '@/schemas';
import prisma from '@/lib/db';

type AddProjectDataProps = {
  values: zod.infer<typeof AddProjectSchema>;
  userId: string;
};

export const addProject = async ({
  values,
  userId,
}: AddProjectDataProps) => {
  const validatedFields = AddProjectSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  try {
    const data = validatedFields.data;
    const { name, description, projectGithub, projectImage, projectLink, projectDate } =
      data;

    console.log(data);

    await prisma.project.create({
      data: {
        name: name,
        description: description,
        projectUrl: projectLink,
        githubUrl: projectGithub,
        imageUrl: projectImage,
        projectDate: projectDate,
        userId,
      },
    });

    console.log('Project added successfully');
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error adding project' };
  }

  return { success: true, message: 'Project added successfully' };
};
