import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Product } from "~/data/furniture-data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageSlug = product.slug.replace(/_/g, '-');
  const imageSrc = `/furniture/${product.slug}/${imageSlug}.webp`;

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Image */}
      <motion.div
        className="relative aspect-square overflow-hidden rounded-lg mb-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover"
        />
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

