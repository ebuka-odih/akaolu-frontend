'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-danger text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MySite
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/user/dashboard/" className="hover:text-gray-300">
            dashboard
          </Link>

          <Link href="/auth/login" className="hover:text-gray-300">
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}