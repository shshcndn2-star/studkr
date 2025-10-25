'use client';

import { useState } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#specs', label: 'المواصفات' },
  { href: '#history', label: 'التاريخ' },
  { href: '#evolution', label: 'التطور' },
  { href: '#tracks', label: 'الحلبات والسباقات' },
  { href: '#mods', label: 'التعديلات' },
  { href: '#gallery', label: 'المعرض' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-4">
          <Car className="h-6 w-6 text-primary" />
          <h1 className="font-headline text-lg font-bold text-primary">The End</h1>
        </div>
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground/80 transition-colors hover:text-foreground font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full pr-0">
              <div className="flex items-center justify-between p-4 border-b">
                 <div className="flex items-center gap-4">
                    <Car className="h-6 w-6 text-primary" />
                    <h1 className="font-headline text-lg font-bold text-primary">The End</h1>
                 </div>
                 <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                    <X />
                    <span className="sr-only">Close Menu</span>
                </Button>
              </div>

              <nav className="mt-8">
                <ul className="flex flex-col items-center gap-6 text-lg">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-foreground/80 transition-colors hover:text-foreground font-medium"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
