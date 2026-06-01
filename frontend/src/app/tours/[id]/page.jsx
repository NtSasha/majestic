"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TourCard from "@/components/TourCard";
import { useState, useEffect } from "react";

const tourImages = [
  "/images/tour1.png",
  "/images/tour2.png",
  "/images/tour3.png",
  "/images/tour4.png",
];

export default function TourDetailsPage({ params }) {
  const [openDay, setOpenDay] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % tourImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mock data for the related tours
  const relatedTours = [
    {
      id: 1,
      title: "Akagera Park",
      price: "$49/ per person",
      category: "Wildlife & safari",
      image: "/images/rectangle-53.png",
    },
    {
      id: 2,
      title: "Gorilla Trekking",
      price: "$49/ per person",
      category: "Wildlife & safari",
      image: "/images/image2.png",
    },
    {
      id: 3,
      title: "Lake kivu",
      price: "$49/ per person",
      category: "Nature",
      image: "/images/image1.png",
    },
    {
      id: 4,
      title: "Bisoke Crater",
      price: "$49/ per person",
      category: "Nature",
      image: "/images/rectangle-51.png",
    }
  ];

  const itinerary = [
    { day: 1, title: "Arrival & Welcome" },
    { day: 2, title: "Arrival & Welcome" },
    { day: 3, title: "Arrival & Welcome" },
    { day: 4, title: "Arrival & Welcome" },
  ];

  const inclusions = [
    "Professional English-speaking tour guide",
    "Gorilla trekking permit included",
    "4x4 Safari vehicle transportation",
    "Accommodation for the duration of the tour",
    "Meals (Breakfast, Lunch, Dinner) & bottled water",
  ];

  const exclusions = [
    "International flights and visas",
    "Travel insurance",
    "Personal expenses (souvenirs, laundry, tips)",
    "Premium alcoholic beverages",
    "Optional activities not listed in the itinerary",
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col items-center justify-center text-white">
        {tourImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${index === currentImage ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"
              }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-20" />

        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>

        <div
          className="relative z-30 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-4">Wildlife & Safari</p>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Gorilla Trekking
          </h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Column (Main Details) */}
          <div
            className="lg:col-span-7 flex flex-col gap-12"
          >

            {/* Tour Details Description */}
            <div>
              <h2 className="text-xl font-bold mb-6">Tour Details</h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-10">
                Step into the heart of Tropical Paradise and experience a journey that blends
                breathtaking natural landscapes, vibrant urban life, and rich cultural heritage. This tour
                is thoughtfully designed to give you the best of Tropical Paradise, from iconic
                landmarks to off-the-beaten-path experiences. Whether you're an adventurer, a
                culture enthusiast, or just seeking relaxation, this tour has something for everyone.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-[150px_1fr] gap-y-6 text-[15px]">
                <div className="font-bold">Destination</div>
                <div className="text-gray-700">Musanze, Rwanda</div>

                <div className="font-bold">Duration</div>
                <div className="text-gray-700">9-12 Days</div>

                <div className="font-bold">Group Size</div>
                <div className="text-gray-700">Max 10 People</div>

                <div className="font-bold">Price</div>
                <div className="text-gray-700">From $1,200/ Per Person</div>
              </div>
            </div>

            {/* Itinerary Highlights */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-6">Itinerary Highlights</h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
                Discover the charm of Tropical Paradise with our expertly curated tour. From
                breathtaking landmarks to hidden local gems, this tour promises an unforgettable
                experience.
              </p>

              <div className="flex flex-col gap-3">
                {itinerary.map((item) => (
                  <div key={item.day} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenDay(openDay === item.day ? null : item.day)}
                      className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-sm">Day {item.day}: {item.title}</span>
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {openDay === item.day ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
                        </svg>
                      </div>
                    </button>
                    {openDay === item.day && (
                      <div className="p-4 pt-0 text-sm text-gray-600 border-t border-gray-100">
                        Detailed description of day {item.day}'s activities goes here. Experience the ultimate adventure.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-5 flex flex-col gap-10 h-full">

            {/* Pick a Book & Feel the Vibes */}
            <div>
              <h2 className="text-xl font-bold mb-8">Pick a Book & Feel the Vibes</h2>
              <ul className="flex flex-col gap-5 text-[15px] font-medium text-black">
                <li className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8l4 4-4 4M8 12h8"></path></svg>
                  Free Travel Insurance
                </li>
                <li className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Customer care available 24/7
                </li>
                <li className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Hand - Picked Tours & Activities
                </li>
                <li className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  No-hassle best price guarantee
                </li>
              </ul>
            </div>

            {/* Book Form */}
            <div className="bg-white flex flex-col mt-8">
              <h2 className="text-xl font-bold mb-6">Book a Destination? Contact Us</h2>
              <p className="text-[15px] text-gray-700 mb-8">Skip the hassle! Just complete the form, and we'll get in touch with you shortly.</p>

              <form className="flex flex-col gap-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <input type="text" placeholder="Enter your name" className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-black" />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <input type="tel" placeholder="Enter your Phone" className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-black" />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-black" />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <input type="text" placeholder="Preffered date" className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-black" />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <input type="number" placeholder="Number of travelers" className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-black" />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <textarea placeholder="Leave a message" rows={4} className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-black resize-none" />
                </div>

                <div className="pt-4 w-full">
                  <button className="w-full flex justify-center items-center bg-black text-white py-3 px-8 rounded-2xl text-[15px] font-bold shadow-md">
                    Reserve a spot
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* Inclusions & Exclusions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-16">
          <div className="lg:col-span-7 flex flex-col gap-12">
            {/* Tour Inclusions */}
            <div>
              <h2 className="text-xl font-bold mb-6">Tour Inclusions</h2>
              <ul className="flex flex-col gap-4 text-[15px] text-black font-medium">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2e1065" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="lg:col-span-5 flex flex-col gap-12">
            {/* Tour Exclusion */}
            <div>
              <h2 className="text-xl font-bold mb-6">Tour Exclusion</h2>
              <ul className="flex flex-col gap-4 text-[15px] text-black font-medium">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery - Full Width */}
        <div className="mt-20">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {["gorilla1.png", "gorilla2.png", "gorilla3.png", "gorilla4.png", "gorilla5.jpg", "gorilla6.png", "gorilla7.jpg", "gorilla8.jpg"].map((filename, index) => (
              <img 
                key={index}
                src={`/images/${filename}`} 
                alt={`Gorilla Trekking ${index + 1}`} 
                className="w-full aspect-square object-cover rounded-lg shadow-sm hover:scale-[1.03] transition-transform duration-300" 
              />
            ))}
          </div>
        </div>

        {/* Explore more Destination */}
        <div className="mt-24">
          <div className="flex flex-col w-full mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Explore more destinations</h2>
            <div className="flex justify-end w-full">
              <button className="hidden md:flex items-center gap-2 px-5 py-2 border border-[#3e3205] text-[#3e3205] rounded-full text-[15px] font-semibold hover:bg-[#3e3205] hover:text-white transition-colors">
                Browse destinations
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTours.map((tour, index) => (
              <TourCard key={index} tour={tour} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA / Destination Experience Section */}
      <CTASection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
