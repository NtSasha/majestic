"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
];

export default function HomeHero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Background Images Slider */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
            index === currentImage ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* Navbar overlay */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-16">
        <p className="text-xs md:text-sm font-medium mb-4 tracking-wide">
          Rwanda's premium travel experience
        </p>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-8">
          Top places to visit or <br className="hidden md:block" />
          experience all in one spot
        </h1>
        
        <button className="flex items-center gap-2 bg-white text-majestic-gold px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg mt-8">
          Explore tours
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-majestic-gold text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </span>
        </button>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-10 left-0 w-full z-30 flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium px-4">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <span>500+ Reviews</span>
          </div>
          <div className="w-px h-4 bg-white/50 hidden md:block" />
          <span>Trusted by 2017</span>
          <div className="w-px h-4 bg-white/50 hidden md:block" />
          <span>Local Experts</span>
        </div>
      </div>
    </div>
  );
}
