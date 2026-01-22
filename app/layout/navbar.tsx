import { Link, useLocation } from "react-router";
import { useState, useEffect, useCallback } from "react";

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/catalog", label: "Collection" },
    { to: "/custom-made", label: "Custom Made" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-28">
      {/* Pre-rendered backdrop - always in DOM, just opacity changes */}
      <div
        className="absolute inset-0 bg-white/95 shadow-sm border-b border-[#E0DDD6] transition-opacity duration-300"
        style={{
          opacity: isScrolled ? 1 : 0,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        aria-hidden="true"
      />

      {/* Navigation content */}
      <div className="relative max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img
              src="/logos/THU_logo_black.png"
              alt="THU Furniture Logo"
              className="h-16 md:h-18 w-auto object-contain select-none transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors relative ${isActive(link.to)
                    ? "text-[#2E2C2A]"
                    : "text-[#6B6965] hover:text-[#2E2C2A]"
                  }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#A0685F]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-50 flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#2E2C2A] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#2E2C2A] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#2E2C2A] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#E0DDD6] transition-all duration-300 ${isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
          }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium transition-colors ${isActive(link.to)
                  ? "text-[#2E2C2A] border-l-2 border-[#A0685F] pl-4"
                  : "text-[#6B6965] hover:text-[#2E2C2A] pl-4"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
