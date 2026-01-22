import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "~/layout/navbar";
import { getCustomProductBySlug, getCustomProductsByCategory } from "~/data/custom-made-data";
import { CustomProductCard } from "~/components/catalog/custom-product-card";
import { Button } from "~/ui/button";
import type { Route } from "./+types/custom-made.$slug";

export function meta({ params }: Route.MetaArgs) {
  const product = getCustomProductBySlug(params.slug || "");
  if (!product) {
    return [{ title: "Product Not Found | THU Furniture" }];
  }

  const title = `${product.name} | THU Furniture Custom Made`;
  const description = product.description.slice(0, 160);
  const image = `https://www.thufurniture.ca${product.images[0]}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:type", content: "product" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export default function CustomProductPage() {
  const { slug } = useParams();
  const product = getCustomProductBySlug(slug || "");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Get all images for navigation
  const allImages = product?.images || [];

  // Navigate lightbox
  const openLightbox = useCallback((image: string) => {
    const index = allImages.indexOf(image);
    setLightboxIndex(index >= 0 ? index : 0);
    setLightboxImage(image);
  }, [allImages]);

  const navigateLightbox = useCallback((direction: "prev" | "next") => {
    if (allImages.length === 0) return;

    setLightboxIndex((currentIndex) => {
      let newIndex = currentIndex;
      if (direction === "prev") {
        newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
      } else {
        newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
      }

      setLightboxImage(allImages[newIndex]);
      return newIndex;
    });
  }, [allImages]);

  // Handle keyboard navigation and ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;

      if (e.key === "Escape") {
        setLightboxImage(null);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateLightbox("prev");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateLightbox("next");
      }
    };

    if (lightboxImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxImage, navigateLightbox]);

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
              Back to Custom Made
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
                onClick={() => openLightbox(mainImage)}
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
                      onClick={() => openLightbox(image)}
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
                <Link to={inquiryUrl}>
                  <Button variant="primary" showArrow className="w-full sm:w-auto">
                    Inquire About This Piece
                  </Button>
                </Link>
                <Link to="/custom-made">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View Custom Collection
                  </Button>
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
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(null);
              }}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("prev");
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm z-10"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next button */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("next");
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm z-10"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightboxImage}
              alt={product.name}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm z-10">
                {lightboxIndex + 1} / {allImages.length}
              </div>
            )}

            {/* Navigation hint */}
            {allImages.length === 1 && (
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                Click outside or press ESC to close
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
