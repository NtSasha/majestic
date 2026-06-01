import Link from "next/link";

export default function TourCard({ tour }) {
  return (
    <Link href={`/tours/${tour.id}`} className="group cursor-pointer block">
      <div className="relative h-[300px] md:h-[350px] lg:h-[380px] rounded-xl overflow-hidden shadow-md mb-4 bg-black">
        <img
          src={tour.image}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-1 transition-colors">
              {tour.title}
            </h3>
            <p className="text-white/80 text-xs font-medium transition-colors">
              {tour.price}
            </p>
          </div>
          
          <div 
            className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black shrink-0 shadow-sm transition-all hover:bg-majestic-gold hover:text-white group-hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
