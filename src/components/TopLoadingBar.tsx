"use client"

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const TopLoadingBar = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Always reset loading state when pathname changes
    setLoading(true);

    // Stop loading after a short delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 bg-danger z-50 animate-loading-bar"
    />
  );
};

export default TopLoadingBar;