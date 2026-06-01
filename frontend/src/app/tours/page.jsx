"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import CTASection from "@/components/CTASection";
import { useState, useEffect } from "react";

const heroImages = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
];

const allTours = [
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
  },
  {
    id: 5,
    title: "Akagera Park",
    price: "$49/ per person",
    category: "Culture",
    image: "/images/rectangle-53.png",
  },
  {
    id: 6,
    title: "Gorilla Trekking",
    price: "$49/ per person",
    category: "Leisure",
    image: "/images/image2.png",
  },
  {
    id: 7,
    title: "Lake kivu",
    price: "$49/ per person",
    category: "Nature",
    image: "/images/image1.png",
  },
  {
    id: 8,
    title: "Bisoke Crater",
    price: "$49/ per person",
    category: "Leisure",
    image: "/images/rectangle-51.png",
  },
];

const categories = ["All categories", "Wildlife & safari", "Nature", "Culture", "Leisure"];

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState("All categories");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredTours = activeCategory === "All categories" 
    ? allTours 
    : allTours.filter(tour => tour.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col items-center justify-center text-white">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
              index === currentImage ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-20" />

        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>

        <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-32">
          <h1 className="text-2xl md:text-4xl font-bold leading-relaxed mb-8">
            Experience the Best of Rwanda through <br className="hidden md:block" /> Unforgettable Journeys
          </h1>
        </div>
      </div>

      {/* Your Perfect Getaway */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Your perfect getaway</h2>
        <p className="text-gray-800 text-[13px] md:text-sm mb-10 w-full max-w-4xl mx-auto leading-relaxed">
          Whether you crave sandy beaches, majestic mountains, bustling cities, or serene forests, we bring you the best<br className="hidden md:block" /> destinations from around the globe. Start your journey here and discover your dream getaway.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? "bg-[#3e3205] border-[#3e3205] text-white" 
                  : "bg-white border-gray-300 text-black hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Tours Grid Section */}
      <section className="pb-20 px-4 max-w-7xl mx-auto w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTours.map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}
        </div>
      </section>

      {/* CTA / Destination Experience Section */}
      <CTASection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
