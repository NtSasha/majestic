"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ theme = "dark" }) {
  const pathname = usePathname();

  const isLight = theme === "light";
  const textColor = isLight ? "text-black" : "text-white";
  const borderColor = isLight ? "border-black" : "border-white";
  const hoverBg = isLight ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black";

  const getLinkClass = (path) => {
    // Check if the current pathname is exact match for home, 
    // or starts with the path for other routes like /tours
    let isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
    
    // Highlight "Contact" when on the booking page
    if (pathname.startsWith("/book") && path === "/contact") {
      isActive = true;
    }
    
    if (isActive) {
      return `text-yellow-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-yellow-500`;
    }

    return `${textColor} hover:text-yellow-500 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] hover:after:bg-yellow-500 after:transition-all after:duration-300`;
  };

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 w-full max-w-[1440px] mx-auto`}>
      {/* Logo */}
      <Link href="/" className={`flex items-center text-3xl font-bold tracking-wide ${textColor}`}>
        Maje
        <span className={`relative inline-block z-10 ${textColor}`}>
          stic
          <svg className="absolute -bottom-2.5 left-[5%] w-[70%] text-majestic-gold -z-10" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 5 A 40 20 0 0 0 90 5" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
          </svg>
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 font-bold text-sm">
        <li>
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/tours" className={getLinkClass("/tours")}>
            Destination
          </Link>
        </li>
        <li>
          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className={getLinkClass("/blog")}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Book a Tour Button */}
      <Link
        href="/contact"
        className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 border ${borderColor} ${textColor} rounded-md text-sm font-bold ${hoverBg} transition-colors`}
      >
        Book a tour
      </Link>

      {/* Mobile Menu Button (Placeholder for functionality) */}
      <button className={`md:hidden ${textColor} focus:outline-none`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  );
}
