'use client';

import Link from 'next/link';
import { Store } from "lucide-react";
import logoImg from "@/public/images/2.png";
import Image from "next/image";

export default function Navbar() {
  return (
      <header className="bg-white hidden lg:block sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black">
            Olu Listing
            {/*<Image className="" src={logoImg} alt="OLU.js logo" width={230} height={200} priority/>*/}
          </Link>

          {/* Search Bar */}
          <div
              className="flex items-center border rounded-full overflow-hidden shadow-lg w-full max-w-lg mx-4 bg-white">
            <input
                type="text"
                placeholder="Electricians"
                className="px-4 py-2 w-1/2 focus:outline-none"
            />
            <span className="border-r h-5"></span>
            <input
                type="text"
                placeholder="Okpanam Asaba"
                className="px-4 py-2 w-1/2 focus:outline-none"
            />
            <button className="bg-danger text-white px-4 py-2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <Link
                href="/claim-a-shop"
                className="flex items-center px-4 py-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-50 hover:border-red-600"
            >
              <span className="mr-2">Claim a Shop</span>
              <Store className="w-4 h-4 text-danger"/>
            </Link>
            <Link href="/user/dashboard" className="text-gray-600 hover:text-black">
             Dashboard
            </Link>
            <Link
                href="/auth/login"
                className="px-4 py-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-100 hover:border-danger"
            >
              Log In
            </Link>
            <Link
                href="/auth/signup"
                className="bg-danger text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Sign Up
            </Link>
          </nav>
        </div>

        {/* Submenu */}
        <div className="container mx-auto py-2 px-6 flex items-center space-x-6 text-gray-600">
          <Link href="/restaurants" className="hover:text-black">
            Restaurants
          </Link>
          <Link href="/home-services" className="hover:text-black">
            Home Services
          </Link>
          <Link href="/more" className="hover:text-black">
            More
          </Link>
        </div>
      </header>

  );
}