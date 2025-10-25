'use client';

import { Car } from 'lucide-react';
import { SidebarTrigger } from '../ui/sidebar';
import { ThemeToggle } from '../theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="md:hidden">
          <SidebarTrigger />
        </div>
        <div className="flex items-center gap-4 flex-1">
          <Car className="h-6 w-6 text-primary" />
          <h1 className="font-headline text-lg font-bold text-primary">The End</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
