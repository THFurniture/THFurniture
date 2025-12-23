import { useSearchParams } from "react-router";

export function ContactForm() {
  const [searchParams] = useSearchParams();

  // Read product inquiry context from URL params
  const productName = searchParams.get("product");
  const fabricName = searchParams.get("fabric");
  const fabricCollection = searchParams.get("collection");

  // Pre-fill message with product info if coming from product page
  const defaultMessage = productName
    ? `I'm interested in the ${productName}${fabricName ? ` in ${fabricName} (${fabricCollection})` : ""}.`
    : "";

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

            {/* Form */}
            <form className="space-y-6 mb-12">
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
                    className="w-full px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 transition-colors"
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
                    className="w-full px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 transition-colors"
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
                  className="w-full px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#2E2C2A] mb-2"
                >
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 transition-colors"
                />
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
                  className="w-full px-0 py-2 border-b border-[#E0DDD6] focus:outline-none focus:border-[#2E2C2A] bg-transparent text-[#2E2C2A] placeholder-[#A0685F]/50 resize-none transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#2E2C2A] text-white font-semibold hover:bg-[#3A3935] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Direct Contact Section */}
            <div className="border-t border-[#E0DDD6] pt-8 mb-8">
              <h3 className="text-lg font-serif font-bold text-[#2E2C2A] mb-4">
                Direct Contact
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:hello@thfurniture.com"
                  className="text-sm text-[#A0685F] hover:text-[#2E2C2A] transition-colors block"
                >
                  hello@thfurniture.com
                </a>
                <a
                  href="tel:+15551234567"
                  className="text-sm text-[#A0685F] hover:text-[#2E2C2A] transition-colors block"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Hours Section */}
            <div>
              <h3 className="text-lg font-serif font-bold text-[#2E2C2A] mb-4">
                Hours
              </h3>
              <p className="text-sm text-[#A0685F]">
                Mon - Fri: 9am - 6pm EST
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
        </div>
      </div>
    </main>
  );
}
