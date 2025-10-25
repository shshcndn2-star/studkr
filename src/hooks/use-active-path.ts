'use client';

import { usePathname } from 'next/navigation';

export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();
  return (path: string) => pathname === path;
}
