import React from "react";

const ListingOnboarding = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        {/* Back Link */}


        {/* Heading */}
        <h1 className="text-xl text-center font-semibold text-gray-800 mb-2">Business Onboarding</h1>
        <hr/>

        {/* Description */}
        <div className="text-gray-600 mb-6 mt-3">
          <h2 className="text-lg font-bold mb-2">Showcase Your Business on Olu Listing</h2>
          <p className="text-sm mb-2">
            Take the next step in growing your business by joining our trusted network of verified businesses. <br/>
            Create a professional profile to showcase your offerings, connect with clients, and establish credibility in
            your industry.
          </p>
          <p className="text-sm mb-4">
            Please provide accurate and up-to-date information to help clients easily find and
            connect with you. A complete profile increases your chances of securing more jobs
            and building your reputation.
          </p>
        </div>

        {/* Start Button */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <a
              href="/user/listing/create"
              className="w-full sm:w-auto py-2 px-4 bg-danger text-white font-medium text-sm rounded-md hover:bg-gray-50 hover:border-red-600 hover:text-red-600 transition-all duration-300 border-2 border-transparent sm:mr-4 text-center"
          >
            Start Onboarding
          </a>
        </div>

      </div>
    </div>
  );
};

export default ListingOnboarding;