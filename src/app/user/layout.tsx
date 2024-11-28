'use client';

import {Inter} from "next/font/google";
import {cn} from "@/lib/utils";
import Sidebar from "@/components/ui/sidebar";
import Navbar from "@/components/layout/navbar";
import {MobileDockMenu} from "@/components/layout/mobile-dock";
import {LayoutDashboard, ListStart, LogOut, Star, User} from "lucide-react";

const inter = Inter({subsets: ["latin"]});

export default function UserLayout({children,}: { children: React.ReactNode; }) {

    const links = [
        {title: "Home", href: "/user/dashboard", icon: LayoutDashboard},
        {title: "Reviews", href: "/users", icon: Star},
        {title: "Listing", href: "/users", icon: ListStart},
        {title: "Profile", href: "/profile", icon: User},
        {title: "Logout", href: "/logout", icon: LogOut},
    ];

    return (
        <div>
            <div className="hidden lg:block">
                <Navbar/>
            </div>
            <div className={cn("min-h-screen w-full text-black flex", inter.className,
                {"debug-screens": process.env.NODE_ENV === "development"}
            )}
            >
                {/* Sidebar */}

                <Sidebar/>
                {/* Main Content */}
                <main className="p-8 w-full">{children}</main>

            </div>
            <MobileDockMenu links={links}/>
        </div>
    );
}