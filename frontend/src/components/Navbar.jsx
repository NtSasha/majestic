import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 text-white w-full max-w-[1440px] mx-auto">
      {/* Logo */}
      <Link href="/" className="flex items-center text-3xl font-bold tracking-wide">
        Maje
        <span className="relative inline-block z-10">
          stic
          <svg className="absolute -bottom-2.5 left-[5%] w-[70%] text-majestic-gold -z-10" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 5 A 40 20 0 0 0 90 5" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
          </svg>
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
        <li>
          <Link href="/" className="hover:text-yellow-500 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white hover:after:bg-yellow-500 after:transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/destination" className="hover:text-yellow-500 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] hover:after:bg-yellow-500 after:transition-all after:duration-300">
            Destination
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-500 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] hover:after:bg-yellow-500 after:transition-all after:duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-yellow-500 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] hover:after:bg-yellow-500 after:transition-all after:duration-300">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-yellow-500 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] hover:after:bg-yellow-500 after:transition-all after:duration-300">
            Contact
          </Link>
        </li>
      </ul>

      {/* Book a Tour Button */}
      <Link
        href="#"
        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-white rounded-md text-sm font-medium hover:bg-white hover:text-black transition-colors"
      >
        Book a tour
      </Link>

      {/* Mobile Menu Button (Placeholder for functionality) */}
      <button className="md:hidden text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  );
}
