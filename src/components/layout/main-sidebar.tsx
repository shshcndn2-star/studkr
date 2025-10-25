'use client';

import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { navLinks as defaultNavLinks } from '@/lib/utils';
import { useActivePath } from '@/hooks/use-active-path';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition, useMemo } from 'react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export function MainSidebar() {
  const checkActivePath = useActivePath();
  const { setOpenMobile } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = useMemo(() => defaultNavLinks(t), [t]);

  const handleLinkClick = (href: string) => {
    if (pathname !== href) {
      startTransition(() => {
        router.push(href);
      });
    }
    setOpenMobile(false);
  };

  return (
    <SidebarContent>
      <SidebarMenu>
        {navLinks.map((link) => (
          <SidebarMenuItem key={link.href}>
            <SidebarMenuButton
              isActive={checkActivePath(link.href)}
              onClick={() => handleLinkClick(link.href)}
              tooltip={link.label}
              disabled={isPending}
            >
              <span>{link.label}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
}
