"use client"

import "./globals.css";
// import TopLoadingBar  from "@/components/TopLoadingBar"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
//   /* @ts-ignore */
import NProgress from 'nprogress';
import '@/app/styles/nprogress.css'; // Import the CSS
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const pathname = usePathname();

      useEffect(() => {
        NProgress.configure({ showSpinner: false, speed: 700 });

        NProgress.start();
        NProgress.done();

        return () => {
          NProgress.done(); // Clean up
        };
      }, [pathname]);

    return (
        <html lang="en">
            <body className="bg-gray-50">
            {/*<TopLoadingBar />*/}
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
                {children}
                </ThemeProvider>
            </body>
        </html>
    );
}