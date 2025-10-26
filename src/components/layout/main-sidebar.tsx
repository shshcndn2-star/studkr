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
            <Link href={link.href} onClick={() => setOpenMobile(false)} className="w-full block">
              <SidebarMenuButton
                isActive={checkActivePath(link.href)}
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
