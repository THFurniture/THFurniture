import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Product } from "~/data/furniture-data";

function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#E5E3DE]">
      <div className="relative">
        <div className="w-16 h-16 border border-[#C5C2BA] rounded-full opacity-30"></div>
        <div className="w-10 h-10 border border-[#C5C2BA] rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-[#C5C2BA]/20"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-px bg-[#C5C2BA]/20"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded border border-[#C5C2BA]/40 flex items-center justify-center">
          <svg
            className="w-3 h-3 text-[#C5C2BA]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Image */}
      <motion.div 
        className="relative aspect-square overflow-hidden rounded-lg mb-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <ImagePlaceholder />
        <motion.div 
          className="absolute inset-0 bg-black/0 group-hover:bg-black/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </motion.div>

      {/* Info */}
      <motion.h3 
        className="text-lg font-serif font-semibold text-[#2E2C2A] group-hover:text-[#6B6965]"
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1, x: 4 }}
        transition={{ duration: 0.2 }}
      >
        {product.name}
      </motion.h3>
      <motion.p 
        className="text-sm text-[#8B7355] uppercase tracking-wide mt-1"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {product.category}
      </motion.p>
    </Link>
  );
}

