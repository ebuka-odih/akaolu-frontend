import Sidebar from "@/components/sideBar";
// import { FiSidebar } from "react-icons/fi";

import { DatePickerWithRange } from "@/components/ui/datedemo";
import Tab from "@/components/ui/tab";
import AreaChartSection from "@/components/ui/areaChartSection";
import PieChart from "@/components/ui/pieChart";
import RecentSales from "@/components/ui/recentReviews";
import Navbar from "@/components/navigation/navbar";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";

const page = () => {
  return (
    <div className="flex bg-gray-200 dark:bg-slate-950 h-screen">
      {/* Sidebar */}
      <div className="max-h-screen overflow-y-auto bg-gray-800 hidden md:flex">
        <Sidebar />
      </div>

      {/* Page */}
      <div className="flex-1 h-screen  overflow-y-auto bg-gray-200 dark:bg-gray-950">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="w-full py-4 overflow-x-hidden p-4">
          <div>
            <div className="flex items-center font-semi justify-between w-full  bg-gray-200- dark:bg-gray-950">
              <div className="text-xl md:text-2xl">
                <span className="text-gray-600 dark:text-gray-100 font-semibold">
                  Hi, Welcome back 👋
                </span>
              </div>
              <div className="hidden md:flex gap-3 items-center justify-end">
                <div className="flex items-center gap-2 ">
                  <div>
                    <DatePickerWithRange />
                  </div>
                  <div>
                    <button className="bg-blue-700 font-medium text-sm  px-4 py-2 rounded-md">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="bg-gray-400 dark:bg-dark_brown text-gray-800 dark:text-gray-500  w-fit flex items-center  text-sm rounded-md p-1 mt-4">
                  <button className=" bg-gray-500 dark:bg-gray-950 text-gray-200 font-medium text-sm  px-4 py-1 me-2 rounded-md">
                    Overview
                  </button>
                  <h1 className="me-1 px-2 font-semibold">Analytics</h1>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                <div className="p-6 rounded-lg border border-gray-300 dark:border-gray-900 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-100 text-sm ">
                      Total Reviews
                    </span>
                    <p className="">
                      <MdOutlineReviews />
                    </p>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-600 dark:text-gray-100 text-lg sm:text-xl md:text-2xl">
                      1000
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">
                      +20.1% from last month
                    </p>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-gray-300 dark:border-gray-900 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-100 text-sm ">
                      Total Views
                    </span>
                    <p className="">
                      <MdOutlinePreview />
                    </p>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-600 dark:text-gray-100 text-lg sm:text-xl md:text-2xl">
                      200{" "}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">
                      +19% from last month
                    </p>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-gray-300 dark:border-gray-900 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-100 text-sm ">
                      Total Rating
                    </span>
                    <p className="">
                      <MdOutlineStarRate />
                    </p>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-600 dark:text-gray-100 text-lg sm:text-xl md:text-2xl">
                      1,023{" "}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">20% from last month</p>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-gray-300 dark:border-gray-900 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-100 text-sm ">
                      Total Clicks
                    </span>
                    <p className="">
                      <TbHandClick />
                    </p>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-600 dark:text-gray-100 text-lg sm:text-xl md:text-2xl">
                      15,231
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">30% from last month</p>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-12 grid-cols-1 gap-4">
                <div className="lg:col-span-7 border border-gray-300 dark:border-gray-900 rounded-lg overflow-hidden">
                  <Tab />
                </div>
                <div
                  className="lg:col-span-5 h-full w-full 
                 rounded-lg border border-gray-300 dark:border-gray-900 "
                >
                  <RecentSales />
                </div>
              </div>
              <div className="grid lg:grid-cols-12 grid-cols-1 gap-4 mt-4">
                <div className="lg:col-span-7 border border-gray-300 dark:border-gray-900 rounded-lg overflow-hidden">
                  <AreaChartSection />
                </div>
                <div
                  className="lg:col-span-5 h-full w-full 
                 rounded-lg border border-gray-300 dark:border-gray-900"
                >
                  <PieChart />
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
