"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogCard({ id, image, date, title, description, index = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-gray-200 rounded-2xl p-3 flex flex-col bg-white"
    >
      {/* Image Container with Badge */}
      <div className="relative rounded-xl overflow-hidden mb-4 h-48">
        <img
          src={image || "/images/image4.png"}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Date Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-semibold text-gray-800">{date}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-black mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-[13px] mb-4 line-clamp-3 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Read More Button */}
        <Link 
          href={`/blog/${id}`}
          className="w-full text-center py-2 text-[13px] border border-gray-300 rounded-full font-semibold text-gray-800 hover:bg-black hover:text-white hover:border-black transition-colors"
        >
          Read more
        </Link>
      </div>
    </motion.div>
  );
}
