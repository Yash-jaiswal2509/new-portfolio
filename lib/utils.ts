import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import GITHUB from '../public/social/github.png';
import LINKEDIN from '../public/social/linkedin.png';
import TWITTER from '../public/social/twitter.png';
import MEDIUM from '../public/social/medium.png';
import { SocialMediaProps, type NavbarItemsProps } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navbarItems: NavbarItemsProps[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'CP',
    href: '/competitive-programming',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Develop',
    href: '/develop',
  },
];

export const socialMedia: SocialMediaProps[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Yash-jaiswal2509/',
    icon: GITHUB,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yash-jaiswal-aaa8112ab/',
    icon: LINKEDIN,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/YashJaiswa50855/',
    icon: TWITTER,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@yashjaiswal2509',
    icon: MEDIUM,
  },
];
