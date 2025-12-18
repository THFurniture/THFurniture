import { Link } from "react-router";

export function Intro() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image placeholder with geometric pattern */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-[500px]">
            <div className="absolute inset-0 bg-[#D9D6CE] rounded-lg overflow-hidden">
              <img
                src="/other/intro-img.webp"
                alt="Quiet Luxury Furniture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif font-regular text-[#2E2C2A] mb-6 leading-tight">
              Quiet Luxury for Everyday Living.
            </h2>

            <p className="text-base md:text-lg text-[#6B6965] mb-8 leading-relaxed font-light">
              We believe that furniture should do more than just fill a space. It should shape the atmosphere of your home. Our collection focuses on texture, form, and timeless materials, curated to bring a sense of calm and sophistication to your sanctuary.
            </p>

            <Link
              to="/catalog"
              className="inline-flex text-[#2E2C2A] font-semibold border-b-2 border-[#2E2C2A] pb-1 hover:opacity-60 transition-opacity w-fit"
            >
              Explore our catalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

