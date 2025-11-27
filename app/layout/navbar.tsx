import { Link } from "react-router";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F9F7F4] border-b border-[#E0DDD6] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logos/TH_logo_black.png"
              alt="TH Furniture"
              className="h-16 w-auto"
            />
          </Link>

          {/* Buttons Right */}
          <div className="flex items-center gap-4">
            <Link
              to="/portfolio"
              className="px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer border border-[#2E2C2A] bg-transparent text-[#2E2C2A] hover:bg-[#F0EEE9]"
            >
              View Collection
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer border border-[#2E2C2A] bg-[#2E2C2A] text-white hover:bg-[#3A3935] hover:border-[#3A3935]"
            >
              Inquire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

