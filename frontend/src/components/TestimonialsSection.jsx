"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    location: "Germany",
    text: "Booking with MAJESTIC was the best decision for our trip. Everything was well organized and perfectly executed.",
    avatar: "/images/image1.png",
  },
  {
    id: 2,
    name: "Sarah Smith",
    location: "United Kingdom",
    text: "An absolutely incredible experience. The guides were knowledgeable and made us feel safe and welcome.",
    avatar: "/images/image2.png",
  },
  {
    id: 3,
    name: "Michael Johnson",
    location: "USA",
    text: "We didn't just visit places — we truly experienced Rwanda. Highly recommended for any traveler.",
    avatar: "/images/image3.png",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    location: "Spain",
    text: "Flawless from start to finish. Authentic, beautiful, and stress-free. The best tour I've ever booked.",
    avatar: "/images/phone.png",
  },
];

export default function TestimonialsSection() {
  const [clickedCardId, setClickedCardId] = useState(null);

  const handleCardClick = (id) => {
    // Toggle clicked state
    if (clickedCardId === id) {
      setClickedCardId(null);
    } else {
      setClickedCardId(id);
    }
  };

  return (
    <section className="pt-8 pb-24 overflow-hidden w-full bg-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-4 tracking-tight"
        >
          <span className="text-majestic-gold">900+</span> <span className="text-black">Share Experiences</span>
        </motion.h2>
        <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed mt-4">
          Join 9600 travelers sharing experiences! Discover exclusive travel packages for every adventure seeker. Our deals help you find the perfect getaway
        </p>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative flex w-full overflow-hidden"
      >
        <div 
          className={`flex w-max animate-marquee ${clickedCardId ? '[animation-play-state:paused]' : 'hover:[animation-play-state:paused]'}`}
        >
          {/* We duplicate the array to create an infinite loop effect */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`} 
              onClick={() => handleCardClick(testimonial.id)}
              className={`
                w-[260px] md:w-[300px] shrink-0 mx-3 border border-gray-200 rounded-xl p-5 bg-white cursor-pointer
                transition-all duration-300 ease-in-out
                ${clickedCardId === testimonial.id ? 'scale-105 shadow-xl border-majestic-gold z-10 relative' : 'shadow-sm hover:shadow-md'}
              `}
            >
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 text-[11px] md:text-xs mb-4 leading-relaxed line-clamp-3">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full overflow-hidden relative bg-gray-200 shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-black">{testimonial.name}</span>
                  <span className="text-xs text-gray-500">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
