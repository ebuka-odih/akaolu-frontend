import { FaHome, FaUser, FaList, FaBookmark, FaEnvelope, FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="hidden lg:block w-56 bg-white shadow-lg rounded-md mt-6 ml-10">
        <div className="flex flex-col">
          {/* Avatar Section */}
          <div className="flex items-center justify-center py-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-bold text-xl">A</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col">
            <a
              href="#dashboard"
              className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors bg-danger text-white shadow-md"
            >
              <FaHome className="mr-3" />
              Dashboard
            </a>
            <a
              href="#profile"
              className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <FaUser className="mr-3" />
              Profile
            </a>
            <a
              href="#my-listing"
              className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <FaList className="mr-3" />
              My Listing
            </a>
            <a
              href="#bookmarks"
              className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <FaBookmark className="mr-3" />
              Bookmarks
            </a>
            <a
              href="#messages"
              className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <FaEnvelope className="mr-3" />
              Messages
            </a>
            <a
              href="#logout"
              className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <FaSignOutAlt className="mr-3" />
              Logout
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 mt-6 ml-4 mr-5 lg:ml-5 mb:ml-0">
        <div className="bg-gradient-to-b from-gray-800 to-gray-700 text-white py-12 px-6 rounded-md shadow-md">
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          {/* Content Section */}
          <div className="py-6">
            <h2 className="text-lg font-medium">Welcome to your Dashboard</h2>
            <p className="text-gray-600 mt-2">
              Manage your profile, listings, and more. Navigate through the menu to access different sections of the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}