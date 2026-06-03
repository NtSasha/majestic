"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const tours = [
  {
    id: 1,
    title: "Lake kivu",
    price: "$49/ per person",
    image: "/images/image1.png",
  },
  {
    id: 2,
    title: "Gorilla Trekking",
    price: "$49/ per person",
    image: "/images/image2.png",
  },
  {
    id: 3,
    title: "Akagera Park",
    price: "$49/ per person",
    image: "/images/image3.png",
  },
  {
    id: 4,
    title: "Bisoke Crater",
    price: "$49/ per person",
    image: "/images/rectangle-51.png",
  },
];

export default function ToursSection() {
  return (
    <section className="pt-0 pb-16 px-4 max-w-7xl mx-auto w-full">
      {/* Header Area */}
      <div className="flex flex-col items-center justify-center w-full mb-8 -mt-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[1.3rem] md:text-[1.6rem] font-bold text-black leading-tight tracking-tight text-center"
        >
          Find your perfect destination experience
        </motion.h2>
      </div>

      {/* See All Tours Link */}
      <div className="flex justify-end mb-3 w-full pr-4">
        <Link
          href="/tours"
          className="text-majestic-gold text-sm font-medium hover:underline transition-all"
        >
          See all tours
        </Link>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour, index) => (
          <motion.div 
            key={tour.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative h-[380px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg bg-black"
          >
            {/* Background Image */}
            <img
              src={tour.image}
              alt={tour.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${tour.id === 4 ? 'opacity-80' : ''}`}
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Featured Tag */}
            <div className="absolute top-4 left-4">
              <span className="bg-majestic-gold text-white text-xs font-bold px-4 py-1.5 rounded-full">
                Featured
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <h3 className="text-white text-xl font-bold mb-1">{tour.title}</h3>
                <p className="text-white text-xs font-medium">{tour.price}</p>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black shrink-0 shadow-sm transition-all hover:bg-majestic-gold hover:text-white group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Separator */}
      <div className="mt-24 mb-10 flex items-center justify-center relative">
        <div className="w-[90%] h-px bg-majestic-gold/30"></div>
        <div className="absolute w-3 h-3 bg-majestic-gold rotate-45"></div>
      </div>
    </section>
  );
}
