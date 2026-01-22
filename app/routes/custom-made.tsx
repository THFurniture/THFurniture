import { useSearchParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "~/layout/navbar";
import { CustomProductCard } from "~/components/catalog/custom-product-card";
import {
  customCategories,
  getAllCustomProducts,
  getCustomProductsByCategory,
  type CustomCategory,
} from "~/data/custom-made-data";

export function meta() {
  const title = "Custom Made | THU Furniture";
  const description = "Explore our custom-made furniture collection, where unique designs meet exceptional craftsmanship. Each piece is tailored to your vision.";
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

export default function CustomMade() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") as CustomCategory | null;

  const filteredProducts = activeCategory
    ? getCustomProductsByCategory(activeCategory)
    : getAllCustomProducts();

  const handleCategoryClick = (categoryId: CustomCategory | null) => {
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
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#2D3142]">
          <div className="absolute inset-0 opacity-40">
            <img
              src="/custom/marseille_bed/marseille-bed.webp"
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
              Artisanal Excellence
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6"
            >
              Custom <span className="italic">Made</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light"
            >
              Tailored to your vision. Explore our bespoke collection where
              luxury meets personalization in every detail.
            </motion.p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16 -mt-12 relative z-20">
          {/* Refined Category Filter */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 mb-16 shadow-sm border border-black/5 inline-flex flex-wrap gap-1 mx-auto left-1/2 -translate-x-1/2 relative">
            <FilterButton
              isActive={!activeCategory}
              onClick={() => handleCategoryClick(null)}
              label="All Creations"
            />
            {customCategories.map((category) => (
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
                  <CustomProductCard key={product.slug} product={product} />
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
                  Unique custom pieces coming soon.
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
          layoutId="activeCustomFilter"
          className="absolute inset-0 bg-[#2E2C2A] rounded-xl z-0"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}
