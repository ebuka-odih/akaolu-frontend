"use client";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Adjust the import path to where your utility is located
import { Button } from "@/components/ui/button";
import { Home, Settings, Menu } from "lucide-react"; // Example icons from Lucide

const MobileSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-gray-900 text-white transition-width duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <div className="p-4">
        <Button variant="ghost" className="w-full" onClick={toggleCollapse}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-4 p-4">
        <a
          href="#"
          className="flex items-center space-x-2 text-sm hover:bg-gray-800 p-2 rounded-md"
        >
          <Home className="h-5 w-5" />
          {!isCollapsed && <span>Home</span>}
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-sm hover:bg-gray-800 p-2 rounded-md"
        >
          <Settings className="h-5 w-5" />
          {!isCollapsed && <span>Settings</span>}
        </a>
      </nav>

      {/* Footer */}
      <div className="p-4 text-center text-xs border-t border-gray-800">
        {!isCollapsed && <span>&copy; 2025 Your Company</span>}
      </div>
    </div>
  );
};

export default MobileSidebar;
