"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DestinationsSection() {
  const categories = [
    "National Parks",
    "Mountains",
    "Lakes & Rivers",
    "Museums"
  ];

  return (
    <section className="pt-24 pb-24 px-4 max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col pt-4 lg:pr-10 lg:pl-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl font-bold text-black mb-6 leading-tight"
          >
            Explore top exotic destinations in <br className="hidden lg:block" />
            Rwanda to elevate your experience
          </motion.h2>
          <p className="text-gray-800 text-sm leading-relaxed mb-6 max-w-md">
            Embark on a journey to far-flung corners of the globe. From the bustling streets of Tokyo to the serene beaches of Bali, our curated selection of exotic destinations offers.
          </p>

          <div className="flex flex-col">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="border-b border-gray-300 py-5 first:border-t"
              >
                <h3 className="text-xs font-bold text-gray-800">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[45%] relative h-[400px] md:h-[450px]"
        >
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-lg bg-black group">
            <img
              src="/images/gorilla.png"
              alt="Mountain Gorillas"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 pr-12 w-full">
              <p className="text-white text-xs font-bold leading-relaxed text-left">
                Experience thoughtfully styled interiors with warm textures, natural tones, and custom lighting every element is crafted to bring harmony.
              </p>
            </div>
          </div>
          
          {/* Oblique Video Icon (Overlapping the top left corner) */}
          <div className="absolute -top-8 -left-8 md:-top-16 md:-left-16 z-30 w-40 md:w-56 -rotate-12">
            <img 
              src="/images/video.png" 
              alt="Play Video" 
              className="w-full h-auto drop-shadow-2xl transition-transform hover:scale-110 cursor-pointer" 
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Separator */}
      <div className="mt-32 mb-0 flex items-center justify-center relative">
        <div className="w-[85%] h-px bg-majestic-gold/30"></div>
        <div className="absolute w-3 h-3 bg-majestic-gold rotate-45"></div>
      </div>
    </section>
  );
}
