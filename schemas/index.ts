import * as zod from 'zod';
import { UserRole } from '@prisma/client';

export const LoginSchema = zod.object({
  email: zod.string().email({
    message: 'Email is required',
  }),
  password: zod.string().min(1, {
    message: 'Password is required',
  }),
  code: zod.string().optional(),
});

export const RegisterSchema = zod.object({
  name: zod.string().min(3, {
    message: 'Minimum name length is 3 characters',
  }),
  email: zod.string().email({
    message: 'Email is required',
  }),
  password: zod.string().min(8, {
    message: 'Minimum password length is 8 characters',
  }),
});
