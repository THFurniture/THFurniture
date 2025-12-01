import { Link } from "react-router";
import { categories } from "~/data/furniture-data";

// Map category IDs to image paths
const categoryImages: Record<string, string> = {
  sofas: "/furniture/hannah_sofa/hannah-sofa.webp",
  seating: "/furniture/alice_chair/alice-chair-3.webp",
  ottomans: "/furniture/rome_ottoman/rome-ottoman.webp",
  tables: "/furniture/aria_side_table/aria-side-table.webp",
  beds: "/furniture/th_signature_bed/th-signature-bed.webp",
};

export function FeaturedCategories() {
  return (
    <section className="w-full bg-[#F9F7F4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#2E2C2A] mb-4">
              Curated Categories
            </h2>
            <p className="text-[#6B6965] max-w-md">
              Explore our selection by category, each piece chosen for its
              uncompromising quality and design.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#6B6965] font-medium hover:text-[#2E2C2A] transition-colors border-b border-[#6B6965] hover:border-[#2E2C2A] pb-1"
          >
            View all categories
            <span>→</span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/portfolio?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#C5C2BA] to-[#9A9890] transition-transform duration-500 group-hover:scale-105"></div>

              {/* Category image */}
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category name */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-serif italic text-white">
                  {category.name}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

