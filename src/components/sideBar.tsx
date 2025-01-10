"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { FiSidebar } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { RiGalleryLine } from "react-icons/ri";
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`h-screen dark:bg-bg_dark bg-gray-200 border-e border-gray-300 dark:border-gray-900 text-gray-600 dark:text-gray-100 flex flex-col ${
        isCollapsed ? "w-20" : "w-64"
      } transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center sticky top-0 z-50 justify-between px-4 h-16 border-b border-gray-300 dark:border-gray-900">
        <span
          className={`text-lg font-semibold ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          MyApp
        </span>
        <Button variant="ghost" size="sm" onClick={toggleSidebar}>
          {isCollapsed ? <FiSidebar /> : <FiSidebar />}
        </Button>
      </div>

      {/* Sidebar Content */}
      <nav className="flex-1 px-2 py-4 space-y-2 overflow-hidden scroll-auto">
        <SidebarItem
          icon={<MdDashboard />}
          label="Dashboard"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<MdOutlineReviews />}
          label="Reviews"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<FaServicestack />}
          label="Services"
          isCollapsed={isCollapsed}
        />{" "}
        <SidebarItem
          icon={<LuMessageSquareMore />}
          label="Messages"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<CgProfile />}
          label="Profile"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<RiGalleryLine />}
          label="Gallery"
          isCollapsed={isCollapsed}
        />{" "}
      </nav>

      {/* Sidebar Footer */}
      <div className="px-4 py-4 sticky bottom-0">
        <Button variant="ghost" size="sm" className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, isCollapsed }) {
  return (
    <div className="flex items-center px-4 py-2 space-x-4 rounded-lg hover:bg-gray-800">
      <span className="text-xl">{icon}</span>
      {!isCollapsed && <span className="text-sm">{label}</span>}
    </div>
  );
}
