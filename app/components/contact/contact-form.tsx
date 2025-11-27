export function ContactForm() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] pt-24">
      {/* Main content area - two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left side - Image + Quote */}
        <div className="bg-[#D9D6CE] hidden md:flex flex-col items-center justify-between p-12">
          {/* Image */}
          <div className="relative w-full flex-1 flex items-center justify-center">
            <img
              src="/other/contact-img.webp"
              alt="Contact"
              className="w-full h-full object-cover rounded"
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
        <p className="text-base text-[#A0685F] mb-12">
          Interested in a piece? Have a question about materials? We'd love to hear from you.
        </p>

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
    </main>
  );
}
