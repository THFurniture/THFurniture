import { Link } from "react-router";

export function CTA() {
  return (
    <section className="w-full bg-[#2E2C2A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            Ready to transform
            <br />
            your <span className="italic">space?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Our design consultants are here to help you select
            <br />
            the perfect pieces for your home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+17785806609"
              className="px-8 py-3 border border-gray-400 text-white font-semibold hover:border-white hover:bg-white/5 transition-colors duration-200"
            >
              +1 (778) 580-6609
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

