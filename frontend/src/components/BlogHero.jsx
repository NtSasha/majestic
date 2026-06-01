import React from 'react';

export default function BlogHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero-tours.png" // Placeholder, adjust as needed
          alt="Blog Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay to darken image for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 mt-20">
        <p className="text-white text-sm md:text-base font-medium mb-4 tracking-wide">
          our latest Blogs
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Travel Blogs & Insights
        </h1>
      </div>
    </section>
  );
}
