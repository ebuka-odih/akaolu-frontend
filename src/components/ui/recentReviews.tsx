import React from "react";
import { reviews } from "@/constants/data";
const recentReviews = () => {
  return (
    <div className="px-6 pt-6 max-h-[450px] overflow-y-auto reviews_scrollbar">
    <div className="flex flex-col overflow-hidden justify-start items-start py-2">
      <span className="text-gray-800 dark:text-gray-100 text-sm">
        Recent Reviews
      </span>
      <p className="text-gray-500 text-sm">
        Showing total reviews for the last 3 months
      </p>
    </div>
    {reviews.map((review, index) => (
      <div key={index}>
        <div className="flex items-center justify-between">
          <div className="flex items-start space-y-2">
            <div>
              <div className="h-8 w-8 rounded-full dark:bg-[#201F23] bg-gray-300 grid place-content-center">
                <h2>{review.initials}</h2>
              </div>
            </div>
  
            <div className="flex flex-col justify-start items-start px-6 w-full">
              <span className="text-gray-800 dark:text-gray-100 text-sm">
                {review.name}{" "}
              </span>
              <div className="">
                <p className="flex items-stretch text-gray-500 text-sm">
                  {review.review}
                </p>
              </div>
              <h2 className="mt-2 text-gray-800 dark:text-gray-600 text-[10px]">
                {review.date}{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default recentReviews;
