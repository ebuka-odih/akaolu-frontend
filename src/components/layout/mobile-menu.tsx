import React, { useState } from "react";
import {Search} from "lucide-react";
import Image from "next/image";

const MobileMenuWithSearch = () => {
  const [isLocationSearchVisible, setIsLocationSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsLocationSearchVisible(true);
  };

  const handleCancelClick = () => {
    setIsLocationSearchVisible(false);
  };

  return (
    <header className="bg-danger text-white py-2 block lg:hidden sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image width={24}
height={24}            src="/logo.svg"
            alt="Logo"
            className="h-6 w-6"
          />
          <span className="text-lg font-bold">Olu</span>
        </div>

        {/* Menu Icon */}
        <button className="text-white text-2xl focus:outline-none">
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-2 px-4">
        <input
          type="text"
          placeholder="e.g. tacos, Mel's"
          className="w-full px-3 py-2 rounded-md text-gray-800 text-sm focus:outline-none"
          onClick={handleSearchClick}
        />
      </div>

      {/* Location Search and Buttons */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isLocationSearchVisible ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
        } overflow-hidden mt-2 px-4`}
      >
        {isLocationSearchVisible && (
          <div>
            {/* Location Input */}
            <input
              type="text"
              placeholder="Enter location"
              className="w-full px-3 py-2 rounded-md text-gray-800 text-sm mb-2 focus:outline-none"
            />

            {/* Search Button and Cancel Text */}
            <div className="flex items-center justify-between">
              <button
                className="bg-gray-800 text-white text-sm py-1 px-4 rounded-md focus:outline-none"
              >
                <Search />
              </button>
              <button
                onClick={handleCancelClick}
                className="text-sm text-gray-300 underline focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MobileMenuWithSearch;