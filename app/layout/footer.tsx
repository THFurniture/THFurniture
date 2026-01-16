import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="w-full bg-[#F9F7F4]">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 border-b border-[#E0DDD6]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
              <img
                src="/logos/THU_logo_black.png"
                alt="THU Furniture Logo"
                className="mb-4 h-24 w-auto object-contain select-none"
              />
              <p className="text-sm text-[#6B6965] leading-relaxed">
                Curating exceptional furniture for contemporary living. Designed for life, crafted for longevity.
              </p>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="text-xs font-semibold text-[#2E2C2A] mb-6 tracking-wider">EXPLORE</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/catalog" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                    Collection
                  </Link>
                </li>
                <li>
                  <Link to="/custom-made" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                    Custom Made
                  </Link>
                </li>
                <li>
                  <Link to="/catalog?category=seating" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                    Seating
                  </Link>
                </li>
                <li>
                  <Link to="/catalog?category=tables" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                    Tables
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="text-xs font-semibold text-[#2E2C2A] mb-6 tracking-wider">CONNECT</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#A0685F] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a
                    href="https://maps.google.com/?q=101-3870+Jacombs+Rd,+Richmond+BC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors"
                  >
                    101-3870 Jacombs Rd, Richmond BC
                  </a>
                </li>


                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#A0685F] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+17785806609" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                    +1 778 580 6609
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#A0685F] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hellothufurniture@gmail.com" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                    hellothufurniture@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours Column */}
            <div>
              <h4 className="text-xs font-semibold text-[#2E2C2A] mb-6 tracking-wider">HOURS</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#A0685F] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-[#6B6965]">
                      Monday - Friday: 10:00 - 5:00 pm
                    </span>
                    <span className="text-xs text-[#A0685F] italic">
                      By Appointment only
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section - Logo */}
        <div className="w-full py-12">
          <div className="flex flex-col items-center justify-center gap-12">
            <img
              src="/other/signature.webp"
              alt="Firma"
              className="h-32 md:h-72 w-auto object-contain select-none opacity-70"
            />
            <h2 className="text-[clamp(2rem,2vw,4rem)] font-serif font-light text-[#D9D6CE] select-none leading-none text-center">
              THU FURNITURE
            </h2>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-6 py-8 border-t border-[#E0DDD6] flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#6B6965] mb-4 md:mb-0">
            © 2025 THU Furniture. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </footer>
  );
}

