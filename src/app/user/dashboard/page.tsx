// src/app/user/dashboard/page.tsx

import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Your dashboard content */}
    </div>
  );
};

export default DashboardPage;

// 'use client';

// import { useEffect, useState } from 'react';
// import PageTitle from "@/components/PageTitle";
// import Image from 'next/image';

// // import Link from 'next/link';

// const listings = [
//   {
//     id: 1,
//     featured: true,
//     category: "Restaurant",
//     title: "Bistro Restaurant",
//     location: "Asaba",
//     phone: "+44 6633 6526",
//     views: 4000,
//     rating: 4.0,
//     reviews: 50,
//     price: 350,
//     oldPrice: 450,
//     image: "https://blog.bulbthings.com/wp-content/uploads/2023/02/shutterstock_2190938193.jpg",
//     user: { name: "John Doe", avatar: "https://blog.bulbthings.com/wp-content/uploads/2023/02/shutterstock_2190938193.jpg" },
//   },
//   // Add other listings here...
// ];

// export default function UserDashboard() {
//   const [user, setUser] = useState(null); // State to hold user details
//   const [loading, setLoading] = useState(true); // State to manage loading

//   // Fetch user details
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch('/api/auth/me', {
//           method: 'POST',
//           credentials: 'include', // Ensures cookies are sent with the request
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUser(data); // Set user data
//         } else {
//           console.error('Failed to fetch user details', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <div>User not logged in. Please log in to access the dashboard.</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <PageTitle title={`Welcome, ${user.name}`} />
//       <div className="user-details">
//         <Image src={user.avatar || '/default-avatar.png'} alt={`${user.name}'s avatar`} className="avatar" />
//         <p>Email: {user.email}</p>
//         <p>Role: {user.role}</p>
//       </div>
//       <div className="listings-container">
//         {listings.map((listing) => (
//           <div key={listing.id} className="listing-card">
//             <img src={listing.image} alt={listing.title} />
//             <div className="listing-info">
//               <h3>{listing.title}</h3>
//               <p>Category: {listing.category}</p>
//               <p>Location: {listing.location}</p>
//               <p>Price: ${listing.price} (Old: ${listing.oldPrice})</p>
//               <p>Views: {listing.views} | Rating: {listing.rating} | Reviews: {listing.reviews}</p>
//               <p>Contact: {listing.phone}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }