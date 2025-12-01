import { Button } from "~/ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#D9D6CE] pt-24 flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/other/home-hero.jpg"
          alt="Rome Ottoman"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#D9D6CE] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-regular text-[#3A3935] mb-6 leading-tight">
          Optimal form <br/> meets exquisite
            <br />
            <span className="text-[#3A3935] font-bold italic">design:</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#3A3935] mb-8 leading-relaxed max-w-md">
            Discover a curated collection of furniture that brings calm, elegance, and purpose to your space.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button variant="secondary" size="md">
              Explore Collection
            </Button>
            <Button variant="primary" size="md">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

