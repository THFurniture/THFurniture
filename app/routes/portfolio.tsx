import { useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { Navbar } from "~/layout/navbar";
import { ProductCard } from "~/components/portfolio/product-card";
import {
  categories,
  getAllProducts,
  getProductsByCategory,
  type Category,
} from "~/data/furniture-data";

export function meta() {
  return [
    { title: "Portfolio | TH Furniture" },
    {
      name: "description",
      content:
        "Explore our comprehensive range of furniture, where each piece is chosen for its design integrity and material quality.",
    },
  ];
}

export default function Portfolio() {
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
      <main className="min-h-screen bg-[#F9F7F4] pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2E2C2A] mb-4">
              Our Collection
            </h1>
            <p className="text-[#6B6965] max-w-xl">
              Explore our comprehensive range of furniture, where each piece is
              chosen for its design integrity and material quality.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[#E0DDD6] pb-6">
            <motion.button
              onClick={() => handleCategoryClick(null)}
              layout
              initial={false}
              className={`px-4 py-2 rounded-sm text-sm font-medium cursor-pointer transition-colors ${
                !activeCategory
                  ? "bg-[#2E2C2A] text-white"
                  : "bg-transparent text-[#6B6965] hover:text-[#2E2C2A]"
              }`}
            >
              All
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                layout
                initial={false}
                className={`px-4 py-2 rounded-sm text-sm font-medium cursor-pointer transition-colors ${
                  activeCategory === category.id
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
                <ProductCard product={product} />
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

