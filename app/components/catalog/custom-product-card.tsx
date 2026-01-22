import { Link } from "react-router";
import { motion } from "framer-motion";
import type { CustomProduct } from "~/data/custom-made-data";

interface CustomProductCardProps {
  product: CustomProduct;
}

export function CustomProductCard({ product }: CustomProductCardProps) {
  // Use the first image from the product's images array
  const imageSrc = product.images[0];

  return (
    <Link to={`/custom-made/${product.slug}`} className="group relative block w-full">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#EBE9E4]">
        <motion.img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        />

        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

        {/* View Details Label */}
        <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full text-xs font-medium uppercase tracking-widest text-[#2E2C2A] shadow-lg">
            View Details
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-6 space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-serif text-[#2E2C2A] leading-tight group-hover:text-[#6B6965] transition-colors">
            {product.name}
          </h3>
          <span className="shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#2E2C2A] group-hover:border-[#2E2C2A] group-hover:text-white transition-all duration-300">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
        </div>
        <p className="text-sm text-[#8B7355] uppercase tracking-[0.15em] font-medium">
          {product.category}
        </p>
      </div>
    </Link>
  );
}
