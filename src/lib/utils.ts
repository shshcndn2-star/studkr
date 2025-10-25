import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { NavLink } from '@/lib/types';
import type { Translations } from "./translations";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navLinks = (t: Translations[keyof Translations] | any): NavLink[] => [
  { href: '/', label: t.nav.home },
  { href: '/specs', label: t.nav.specs },
  { href: '/history', label: t.nav.history },
  { href: '/evolution', label: t.nav.evolution },
  { href: '/tracks', label: t.nav.tracks },
  { href: '/mods', label: t.nav.mods },
  { href: '/gallery', label: t.nav.gallery },
];
