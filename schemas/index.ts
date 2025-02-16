import * as zod from 'zod';

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

export const AddProjectSchema = zod.object({
  name: zod.string().min(3, {
    message: 'Minimum name length is 3 characters',
  }),
  description: zod.string().min(10, {
    message: 'Minimum description length is 10 characters',
  }),
  projectLink: zod.string().url({
    message: 'Please enter a valid project link',
  }),
  projectGithub: zod.string().url({
    message: 'Please enter a valid github link',
  }),
  projectImage: zod.string().url({
    message: 'Please enter a valid image link',
  }),
  createdAt: zod.date(),
});

export const AddAchievementSchema = zod.object({
  title: zod.string().min(3, {
    message: 'Minimum title length is 3 characters',
  }),
  description: zod.string().min(10, {
    message: 'Minimum description length is 10 characters',
  }),
  achievementImageUrl: zod.string().url({
    message: 'Please enter a valid image link',
  }),
  achievedAt: zod.date(),
});
