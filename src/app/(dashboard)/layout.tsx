import NavbarComp from '@/common/components/navbar/app-navbar';
import { AppSidebar } from '@/common/components/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full bg-[#FBFBFB]'>
        <NavbarComp />
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  );
}
