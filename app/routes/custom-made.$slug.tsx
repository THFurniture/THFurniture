import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "~/layout/navbar";
import { getCustomProductBySlug, getCustomProductsByCategory } from "~/data/custom-made-data";
import { CustomProductCard } from "~/components/catalog/custom-product-card";

export default function CustomProductPage() {
  const { slug } = useParams();
  const product = getCustomProductBySlug(slug || "");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    if (lightboxImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

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
              The product you're looking for doesn't exist in our Custom Made collection.
            </p>
            <Link
              to="/custom-made"
              className="inline-flex text-[#2E2C2A] font-semibold border-b-2 border-[#2E2C2A] pb-1 hover:opacity-60 transition-opacity"
            >
              ← Back to Custom Made
            </Link>
          </div>
        </main>
      </>
    );
  }

  const relatedProducts = getCustomProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const mainImage = product.images[0];
  const additionalImages = product.images.slice(1);

  // Build inquiry URL with product info
  const inquiryUrl = `/contact?product=${encodeURIComponent(product.name)}&source=custom-made`;

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
                  to="/custom-made"
                  className="hover:text-[#2E2C2A] transition-colors"
                >
                  Custom Made
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to={`/custom-made?category=${product.category}`}
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
            {/* Images Column */}
            <div className="space-y-4">
              {/* Main Product Image */}
              <button
                onClick={() => setLightboxImage(mainImage)}
                className="relative aspect-square rounded-lg overflow-hidden bg-[#E5E3DE] w-full cursor-zoom-in group"
              >
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-[#2E2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>

              {/* Additional Images Gallery */}
              {additionalImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {additionalImages.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setLightboxImage(image)}
                      className="relative aspect-square rounded-lg overflow-hidden bg-[#E5E3DE] cursor-zoom-in group"
                    >
                      <img
                        src={image}
                        alt={`${product.name} - View ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Zoom indicator */}
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-[#2E2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <p className="text-sm text-[#8B7355] uppercase tracking-wide mb-4">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2E2C2A] mb-6">
                {product.name}
              </h1>
              <p className="text-lg text-[#6B6965] mb-8 leading-relaxed whitespace-pre-line text-justify">
                {product.description}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={inquiryUrl}
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#2E2C2A] text-white font-semibold hover:bg-[#3A3935] transition-colors"
                >
                  Inquire About This Piece
                </Link>
                <Link
                  to="/custom-made"
                  className="inline-flex items-center justify-center px-8 py-3 border border-[#2E2C2A] text-[#2E2C2A] font-semibold hover:bg-[#F0EEE9] transition-colors"
                >
                  View Custom Collection
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2E2C2A] mb-8">
                Related Custom Pieces
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <CustomProductCard key={relatedProduct.slug} product={relatedProduct} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightboxImage}
              alt={product.name}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation hint */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              Click outside or press ESC to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
