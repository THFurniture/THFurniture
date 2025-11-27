import { Link, useParams } from "react-router";
import { Navbar } from "~/layout/navbar";
import { getProductBySlug, getProductsByCategory } from "~/data/furniture-data";
import { ProductCard } from "~/components/portfolio/product-card";

function ImagePlaceholder({ size = "large" }: { size?: "large" | "small" }) {
  const dimensions = size === "large" ? "w-32 h-32" : "w-16 h-16";
  const innerDimensions = size === "large" ? "w-20 h-20" : "w-10 h-10";
  const iconSize = size === "large" ? "w-10 h-10" : "w-6 h-6";
  const iconInnerSize = size === "large" ? "w-5 h-5" : "w-3 h-3";
  const lineSize = size === "large" ? "h-32" : "h-16";
  const lineWidth = size === "large" ? "w-32" : "w-16";

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#E5E3DE]">
      <div className="relative">
        <div
          className={`${dimensions} border border-[#C5C2BA] rounded-full opacity-30`}
        ></div>
        <div
          className={`${innerDimensions} border border-[#C5C2BA] rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-px ${lineSize} bg-[#C5C2BA]/20`}
          ></div>
          <div
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${lineWidth} h-px bg-[#C5C2BA]/20`}
          ></div>
        </div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${iconSize} rounded border border-[#C5C2BA]/40 flex items-center justify-center`}
        >
          <svg
            className={`${iconInnerSize} text-[#C5C2BA]`}
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

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#F9F7F4] pt-24">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <h1 className="text-3xl font-serif font-bold text-[#2E2C2A] mb-4">
              Product Not Found
            </h1>
            <p className="text-[#6B6965] mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex text-[#2E2C2A] font-semibold border-b-2 border-[#2E2C2A] pb-1 hover:opacity-60 transition-opacity"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </main>
      </>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F9F7F4] pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#6B6965]">
              <li>
                <Link to="/" className="hover:text-[#2E2C2A] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-[#2E2C2A] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to={`/portfolio?category=${product.category}`}
                  className="hover:text-[#2E2C2A] transition-colors capitalize"
                >
                  {product.category}
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#2E2C2A]">{product.name}</li>
            </ol>
          </nav>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <ImagePlaceholder size="large" />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="text-sm text-[#8B7355] uppercase tracking-wide mb-4">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2E2C2A] mb-6">
                {product.name}
              </h1>
              <p className="text-lg text-[#6B6965] mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#2E2C2A] text-white font-semibold hover:bg-[#3A3935] transition-colors"
                >
                  Inquire About This Piece
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-3 border border-[#2E2C2A] text-[#2E2C2A] font-semibold hover:bg-[#F0EEE9] transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2E2C2A] mb-8">
                Related Pieces
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.slug} product={relatedProduct} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

