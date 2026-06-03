import HomeHero from "@/components/HomeHero";
import DestinationsSection from "@/components/DestinationsSection";
import ToursSection from "@/components/ToursSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HomeHero />

      {/* Intro Section */}
      <section className="pt-20 pb-10 px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight leading-tight">
          Where Every Journey <br /> Becomes a Legend
        </h2>
        <p className="text-gray-700 text-sm mb-10 leading-relaxed w-full max-w-4xl">
          Our passion for exploration fuels us to craft personalized experiences that dive deep into the heart of each <br className="hidden sm:block" />
          destination. Let's make your travel dreams a reality!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link
            href="/book"
            className="flex items-center justify-center gap-6 w-48 bg-white border border-gray-200 text-majestic-gold px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm"
          >
            Book a tour
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-majestic-gold text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </span>
          </Link>
          <Link
            href="#"
            className="bg-majestic-gold text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#725712] transition-colors shadow-sm"
          >
            Download mobile app
          </Link>
        </div>
      </section>

      {/* Destinations Section */}
      <DestinationsSection />

      {/* Tours Section */}
      <ToursSection />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
