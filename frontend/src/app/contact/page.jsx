"use client";

import HomeHero from "@/components/HomeHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section using HomeHero */}
      <section className="relative w-full">
        <HomeHero 
          subtitle={null}
          title={
            <>
              Book Destination?<br />
              Get In Touch
            </>
          }
          showButton={false}
          showStats={false}
        />
      </section>

      {/* 2. Contact Info & Form Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col pt-8 w-full"
          >
            {/* Avatars */}
            <div className="flex -space-x-3 mb-6">
              <img className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member" />
              <img className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team member" />
              <img className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 object-cover" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team member" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0e7490] flex items-center justify-center text-white font-bold text-[10px]">
                +2
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
              Respond in 2-3 hours
            </h2>
            <p className="text-sm text-gray-600 mb-8 max-w-sm leading-relaxed">
              Got questions or need travel advice? Our friendly team is here to help you plan your dream trip and make it unforgettable!
            </p>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm font-semibold text-black">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +123 456 789 11
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                majestic@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
              <form className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Message</label>
                  <textarea 
                    rows="4"
                    placeholder="Leave a message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm resize-none"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="bg-majestic-gold text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#5c4308] transition-colors duration-300 mt-2"
                  >
                    Contact us
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Footer */}
      <CTASection />
      <Footer />
    </main>
  );
}
