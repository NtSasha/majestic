import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

export default function BlogPostPage({ params }) {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* 1. Hero Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <img
          src="/images/image2.png" // Placeholder
          alt="Blog Post Hero"
          className="w-full h-full object-cover"
        />
        {/* Overlapping Title Box */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-11/12 max-w-4xl bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 leading-tight">
            The Top 10 Destinations You Must Visit in 2026
          </h1>
          <p className="text-gray-600 text-sm font-medium">
            24 mins read <span className="mx-2">|</span> Feb 13, 2026
          </p>
        </div>
      </section>

      {/* 2. Blog Content */}
      <section className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        
        {/* Destination 1 */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">1. Akagera National Park</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Volcanoes National Park is Rwanda's most iconic destination and one of the last remaining homes of the endangered mountain gorillas. Located in the north, the park is part of the Virunga Mountains and features dramatic volcanoes, thick bamboo forests, and misty landscapes. Gorilla trekking is the main highlight, where visitors hike through dense forest to observe gorilla families in their natural habitat. The experience is emotional, educational, and deeply respectful of conservation. Beyond gorillas, the park also offers golden monkey tracking, volcano hikes (like Mount Bisoke), and cultural visits to nearby communities. This destination represents Rwanda's strong commitment to wildlife protection and sustainable tourism.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/images/gorilla2.png" alt="Akagera 1" className="w-full h-64 md:h-80 object-cover rounded-xl" />
            <img src="/images/gorilla3.png" alt="Akagera 2" className="w-full h-64 md:h-80 object-cover rounded-xl" />
          </div>
        </div>

        {/* Destination 2 */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">2. Nyungwe Forest National Park</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Nyungwe Forest is one of the oldest rainforests in Africa and a biodiversity hotspot. It is home to 13 primate species, including chimpanzees, as well as hundreds of bird and plant species. The park's most famous attraction is the canopy walkway, a suspended bridge high above the forest floor that offers stunning views of the treetops. Visitors can enjoy guided hikes, waterfall trails, birdwatching, and chimpanzee trekking. Nyungwe is ideal for travelers who love nature, science, and immersive forest experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/images/tour1.png" alt="Nyungwe 1" className="w-full h-64 md:h-80 object-cover rounded-xl" />
            <img src="/images/tour2.png" alt="Nyungwe 2" className="w-full h-64 md:h-80 object-cover rounded-xl" />
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
          <span className="font-semibold text-gray-800">Share on Social Media:</span>
          {/* Icons placeholder */}
          <div className="flex gap-3 text-gray-600">
            <svg className="w-5 h-5 cursor-pointer hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            <svg className="w-5 h-5 cursor-pointer hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            <svg className="w-5 h-5 cursor-pointer hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </div>
        </div>

      </section>

      {/* 3. Related Blogs */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Explore Related Blogs & Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Stay inspired with travel tips, destination guides, and adventure stories. Our blog is packed with insights to help you plan your next unforgettable journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard 
              id={2} 
              image="/images/image1.png" 
              date="February 13, 2025" 
              title="The Top 10 Destinations You Must Visit in 2025" 
              description="Discover places worth traveling for, Stories that inspire your next journey Handpicked destinations and travel insights..." 
            />
            <BlogCard 
              id={3} 
              image="/images/tour1.png" 
              date="February 13, 2025" 
              title="The Top 10 Destinations You Must Visit in 2025" 
              description="Discover places worth traveling for, Stories that inspire your next journey Handpicked destinations and travel insights..." 
            />
            <BlogCard 
              id={4} 
              image="/images/tour2.png" 
              date="February 13, 2025" 
              title="The Top 10 Destinations You Must Visit in 2025" 
              description="Discover places worth traveling for, Stories that inspire your next journey Handpicked destinations and travel insights..." 
            />
          </div>
        </div>
      </section>

      {/* 4. CTA & Footer */}
      <CTASection />
      <Footer />
    </main>
  );
}
