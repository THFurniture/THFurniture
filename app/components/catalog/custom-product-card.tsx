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
    <Link to={`/custom-made/${product.slug}`} className="group block">
      {/* Image */}
      <motion.div
        className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-[#E5E3DE]"
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
