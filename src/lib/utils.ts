import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { usePathname } from 'next/navigation'
import type { NavLink } from '@/lib/types';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname()
  return (path: string) => pathname === path
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'الرئيسية' },
  { href: '/specs', label: 'المواصفات' },
  { href: '/history', label: 'التاريخ' },
  { href: '/evolution', label: 'التطور' },
  { href: '/tracks', label: 'الحلبات والسباقات' },
  { href: '/mods', label: 'التعديلات' },
  { href: '/gallery', label: 'المعرض' },
  { href: '/video', label: 'الفيديو' },
  { href: '/summarizer', label: 'أداة التلخيص' },
];
