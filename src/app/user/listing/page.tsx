'use client';

import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { LucideEye, LucideMapPin } from "lucide-react";


const listings = [
  {
    id: 1,
    featured: true,
    category: "Restaurant",
    title: "Bistro Restaurant",
    location: "Asaba",
    phone: "+44 6633 6526",
    views: 4000,
    rating: 4.0,
    reviews: 50,
    price: 350,
    oldPrice: 450,
    image: "https://blog.bulbthings.com/wp-content/uploads/2023/02/shutterstock_2190938193.jpg",
    user: { name: "John Doe", avatar: "https://blog.bulbthings.com/wp-content/uploads/2023/02/shutterstock_2190938193.jpg" },
  },
  {
    id: 2,
    featured: true,
    category: "House Painter",
    title: "CDL A OTR Company Driver Job",
    location: "Lagos",
    phone: "+44 6633 6526",
    views: 4000,
    rating: 4.0,
    reviews: 50,
    price: 350,
    oldPrice: 450,
    image: "https://img.freepik.com/free-photo/young-afro-man-against-yellow-wall_1194-433475.jpg",
    user: { name: "Orlando Diggs", avatar: "https://blog.bulbthings.com/wp-content/uploads/2023/02/shutterstock_2190938193.jpg" },
  },
];

export default function UserDashboard() {
  return (
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="My Listing"/>

        {/* New Listings Section */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {listings.map((listing) => (
                <div
                    key={listing.id}
                    className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden"
                >
                  {/* Image Section */}
                  <div className="w-full sm:w-1/2">
                    <img
                        src={listing.image}
                        alt={listing.title}
                        className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between p-6 w-full sm:w-1/2">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <img
                              src={listing.user.avatar}
                              alt={listing.user.name}
                              className="w-5 h-5 rounded-full"
                          />
                          <span>{listing.user.name}</span>
                        </div>

                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                        {listing.title}
                      </h3>
                      <span>{listing.category}</span>

                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                        <LucideMapPin className="w-4 h-4 mr-1"/>
                        {listing.location}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-3">
                        <div className="flex items-center gap-1">
                          <span
                              className="bg-orange-100 text-orange-500 px-2 py-1 rounded font-medium">{listing.rating + ".0"}</span>
                          <span className="ml-1 text-xs">({listing.reviews} Reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                        <LucideEye className="w-4 h-4"/>
                          {listing.views}
                        </div>
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="flex">
                        <Button variant="link" className="text-blue-600">
                          View details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

        </section>

      </div>
  );
}