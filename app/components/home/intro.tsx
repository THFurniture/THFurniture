import { Link } from "react-router";
import { motion } from "framer-motion";
import { Button } from "~/ui/button";

export function Intro() {
  return (
    <section className="w-full bg-[#F9F7F4] py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left - Artistic Image Composition */}
          <div className="relative w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 z-10"
            >
              <img
                src="/other/intro-img.webp"
                alt="Quiet Luxury Furniture"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#2E2C2A] mb-8 leading-[1.1]">
                Quiet Luxury for <br />
                <span className="italic">Everyday Living</span>
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-lg text-[#6B6965] leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                  We believe that furniture should do more than just fill a space.
                  It should shape the atmosphere of your home.
                </p>
                <p className="text-lg text-[#6B6965] leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                  Our collection focuses on texture, form, and timeless materials,
                  curated to bring a sense of <span className="text-[#2E2C2A] font-medium italic underline underline-offset-8 decoration-[#E0DDD6]">calm and sophistication</span> to your sanctuary.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <Link to="/catalog">
                  <Button variant="primary" showArrow size="lg">
                    Discover Collection
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

