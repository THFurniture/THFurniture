import { useSearchParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "~/layout/navbar";
import { ProductCard } from "~/components/catalog/product-card";
import {
  categories,
  getAllProducts,
  getProductsByCategory,
  type Category,
} from "~/data/furniture-data";

export function meta() {
  const title = "Catalog | THU Furniture";
  const description = "Explore our comprehensive range of furniture, where each piece is chosen for its design integrity and material quality.";
  const image = "https://www.thufurniture.ca/furniture/thomas_arm_chair/thomas-arm-chair.webp";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") as Category | null;

  const filteredProducts = activeCategory
    ? getProductsByCategory(activeCategory)
    : getAllProducts();

  const handleCategoryClick = (categoryId: Category | null) => {
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F9F7F4]">
        {/* Immersive Header */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#2E2C2A]">
          <div className="absolute inset-0 opacity-40">
            <img
              src="/furniture/th_signature_bed/th-signature-bed.webp"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#F9F7F4]/100"></div>

          <div className="relative z-10 text-center px-6 pt-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-white/70 mb-4"
            >
              The Thu Collection
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6"
            >
              Our <span className="italic">Catalog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light"
            >
              A curated selection of timeless pieces, crafted with uncompromising
              quality and a vision for modern living.
            </motion.p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16 -mt-12 relative z-20">
          {/* Refined Category Filter */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 mb-16 shadow-sm border border-black/5 inline-flex flex-wrap gap-1 mx-auto left-1/2 -translate-x-1/2 relative">
            <FilterButton
              isActive={!activeCategory}
              onClick={() => handleCategoryClick(null)}
              label="All Collections"
            />
            {categories.map((category) => (
              <FilterButton
                key={category.id}
                isActive={activeCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
                label={category.name}
              />
            ))}
          </div>

          {/* Products Grid with AnimatePresence */}
          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory || "all"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32"
              >
                <p className="text-[#6B6965] text-xl font-serif italic">
                  No pieces found in this collection yet.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

function FilterButton({ isActive, onClick, label }: { isActive: boolean, onClick: () => void, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative group ${isActive ? "text-white" : "text-[#6B6965] hover:text-[#2E2C2A]"
        }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-[#2E2C2A] rounded-xl z-0"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

