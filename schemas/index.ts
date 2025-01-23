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
