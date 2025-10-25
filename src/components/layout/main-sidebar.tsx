'use client';

import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { navLinks } from '@/lib/utils';
import { useActivePath } from '@/hooks/use-active-path';
import Link from 'next/link';

export function MainSidebar() {
  const checkActivePath = useActivePath();
  const { setOpenMobile } = useSidebar();

  const handleLinkClick = () => {
    setOpenMobile(false);
  };

  return (
    <SidebarContent>
      <SidebarMenu>
        {navLinks.map((link) => (
          <SidebarMenuItem key={link.href}>
            <SidebarMenuButton
              asChild
              isActive={checkActivePath(link.href)}
              onClick={handleLinkClick}
              tooltip={link.label}
            >
              <Link href={link.href}>
                <span>{link.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
}
