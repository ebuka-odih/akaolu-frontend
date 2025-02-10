// ProgressBar.jsx

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "@/app/styles/nprogress.css"; // Import the CSS

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    NProgress.start();
    NProgress.done();

    return () => {
      NProgress.done(); // Clean up
    };
  }, [pathname]);

  return null; // No need to render anything
}
