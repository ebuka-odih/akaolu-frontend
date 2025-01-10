"use client";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../themeBtn";
import { FiSidebar } from "react-icons/fi";
// import { config } from "@/constants/data";
import Image from "next/image";
import Profile from "@/public/images/profile.jpg";
import { MdDashboard } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { RiGalleryLine } from "react-icons/ri";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <nav className="flex bg-transparent sticky top-0 w-full z-10">
      {/* Desktop Navbar */}
      <div className="flex items-center font-semi justify-between w-full h-16 px-4 border-b= bg-gray-200 dark:bg-gray-950 md:flex">
        {/* Left Section */}
        <div className="text-sm flex items-center">
          <div>
            {/* Mobile Navbar Toggle */}
            <button
              className="md:hidden p-2 text-gray-800 dark:text-gray-100 text-lg"
              onClick={toggleMobileNav}
              aria-label="Toggle Mobile Nav"
            >
              <FiSidebar />
            </button>
          </div>
          <Link href="/dashboard" className="hidden md:flex text-gray-400">
            Dashboard
          </Link>
          <span className="text-gray-400 mx-2 hidden md:flex">/</span>
          <span className="text-gray-700 me-2 md:hidden">|</span>
          <span className="text-gray-800 dark:text-gray-100">Overview</span>
        </div>

        {/* Right Section */}
        <div className="flex gap-2 sm:gap-3 items-center justify-end">
          <div className="hidden md:flex">
            <button>search</button>
          </div>
          <div className="bg-gray-600 rounded-full md:h-10 h-8  md:w-10 w-8  border overflow-hidden">
            <Image
              height={50}
              width={50}
              className="w-full"
              src={Profile}
              alt="Profile Picture"
            />
          </div>
          <button className="">
            <ModeToggle />
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`h-screen text-white flex flex-col fixed  inset-y-0 left-0 bg-gray-200 dark:bg-gray-950  transform transition-transform duration-700 ease-in-out  ${
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-20 max-w-64 w-full shadow-lg`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="p-8">
            <button
              onClick={toggleMobileNav}
              aria-label="Close Mobile Nav"
              className="w-full flex justify-between items-center text-gray-800 dark:text-gray-100"
            >
              <span>AKAOLU</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 px-4 justify-between items-stretch h-full">
            <div>
              <nav className="flex-1 py-4 space-y-2 overflow-hidden scroll-auto">
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 space-x-4 rounded-lg hover:bg-gray-800"
                >
                  <h1>
                    <MdDashboard />
                  </h1>{" "}
                  <h2 className="">Dashboard </h2>
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 space-x-4 rounded-lg hover:bg-gray-800"
                >
                  <h1>
                    <MdOutlineReviews />
                  </h1>{" "}
                  <h2 className="">Reviews</h2>
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 space-x-4 rounded-lg hover:bg-gray-800"
                >
                  <h1>
                    <FaServicestack />
                  </h1>{" "}
                  <h2 className="">Services</h2>
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 space-x-4 rounded-lg hover:bg-gray-800"
                >
                  <h1>
                    <LuMessageSquareMore />
                  </h1>{" "}
                  <h2 className="">Messages</h2>
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 space-x-4 rounded-lg hover:bg-gray-800"
                >
                  <h1>
                    <CgProfile />
                  </h1>{" "}
                  <h2 className="">Profile</h2>
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 space-x-4 rounded-lg hover:bg-gray-800"
                >
                  <h1>
                    <RiGalleryLine />
                  </h1>{" "}
                  <h2 className="">Gallery</h2>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
