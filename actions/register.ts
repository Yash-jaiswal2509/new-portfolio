'use server';

import * as zod from 'zod';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/db';
import { getUserByEmail } from '@/data/user';

export const register = async (values: zod.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { name, email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already exists' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { error: 'Something went wrong' };
  }

  return { success: 'Registered successfully' };
};
