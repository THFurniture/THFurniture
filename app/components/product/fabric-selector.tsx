import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Fabric, FabricCollection } from "~/data/fabric-data";

interface FabricSelectorProps {
  fabrics: Fabric[];
  selectedFabric: Fabric | null;
  onSelect: (fabric: Fabric | null) => void;
}

export function FabricSelector({ fabrics, selectedFabric, onSelect }: FabricSelectorProps) {
  const [expandedCollection, setExpandedCollection] = useState<FabricCollection | null>(
    fabrics[0]?.collection || null
  );

  // Group fabrics by collection
  const groupedByCollection = fabrics.reduce((acc, fabric) => {
    if (!acc[fabric.collection]) acc[fabric.collection] = [];
    acc[fabric.collection].push(fabric);
    return acc;
  }, {} as Record<FabricCollection, Fabric[]>);

  const collections = Object.keys(groupedByCollection) as FabricCollection[];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-[#2E2C2A] uppercase tracking-wider">
          Select Fabric
        </h3>
        <span className="text-xs text-[#6B6965]">
          {fabrics.length} options available
        </span>
      </div>

      {/* Selected Fabric Preview */}
      {selectedFabric && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 p-4 bg-[#F0EEE9] rounded-lg border border-[#E0DDD6]"
        >
          <div className="relative w-14 h-14 rounded-lg overflow-hidden border-2 border-[#2E2C2A] flex-shrink-0">
            <img
              src={selectedFabric.swatchImage}
              alt={selectedFabric.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.classList.add('bg-[#D9D6CE]');
              }}
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-[#6B6965] truncate">{selectedFabric.collection}</p>
            <p className="font-semibold text-[#2E2C2A]">{selectedFabric.name}</p>
          </div>
          <button
            onClick={() => onSelect(null)}
            className="flex-shrink-0 p-2 text-[#6B6965] hover:text-[#2E2C2A] hover:bg-white/50 rounded-lg transition-colors"
            title="Remove selection"
            aria-label="Remove fabric selection"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}

      {/* Fabric Collections (Accordion Style) */}
      <div className="space-y-3 max-h-[420px] md:max-h-none overflow-y-auto md:overflow-visible pr-1 scrollbar-thin">
        {collections.map((collection) => {
          const collectionFabrics = groupedByCollection[collection];
          const isExpanded = expandedCollection === collection;

          return (
            <div 
              key={collection} 
              className="border border-[#E0DDD6] rounded-lg overflow-hidden bg-white"
            >
              {/* Collection Header */}
              <button
                onClick={() => setExpandedCollection(isExpanded ? null : collection)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FAFAF8] transition-colors"
              >
                <span className="text-sm font-medium text-[#2E2C2A]">{collection}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#8B7355] bg-[#F5F3F0] px-2 py-1 rounded-full">
                    {collectionFabrics.length} colors
                  </span>
                  <motion.svg
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-[#6B6965]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
              </button>

              {/* Collection Fabrics Grid */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 border-t border-[#E0DDD6]">
                      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 pt-4">
                        {collectionFabrics.map((fabric) => {
                          const isSelected = selectedFabric?.id === fabric.id;

                          return (
                            <button
                              key={fabric.id}
                              onClick={() => onSelect(fabric)}
                              className="group relative flex flex-col items-center"
                            >
                              {/* Swatch */}
                              <div
                                className={`relative w-full aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                                  isSelected
                                    ? "ring-2 ring-[#2E2C2A] ring-offset-2"
                                    : "border border-[#E0DDD6] hover:border-[#8B7355] hover:shadow-md"
                                }`}
                              >
                                <img
                                  src={fabric.swatchImage}
                                  alt={fabric.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement!.classList.add('bg-[#D9D6CE]');
                                  }}
                                />
                                {/* Selected checkmark */}
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/20"
                                  >
                                    <div className="w-5 h-5 bg-[#2E2C2A] rounded-full flex items-center justify-center">
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                              {/* Name */}
                              <p className={`text-xs mt-2 text-center truncate w-full px-1 transition-colors ${
                                isSelected ? "text-[#2E2C2A] font-medium" : "text-[#6B6965] group-hover:text-[#2E2C2A]"
                              }`}>
                                {fabric.name}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

