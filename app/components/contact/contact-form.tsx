import { useFetcher, useSearchParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "~/ui/button";

type ActionData = {
  success: boolean;
  error?: string;
};

// Country codes for phone input - focused on North America with common international options
const COUNTRY_CODES = [
  { code: "+1", country: "CA", flag: "🇨🇦", label: "Canada" },
  { code: "+1", country: "US", flag: "🇺🇸", label: "United States" },
  { code: "+52", country: "MX", flag: "🇲🇽", label: "Mexico" },
  { code: "+44", country: "GB", flag: "🇬🇧", label: "United Kingdom" },
  { code: "+33", country: "FR", flag: "🇫🇷", label: "France" },
  { code: "+49", country: "DE", flag: "🇩🇪", label: "Germany" },
  { code: "+39", country: "IT", flag: "🇮🇹", label: "Italy" },
  { code: "+34", country: "ES", flag: "🇪🇸", label: "Spain" },
  { code: "+81", country: "JP", flag: "🇯🇵", label: "Japan" },
  { code: "+86", country: "CN", flag: "🇨🇳", label: "China" },
  { code: "+91", country: "IN", flag: "🇮🇳", label: "India" },
  { code: "+61", country: "AU", flag: "🇦🇺", label: "Australia" },
  { code: "+55", country: "BR", flag: "🇧🇷", label: "Brazil" },
  { code: "+82", country: "KR", flag: "🇰🇷", label: "South Korea" },
  { code: "+31", country: "NL", flag: "🇳🇱", label: "Netherlands" },
  { code: "+46", country: "SE", flag: "🇸🇪", label: "Sweden" },
  { code: "+41", country: "CH", flag: "🇨🇭", label: "Switzerland" },
  { code: "+65", country: "SG", flag: "🇸🇬", label: "Singapore" },
  { code: "+852", country: "HK", flag: "🇭🇰", label: "Hong Kong" },
  { code: "+971", country: "AE", flag: "🇦🇪", label: "UAE" },
];

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const fetcher = useFetcher<ActionData>();
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]); // Default to Canada
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Read product inquiry context from URL params
  const productName = searchParams.get("product");
  const fabricName = searchParams.get("fabric");
  const fabricCollection = searchParams.get("collection");

  // Pre-fill message with product info if coming from product page
  const defaultMessage = productName
    ? `I'm interested in the ${productName}${fabricName ? ` in ${fabricName} (${fabricCollection})` : ""}.`
    : "";

  // Build product context string for the hidden field
  const productContext = productName
    ? `${productName}${fabricName ? ` - ${fabricName} (${fabricCollection})` : ""}`
    : "";

  const isSubmitting = fetcher.state === "submitting";
  const isSuccess = fetcher.data?.success === true;
  const errorMessage = fetcher.data?.error;

  // Handle success state
  useEffect(() => {
    if (isSuccess && !errorMessage) {
      setShowSuccess(true);
      formRef.current?.reset();
      // Auto-hide success message after 5 seconds
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, errorMessage]);

  // Close dropdown when clicking outside (but not when scrolling)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    }

    // Only close on click, not on scroll/wheel events
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="min-h-screen bg-[#F9F7F4] pt-28">
      {/* Main content area - two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left side - Image + Quote */}
        <div className="bg-[#D9D6CE] hidden md:flex flex-col items-center justify-between p-12 rounded-r-lg">
          {/* Image */}
          <div className="relative w-full flex-1 flex items-center justify-center">
            <img
              src="/other/contact-img.webp"
              alt="Contact"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Quote at bottom */}
          <div className="bg-[#9A9890] text-white p-8 rounded">
            <p className="text-lg md:text-xl font-serif italic">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-[#F9F7F4] pb-16 px-6 md:px-12 flex flex-col justify-start">
          <div className="max-w-lg">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2E2C2A] mb-4 pt-10">
              Get in Touch
            </h1>
            <p className="text-base text-[#A0685F] mb-8">
              Interested in a piece? Have a question about materials? We'd love to hear from you.
            </p>

            {/* Product Inquiry Context Banner */}
            {productName && (
              <div className="mb-8 p-4 bg-[#F0EEE9] rounded-lg border border-[#E0DDD6]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2E2C2A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-[#6B6965] mb-1">Inquiring about:</p>
                    <p className="font-serif font-semibold text-[#2E2C2A] text-lg">{productName}</p>
                    {fabricName && (
                      <p className="text-sm text-[#8B7355] mt-1">
                        Fabric: {fabricName} <span className="text-[#A0685F]">({fabricCollection})</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Message sent successfully!</p>
                    <p className="text-sm text-green-700">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">Something went wrong</p>
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <fetcher.Form ref={formRef} method="post" action="/contact" className="space-y-6 mb-12">
              {/* Honeypot field - hidden from real users, bots will fill it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Hidden field for product context */}
              <input type="hidden" name="productContext" value={productContext} />

              {/* Hidden field for phone country code */}
              <input type="hidden" name="phoneCode" value={selectedCountry.code} />

              {/* First Name and Last Name - Two columns */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#2E2C2A] mb-2"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Jane"
                    required
                    maxLength={50}
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#2E2C2A] mb-2"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                    maxLength={50}
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#2E2C2A] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                  required
                  maxLength={254}
                  disabled={isSubmitting}
                  className="w-full px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 transition-colors disabled:opacity-50"
                />
              </div>

              {/* Phone with Country Code Selector */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-[#2E2C2A] mb-2"
                >
                  Phone (optional)
                </label>
                <div className="flex items-center gap-2">
                  {/* Country Code Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      disabled={isSubmitting}
                      className="flex items-center gap-1 px-2 py-2 border-b border-[#E0DDD6] hover:border-[#2E2C2A] bg-transparent text-[#2E2C2A] transition-colors disabled:opacity-50 min-w-[90px]"
                    >
                      <span className="text-lg">{selectedCountry.flag}</span>
                      <span className="text-sm font-medium">{selectedCountry.code}</span>
                      <svg
                        className={`w-4 h-4 text-[#A0685F] transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isCountryDropdownOpen && (
                      <div
                        className="absolute z-50 top-full left-0 mt-1 w-56 bg-white border border-[#E0DDD6] rounded-lg shadow-lg max-h-60 overflow-y-auto overscroll-contain"
                        style={{
                          scrollBehavior: 'smooth',
                          WebkitOverflowScrolling: 'touch'
                        }}
                        onWheel={(e) => {
                          // Prevent dropdown from closing when scrolling
                          e.stopPropagation();
                        }}
                        onMouseEnter={() => {
                          // Keep dropdown open when hovering/scrolling
                        }}
                      >
                        {COUNTRY_CODES.map((country, index) => (
                          <button
                            key={`${country.country}-${index}`}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsCountryDropdownOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-[#F9F7F4] transition-colors ${selectedCountry.country === country.country && selectedCountry.code === country.code
                              ? "bg-[#F0EEE9]"
                              : ""
                              }`}
                          >
                            <span className="text-lg">{country.flag}</span>
                            <span className="flex-1 text-sm text-[#2E2C2A]">{country.label}</span>
                            <span className="text-sm text-[#A0685F]">{country.code}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="(555) 000-0000"
                    maxLength={15}
                    disabled={isSubmitting}
                    className="flex-1 px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#2E2C2A] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  defaultValue={defaultMessage}
                  placeholder="Tell us about the piece you are interested in..."
                  rows={4}
                  required
                  minLength={10}
                  maxLength={2000}
                  disabled={isSubmitting}
                  className="w-full px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 resize-none transition-colors disabled:opacity-50"
                ></textarea>
                <p className="text-xs text-[#A0685F]/70 mt-1">10-2000 characters</p>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </fetcher.Form>

            {/* Direct Contact Section */}
            <div className="border-t border-[#E0DDD6] pt-8 mb-8">
              <h3 className="text-lg font-serif font-bold text-[#2E2C2A] mb-4">
                Direct Contact
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:hellothufurniture@gmail.com"
                  className="text-sm text-[#A0685F] hover:text-[#2E2C2A] transition-colors block"
                >
                  hellothufurniture@gmail.com
                </a>
                <a
                  href="tel:7785806609"
                  className="text-sm text-[#A0685F] hover:text-[#2E2C2A] transition-colors block"
                >
                  778 580 6609
                </a>
              </div>
            </div>

            {/* Hours Section */}
            <div>
              <h3 className="text-lg font-serif font-bold text-[#2E2C2A] mb-4">
                Hours
              </h3>
              <p className="text-sm text-[#A0685F]">
                Monday - Friday: 10:00 - 5:00 pm <br />by Appointment only
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Maps Section */}
      <div className="w-full bg-[#F9F7F4] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2E2C2A] mb-3">
              Visit Us
            </h2>
            <p className="text-base text-[#A0685F] max-w-2xl mx-auto">
              3870 Jacombs Rd #101, Richmond, BC V6V 1Y6, Canada
            </p>
          </div>

          {/* Maps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Google Maps iframe - Left */}
            <div className="group">
              <div className="mb-3">
                <h3 className="text-lg font-serif font-semibold text-[#2E2C2A]">
                  Map View
                </h3>
                <p className="text-sm text-[#A0685F] mt-1">
                  See our location on the map
                </p>
              </div>
              <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 border border-[#E0DDD6]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.7847618627898!2d-123.0809163236744!3d49.18567077137841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486750a847a09c1%3A0x98ee601e4222d993!2s3870%20Jacombs%20Rd%20%23101%2C%20Richmond%2C%20BC%20V6V%201Y6%2C%20Canad%C3%A1!5e0!3m2!1ses-419!2smx!4v1766521827577!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Google Maps iframe - Right */}
            <div className="group">
              <div className="mb-3">
                <h3 className="text-lg font-serif font-semibold text-[#2E2C2A]">
                  Street View
                </h3>
                <p className="text-sm text-[#A0685F] mt-1">
                  Explore the area around our location
                </p>
              </div>
              <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 border border-[#E0DDD6]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1766521753296!5m2!1ses-419!2smx!6m8!1m7!1ssbcWf_NWHr34wthn7OZ_3Q!2m2!1d49.18565403265792!2d-123.0779263951254!3f280.96181390141993!4f2.604501796292226!5f0.4000000000000002"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Location Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-md border border-[#E0DDD6] mb-8">
            <img
              src="/other/location-img.webp"
              alt="THU Furniture Location"
              className="w-full h-auto object-cover max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
