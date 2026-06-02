"use client";

import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section */}
      <HomeHero
        subtitle="About majestic"
        title="Your tour guide"
        showButton={false}
        showStats={false}
      />

      {/* 2. Welcome & Mission Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Welcome to Majestic</h2>
          <p className="text-gray-600 leading-relaxed text-sm max-w-2xl mx-auto">
            We're passionate about travel and committed to creating unforgettable experiences for our clients. With years of industry experience, we've perfected the art of curating perse.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
          {/* Left Collage */}
          <div 
            className="w-full lg:w-1/2 flex gap-2 h-[300px] md:h-[400px] lg:pl-10 lg:mt-10" 
            style={{ containerType: 'size' }}
          >
            {/* Card 1 */}
            <div className="w-[20%] h-full rounded-xl overflow-hidden relative shadow-sm">
              <img
                src="/images/image4.png"
                alt="Slice 1"
                className="absolute top-0 left-0 max-w-none object-cover pointer-events-none"
                style={{ width: '100cqw', height: '100cqh' }}
              />
            </div>
            {/* Card 2 */}
            <div className="w-[25%] h-full rounded-xl overflow-hidden relative shadow-sm">
              <img
                src="/images/image4.png"
                alt="Slice 2"
                className="absolute top-0 max-w-none object-cover pointer-events-none"
                style={{ width: '100cqw', height: '100cqh', left: 'calc(-20cqw - 0.5rem)' }}
              />
            </div>
            {/* Card 3 */}
            <div className="flex-1 h-full rounded-xl overflow-hidden relative shadow-sm">
              <img
                src="/images/image4.png"
                alt="Slice 3"
                className="absolute top-0 max-w-none object-cover pointer-events-none"
                style={{ width: '100cqw', height: '100cqh', left: 'calc(-45cqw - 1rem)' }}
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-14">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold mb-8 text-black">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                Our mission is to make travel easy, enjoyable, and unforgettable. We create personalized experiences, provide excellent service, and promote sustainable tourism. Our goal is to turn your travel dreams into amazing adventures.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold mb-8 text-black">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                Our vision is to inspire a love for travel, connecting people to the beauty and diversity of the world. We aim to redefine the way you explore by delivering experiences that are immersive, sustainable, and life-changing.
              </p>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-[90%] mx-auto flex items-center justify-center mt-20">
          <div className="h-[1px] bg-[majestic-gold]/30 flex-grow"></div>
          <div className="w-2.5 h-2.5 rotate-45 bg-[majestic-gold] mx-4"></div>
          <div className="h-[1px] bg-[majestic-gold]/30 flex-grow"></div>
        </div>
      </section>

      {/* 3. Unique Selling Proportions */}
      <section className="pt-4 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-12">

          {/* Left Title */}
          <div className="w-full lg:w-5/12 lg:pl-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-8 text-black">
              Have a look at our<br />unique selling<br />proportions
            </h2>
            <Link href="#" className="inline-flex items-center justify-center ml-10 px-10 py-2 border border-black/50 rounded-full font-extrabold text-base hover:border-black hover:bg-black hover:text-white transition-colors w-max text-black">
              Read More
            </Link>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-12">
              We take pride in offering high-quality, locally sourced Rwandan products. Every item is crafted with care, supporting our artisans and preserving cultural heritage. From the heart of Rwanda to your hands, we ensure excellence in every step.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-majestic-gold mb-2">500+</h3>
                <p className="text-black text-xs font-semibold">Happy Travelers</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-majestic-gold mb-2">9+</h3>
                <p className="text-black text-xs font-semibold">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-majestic-gold mb-2">50+</h3>
                <p className="text-black text-xs font-semibold">Unique Tours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services List */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left List */}
          <div className="w-full lg:w-5/12 lg:pl-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-8 text-black">
              Everything You Need, Thoughtfully Arranged
            </h2>
            <p className="text-gray-800 text-sm mb-12 w-full leading-relaxed line-clamp-2">
              Embark on a journey to far-flung corners of the globe. From the bustling streets of Tokyo to the serene beaches of Bali, our curated selection of exotic destinations offers.
            </p>

            <div className="flex flex-col">
              {["Guided Safari & Wildlife Tours", "Cultural & Heritage Experiences", "Custom Travel Itineraries", "Accommodation & Transport Planning"].map((service, index) => (
                <div key={index} className="py-5 border-b border-gray-200">
                  <h4 className="text-gray-800 font-medium text-[15px]">{service}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-7/12 flex justify-end lg:pl-16 lg:pr-8">
            <img
              src="/images/gorilla2.png"
              alt="Services Gorilla"
              className="w-full max-w-[75%] h-[300px] md:h-[400px] object-cover rounded-[15px] brightness-75"
            />
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="pt-6 pb-4">
        <div className="text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Everything You To Know</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xs md:text-sm line-clamp-2">
            Whether you're curious about our services, cancellation policies, or travel packages, our FAQ section has got you covered. Find quick and reliable answers to make your plan.
          </p>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
