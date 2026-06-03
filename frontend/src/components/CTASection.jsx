"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="pt-6 pb-10 px-4 w-full bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 flex flex-col -translate-y-4 lg:-translate-y-8 lg:pl-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-black leading-tight mb-6">
            Find your perfect<br />destination experience
          </h2>
          <p className="text-black text-sm leading-relaxed mb-10 max-w-sm">
            Plan your trip in minutes and enjoy every single moment that you spend in your Rwanda tour
          </p>
          
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className="bg-majestic-gold text-white text-sm font-bold py-3 px-8 rounded-full hover:bg-[#5c4308] transition-colors shadow-md"
            >
              Book your trip
            </Link>
            <div className="w-8 h-8 rounded-full bg-majestic-gold flex items-center justify-center text-white cursor-pointer hover:bg-[#5c4308] transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Right Images (Staggered Collage) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-7/12 relative h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center mt-10 lg:mt-0"
        >
          
          {/* Middle Image (Lake) - Raised & Layered Above */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 lg:top-16 w-[180px] md:w-[220px] lg:w-[260px] h-[200px] md:h-[240px] lg:h-[280px] rounded-xl overflow-hidden shadow-2xl z-30">
            <img 
              src="/images/image1.png" 
              alt="Lake Kivu Destination" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Image (Green Fields) - Foreground side image */}
          <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-[180px] md:w-[220px] lg:w-[260px] h-[180px] md:h-[220px] lg:h-[260px] rounded-xl overflow-hidden shadow-xl z-40">
            <img 
              src="/images/rectangle-53.png" 
              alt="Green Fields Destination" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image (Mountains) - Background side image */}
          <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-[180px] md:w-[220px] lg:w-[260px] h-[180px] md:h-[220px] lg:h-[260px] rounded-xl overflow-hidden shadow-lg z-10">
            <img 
              src="/images/rectangle-49.png" 
              alt="Mountains Destination" 
              className="w-full h-full object-cover brightness-75"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
