import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { categories } from "~/data/furniture-data";

// Map category IDs to image paths
const categoryImages: Record<string, string> = {
  sofas: "/furniture/hannah_sofa/hannah-sofa.webp",
  seating: "/furniture/alice_lounge_chair/alice-lounge-chair.webp",
  ottomans: "/furniture/rome_ottoman/rome-ottoman.webp",
  tables: "/furniture/aria_side_table/aria-side-table.webp",
  beds: "/furniture/th_signature_bed/th-signature-bed.webp",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function FeaturedCategories() {
  return (
    <section className="w-full bg-[#F9F7F4] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#6B6965] mb-4"
            >
              Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#2E2C2A] leading-tight"
            >
              Curated <span className="italic">Spaces</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/catalog"
              className="group inline-flex items-center gap-3 text-[#2E2C2A] font-medium transition-all"
            >
              <span className="relative">
                View all categories
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#2E2C2A] scale-x-100 group-hover:scale-x-0 transition-transform origin-right duration-300"></span>
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#2E2C2A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Categories Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 lg:gap-6 h-auto md:h-[800px] lg:h-[900px]"
        >
          {/* Sofas - Main Large Item */}
          <CategoryCard
            category={categories.find(c => c.id === "sofas")!}
            className="md:col-span-12 lg:col-span-7 lg:row-span-2"
          />

          {/* Seating */}
          <CategoryCard
            category={categories.find(c => c.id === "seating")!}
            className="md:col-span-6 lg:col-span-5 lg:row-span-1"
          />

          {/* Beds */}
          <CategoryCard
            category={categories.find(c => c.id === "beds")!}
            className="md:col-span-6 lg:col-span-5 lg:row-span-1"
          />

          {/* Tables & Ottomans - Row 3 on mobile/tablet, shared on desktop? 
              Actually let's adjust the grid for 5 items.
          */}
        </motion.div>

        {/* Additional Row for smaller items if needed, or adjust the main grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-6"
        >
          <CategoryCard
            category={categories.find(c => c.id === "tables")!}
            className="md:col-span-1 h-[300px] lg:h-[400px]"
          />
          <CategoryCard
            category={categories.find(c => c.id === "ottomans")!}
            className="md:col-span-1 h-[300px] lg:h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({ category, className }: { category: { id: string, name: string }, className?: string }) {
  if (!category) return null;

  return (
    <motion.div variants={itemVariants} className={`group relative overflow-hidden rounded-2xl min-h-[350px] md:min-h-0 ${className}`}>
      <Link
        to={`/catalog?category=${category.id}`}
        className="block w-full h-full"
      >
        {/* Background gradient/overlay */}
        <div className="absolute inset-0 bg-neutral-200 z-0"></div>

        {/* Category image */}
        <motion.img
          src={categoryImages[category.id]}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 z-20"></div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 drop-shadow-sm">
              {category.name}
            </h3>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span className="text-white text-sm font-medium uppercase tracking-widest">
                Explore Collection
              </span>
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 p-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

