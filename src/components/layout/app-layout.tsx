import { Sidebar, SidebarContentLayout } from "@/components/ui/sidebar";
import Footer from "./footer";
import Header from "./header";
import { MainSidebar } from "./main-sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
       <Sidebar side="right" collapsible="icon">
          <MainSidebar />
       </Sidebar>
       <SidebarContentLayout>
         <Header />
         <div className="flex-1">{children}</div>
         <Footer />
       </SidebarContentLayout>
    </div>
  );
}
