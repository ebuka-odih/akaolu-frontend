import { AppSidebar } from "@/components/layout/listing/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
import Header from '@/components/layout/listing/header';

interface AppLayoutProps {
  children: React.ReactNode
}
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarInset>
            {/*<Header />*/}
            <div
                className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
                <SiteHeader/>
                     <SidebarTrigger className="-ml-1"/>
                <main className="flex-1">{children}</main>
                <SiteFooter/>
            </div>

            {/*<div className="flex flex-1 flex-col gap-4 p-4">*/}
            {/*    <SiteHeader/>*/}
            {/*    <SidebarTrigger className="-ml-1"/>*/}
            {/*    <main className="flex-1">{children}</main>*/}
            {/*    <SiteFooter/>*/}
            {/*</div>*/}
        </SidebarInset>
    </SidebarProvider>
  )
}