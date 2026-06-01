import HomeHero from "@/components/HomeHero";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const dummyBlogs = [
  {
    id: 1,
    image: "/images/tour1.png",
    date: "February 13, 2025",
    title: "The Top 10 Destinations You Must Visit in 2025",
    description: "Discover places worth traveling for, Stories that inspire your next journey Handpicked destinations and travel insights..."
  },
  {
    id: 2,
    image: "/images/tour2.png",
    date: "February 13, 2025",
    title: "The Top 10 Destinations You Must Visit in 2025",
    description: "Discover places worth traveling for, Stories that inspire your next journey Handpicked destinations and travel insights..."
  },
  {
    id: 3,
    image: "/images/tour3.png",
    date: "February 13, 2025",
    title: "The Top 10 Destinations You Must Visit in 2025",
    description: "Discover places worth traveling for, Stories that inspire your next journey Handpicked destinations and travel insights..."
  },
  {
    id: 4,
    image: "/images/image1.png",
    date: "February 13, 2025",
    title: "The Top 10 Destinations You Must Visit in 2025",
    description: "Discover places worth traveling for, Stories that inspire your next journey Handpicked destinations and travel insights..."
  },
  {
    id: 5,
    image: "/images/image2.png",
    date: "February 13, 2025",
    title: "The Top 10 Destinations You Must Visit in 2025",
    description: "Discover places worth traveling for, Stories that inspire your next journey Handpicked destinations and travel insights..."
  },
  {
    id: 6,
    image: "/images/image4.png",
    date: "February 13, 2025",
    title: "The Top 10 Destinations You Must Visit in 2025",
    description: "Discover places worth traveling for, Stories that inspire your next journey Handpicked destinations and travel insights..."
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HomeHero
        subtitle={null}
        title={<span className="text-xl md:text-3xl">Travel Blogs & Insights</span>}
        backgroundImage="/images/hero-image.png"
        showButton={false}
        showStats={false}
      />

      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black text-center mb-16 leading-tight">
          Browse Through Our<br />Recent Articles and News
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
