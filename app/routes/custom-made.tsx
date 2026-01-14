import { useSearchParams } from "react-router";
import { motion } from "framer-motion";
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
  const image = "https://thfurniture.com/logos/THU_logo_black.png";

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
      <main className="min-h-screen bg-[#F9F7F4] pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2E2C2A] mb-4">
              Custom Made
            </h1>
            <p className="text-[#6B6965] max-w-xl">
              Explore our custom-made furniture collection, where unique designs
              meet exceptional craftsmanship. Each piece is tailored to your vision.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[#E0DDD6] pb-6">
            <motion.button
              onClick={() => handleCategoryClick(null)}
              layout
              initial={false}
              className={`px-4 py-2 rounded-sm text-sm font-medium cursor-pointer transition-colors ${!activeCategory
                  ? "bg-[#2E2C2A] text-white"
                  : "bg-transparent text-[#6B6965] hover:text-[#2E2C2A]"
                }`}
            >
              All
            </motion.button>
            {customCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                layout
                initial={false}
                className={`px-4 py-2 rounded-sm text-sm font-medium cursor-pointer transition-colors ${activeCategory === category.id
                    ? "bg-[#2E2C2A] text-white"
                    : "bg-transparent text-[#6B6965] hover:text-[#2E2C2A]"
                  }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05
                }}
              >
                <CustomProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6B6965]">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
