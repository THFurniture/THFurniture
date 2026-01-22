import { Link, useLocation } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

  const isDarkHeroPage = location.pathname === "/catalog" || location.pathname === "/custom-made";
  const useWhiteText = isDarkHeroPage && !isScrolled && !isMobileMenuOpen;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-28">
      {/* Pre-rendered backdrop */}
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
              className="h-16 md:h-18 w-auto object-contain select-none transition-all hover:opacity-80"
              style={{
                filter: useWhiteText ? "brightness(0) invert(1)" : "none",
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors relative ${useWhiteText
                  ? "text-white/90 hover:text-white"
                  : isActive(link.to)
                    ? "text-[#2E2C2A]"
                    : "text-[#6B6965] hover:text-[#2E2C2A]"
                  }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-colors ${useWhiteText ? "bg-white" : "bg-[#A0685F]"
                      }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-[100] flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2 bg-[#2E2C2A]" : useWhiteText ? "bg-white" : "bg-[#2E2C2A]"
                }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 bg-[#2E2C2A]" : useWhiteText ? "bg-white" : "bg-[#2E2C2A]"
                }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-[#2E2C2A]" : useWhiteText ? "bg-white" : "bg-[#2E2C2A]"
                }`}
            />
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] lg:hidden"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full h-full bg-[#F9F7F4] z-[90] lg:hidden shadow-2xl flex flex-col pt-32 px-10"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex flex-col"
                    >
                      <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#6B6965] mb-1">
                        0{index + 1}
                      </span>
                      <div className="flex items-center justify-between">
                        <span className={`text-4xl md:text-5xl font-serif ${isActive(link.to) ? "text-[#2E2C2A]" : "text-[#2E2C2A]/60"
                          } group-hover:text-[#2E2C2A] transition-colors`}>
                          {link.label}
                        </span>
                        {isActive(link.to) && (
                          <motion.div
                            layoutId="mobileActive"
                            className="w-3 h-3 rounded-full bg-[#A0685F]"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Info in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-auto mb-12 border-t border-[#E0DDD6] pt-8"
              >
                <p className="text-xs uppercase tracking-widest text-[#6B6965] mb-4">Contact Us</p>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#2E2C2A] text-lg font-serif"
                >
                  hellothufurniture@gmail.com
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
