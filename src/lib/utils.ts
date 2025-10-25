import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { NavLink } from '@/lib/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navLinks = (): NavLink[] => [
  { href: '/', label: 'الرئيسية' },
  { href: '/specs', label: 'المواصفات' },
  { href: '/history', label: 'التاريخ' },
  { href: '/evolution', label: 'التطور' },
  { href: '/tracks', label: 'الحلبات' },
  { href: '/mods', label: 'التعديلات' },
  { href: '/gallery', label: 'المعرض' },
];
