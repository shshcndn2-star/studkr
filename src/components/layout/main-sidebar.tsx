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

export function MainSidebar() {
  const checkActivePath = useActivePath();
  const { setOpenMobile } = useSidebar();
  const navLinks = defaultNavLinks();

  return (
    <SidebarContent>
      <SidebarMenu>
        {navLinks.map((link) => (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href} legacyBehavior passHref>
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
