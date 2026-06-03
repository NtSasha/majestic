"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full mt-0">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/footer-main.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-40 pb-32">


        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 lg:px-12 text-white">
          
          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col pr-0 md:pr-10 lg:pr-16"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">Majestic</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Crafting unforgettable journeys through East Africa since 2026. Experience Rwanda, Uganda, and Kenya with local experts who share your passion for adventure.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col md:border-l md:border-gray-600/50 md:pl-10 lg:pl-16 pr-0 md:pr-10 lg:pr-16"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">Always within Reach</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Kigali Heights, KG 7 Ave, Kigali, Rwanda
            </p>
            <a href="mailto:majestcirwanda@gmail.com" className="text-gray-300 text-sm leading-relaxed mb-10 underline hover:text-white transition-colors">
              majestcirwanda@gmail.com
            </a>
            <p className="text-gray-300 text-sm font-medium">
              +250 788 000 0000
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:border-l md:border-gray-600/50 md:pl-10 lg:pl-16"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">Download Our App</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Plan, book and manage your trips on the go-<br className="hidden lg:block" />
              download our app now
            </p>
            
            <div className="flex flex-col gap-4 w-48">
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 transition-colors rounded-xl px-4 py-2 w-full text-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-1.15 1.58-.33 2.92.15 3.84.97-2.3 1.33-1.89 4.8.44 5.76-1.08 2.72-2.58 5.64-3.86 6.59zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wide leading-none">Get it on</span>
                  <span className="text-sm font-semibold leading-tight">App Store</span>
                </div>
              </button>
              
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 transition-colors rounded-xl px-4 py-2 w-full text-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 3.5c-.3.2-.5.6-.5 1.1v14.8c0 .5.2.9.5 1.1l.1.1 8.2-8.2v-.6L4.1 3.4 4 3.5z" fill="#00f0ff"/><path d="M16 15.5l-3.8-3.8v-.6L16 7.3l.2.1 4.5 2.6c1.3.7 1.3 1.9 0 2.7L16.2 15.4l-.2.1z" fill="#ffb400"/><path d="M4.1 3.4L16 10.3l-3.8 3.8-8.1-8.1v-.1l-.1-.1.1-2.4z" fill="#ff004f"/><path d="M4.1 19.4v2.5l.1-.1.1-.1 8.1-8.1 3.8 3.8L4.3 24.3l-.2.1v-2.5l-2.5-2.5h2.5z" fill="#00ff4f"/></svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wide leading-none">Get it on</span>
                  <span className="text-sm font-semibold leading-tight">Google Play</span>
                </div>
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
}
