"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseSection() {
  const features = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-majestic-gold">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6l-1 2.5L8 13l-4 4-2.5-.5L1 18l4.5 3 3 4.5 1.5-.5-.5-2.5 4-4 3.7 5.3c.4.2.8-.2.7-.7Z" />
        </svg>
      ),
      title: "Curated Journeys, Not generic tours",
      description: "Every experience is thoughtfully designed around Rwanda's landscapes, culture, and people — no rushed schedules, no copy-paste itineraries.",
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-majestic-gold">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      ),
      title: "Local expertise you can trust",
      description: "We work directly with experienced local guides and partners, ensuring authentic experiences, safety, and real impact on local communities.",
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-majestic-gold">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
          <path d="M16 18h.01" />
        </svg>
      ),
      title: "Calm, seamless experience",
      description: "From inspiration to booking, MAJESTIC offers a smooth, stress-free journey with clear information, trusted payments, and personal support when you need it.",
    },
  ];

  return (
    <section className="pt-0 pb-24 px-4 max-w-7xl mx-auto w-full -mt-12">
      <div className="flex flex-col lg:flex-row items-center justify-start gap-10 lg:gap-20">
        {/* Left Side: Phone Mockup */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end lg:pr-12 mt-12">
          <div className="relative w-full max-w-[280px] flex flex-col items-center">
            <img
              src="/images/phone.png"
              alt="Majestic App Mockup"
              className="w-full h-auto object-contain relative z-10"
            />
          </div>
        </div>

        {/* Right Side: Features */}
        <div className="w-full lg:w-[50%] flex flex-col max-w-xl lg:ml-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-black mt-8 mb-8 tracking-tight text-center"
          >
            Why Choose Majestic
          </motion.h2>

          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-5 border border-gray-200 rounded-lg flex flex-col shadow-sm hover:shadow-md hover:border-majestic-gold/50 transition-all duration-300"
              >
                <div className="mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-majestic-gold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-800 text-xs leading-relaxed max-w-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
