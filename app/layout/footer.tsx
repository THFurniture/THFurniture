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
              src="/logos/TH_logo_black.png"
              alt="TH Furniture Logo"
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
              <li>
                <a href="mailto:hello@thfurniture.com" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@thfurniture.com" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
                  hello@thfurniture.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-xs font-semibold text-[#2E2C2A] mb-6 tracking-wider">HOURS</h4>
            <ul className="space-y-3">
              <li className="text-sm text-[#6B6965]">
                Mon - Fri: 9am - 6pm
              </li>
              <li className="text-sm text-[#6B6965]">
                Saturday: 10am - 4pm
              </li>
              <li className="text-sm text-[#6B6965]">
                Sunday: Closed
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
            TH FURNITURE
          </h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-[#E0DDD6] flex flex-col md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[#6B6965] mb-4 md:mb-0">
          © 2025 TH Furniture. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-[#6B6965] hover:text-[#2E2C2A] transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

