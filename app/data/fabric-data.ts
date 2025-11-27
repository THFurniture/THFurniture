export type FabricCollection =
  | "Performance Linen Weave"
  | "Perennials Performance Textured"
  | "Washed Belgian Flax Linen";

export interface Fabric {
  id: string;
  name: string;
  collection: FabricCollection;
  swatchImage: string;
}

export const fabrics: Fabric[] = [
  // Performance Linen Weave
  { id: "white", name: "White", collection: "Performance Linen Weave", swatchImage: "/fabrics/white.webp" },
  { id: "natural", name: "Natural", collection: "Performance Linen Weave", swatchImage: "/fabrics/natural.webp" },
  { id: "dove", name: "Dove", collection: "Performance Linen Weave", swatchImage: "/fabrics/dove.webp" },
  { id: "sand", name: "Sand", collection: "Performance Linen Weave", swatchImage: "/fabrics/sand.webp" },
  { id: "wheat", name: "Wheat", collection: "Performance Linen Weave", swatchImage: "/fabrics/wheat.webp" },
  { id: "camel", name: "Camel", collection: "Performance Linen Weave", swatchImage: "/fabrics/camel.webp" },
  { id: "latte", name: "Latte", collection: "Performance Linen Weave", swatchImage: "/fabrics/latte.webp" },
  { id: "mochaccino", name: "Mochaccino", collection: "Performance Linen Weave", swatchImage: "/fabrics/mochaccino.webp" },
  { id: "burnt-caramel", name: "Burnt Caramel", collection: "Performance Linen Weave", swatchImage: "/fabrics/burnt-caramel.webp" },
  { id: "fog", name: "Fog", collection: "Performance Linen Weave", swatchImage: "/fabrics/fog.webp" },
  { id: "graphite", name: "Graphite", collection: "Performance Linen Weave", swatchImage: "/fabrics/graphite.webp" },
  { id: "charcoal", name: "Charcoal", collection: "Performance Linen Weave", swatchImage: "/fabrics/charcoal.webp" },
  { id: "sage", name: "Sage", collection: "Performance Linen Weave", swatchImage: "/fabrics/sage.webp" },
  { id: "thyme", name: "Thyme", collection: "Performance Linen Weave", swatchImage: "/fabrics/thyme.webp" },
  { id: "twilight", name: "Twilight", collection: "Performance Linen Weave", swatchImage: "/fabrics/twilight.webp" },
  { id: "black", name: "Black", collection: "Performance Linen Weave", swatchImage: "/fabrics/black.webp" },

  // Perennials Performance Textured
  { id: "ppt-white", name: "White", collection: "Perennials Performance Textured", swatchImage: "/fabrics/ppt-white.webp" },
  { id: "ppt-natural", name: "Natural", collection: "Perennials Performance Textured", swatchImage: "/fabrics/ppt-natural.webp" },

  // Washed Belgian Flax Linen
  { id: "wbf-white", name: "White", collection: "Washed Belgian Flax Linen", swatchImage: "/fabrics/wbf-white.webp" },
];

// Helper functions
export function getFabricsByCollection(collection: FabricCollection): Fabric[] {
  return fabrics.filter((f) => f.collection === collection);
}

export function getFabricById(id: string): Fabric | undefined {
  return fabrics.find((f) => f.id === id);
}

export function getAllCollections(): FabricCollection[] {
  return [...new Set(fabrics.map((f) => f.collection))] as FabricCollection[];
}

// Utility to generate product image path based on product slug and fabric id
export function getProductImageForFabric(productSlug: string, fabricId: string): string {
  return `/furniture/${productSlug}-${fabricId}.webp`;
}

// Get default fabric (first one)
export function getDefaultFabric(): Fabric {
  return fabrics[0];
}

