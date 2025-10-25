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
import { useMemo } from 'react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export function MainSidebar() {
  const checkActivePath = useActivePath();
  const { setOpenMobile } = useSidebar();
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = useMemo(() => defaultNavLinks(t), [t]);

  return (
    <SidebarContent>
      <SidebarMenu>
        {navLinks.map((link) => (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href} passHref legacyBehavior>
              <SidebarMenuButton
                as="a"
                isActive={checkActivePath(link.href)}
                onClick={() => setOpenMobile(false)}
                tooltip={link.label}
              >
                <span>{link.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
}
