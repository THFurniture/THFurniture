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
  { id: "white-01", name: "White", collection: "Performance Linen Weave", swatchImage: "/fabrics/white-01.webp" },
  { id: "white-02", name: "White (Variant 2)", collection: "Performance Linen Weave", swatchImage: "/fabrics/white-02.webp" },
  { id: "coco-01", name: "Coco", collection: "Performance Linen Weave", swatchImage: "/fabrics/coco-01.webp" },
  { id: "coco-02", name: "Coco (Variant 2)", collection: "Performance Linen Weave", swatchImage: "/fabrics/coco-02.webp" },
  { id: "coco-03", name: "Coco (Variant 3)", collection: "Performance Linen Weave", swatchImage: "/fabrics/coco-03.webp" },
  { id: "coco-04", name: "Coco (Variant 4)", collection: "Performance Linen Weave", swatchImage: "/fabrics/coco-04.webp" },
  { id: "coco-05", name: "Coco (Variant 5)", collection: "Performance Linen Weave", swatchImage: "/fabrics/coco-05.webp" },
  { id: "harper-01", name: "Harper", collection: "Performance Linen Weave", swatchImage: "/fabrics/harper-01.webp" },
  { id: "harper-02", name: "Harper (Variant 2)", collection: "Performance Linen Weave", swatchImage: "/fabrics/harper-02.webp" },
  { id: "harper-03", name: "Harper (Variant 3)", collection: "Performance Linen Weave", swatchImage: "/fabrics/harper-03.webp" },
  { id: "harper-04", name: "Harper (Variant 4)", collection: "Performance Linen Weave", swatchImage: "/fabrics/harper-04.webp" },
  { id: "harper-05", name: "Harper (Variant 5)", collection: "Performance Linen Weave", swatchImage: "/fabrics/harper-05.webp" },
  { id: "color-01", name: "Color", collection: "Performance Linen Weave", swatchImage: "/fabrics/color-01.webp" },
  { id: "color-02", name: "Color (Variant 2)", collection: "Performance Linen Weave", swatchImage: "/fabrics/color-02.webp" },
  { id: "color-03", name: "Color (Variant 3)", collection: "Performance Linen Weave", swatchImage: "/fabrics/color-03.webp" },
  { id: "grey-01", name: "Grey", collection: "Performance Linen Weave", swatchImage: "/fabrics/grey-01.webp" },
  { id: "grey-02", name: "Grey (Variant 2)", collection: "Performance Linen Weave", swatchImage: "/fabrics/grey-02.webp" },
  { id: "grey-03", name: "Grey (Variant 3)", collection: "Performance Linen Weave", swatchImage: "/fabrics/grey-03.webp" },
  { id: "grey-04", name: "Grey (Variant 4)", collection: "Performance Linen Weave", swatchImage: "/fabrics/grey-04.webp" },
  { id: "grey-05", name: "Grey (Variant 5)", collection: "Performance Linen Weave", swatchImage: "/fabrics/grey-05.webp" },
  { id: "grey-06", name: "Grey (Variant 6)", collection: "Performance Linen Weave", swatchImage: "/fabrics/grey-06.webp" },
  { id: "silver-01", name: "Silver", collection: "Performance Linen Weave", swatchImage: "/fabrics/silver-01.webp" },
  { id: "silver-02", name: "Silver (Variant 2)", collection: "Performance Linen Weave", swatchImage: "/fabrics/silver-02.webp" },
  { id: "silver-03", name: "Silver (Variant 3)", collection: "Performance Linen Weave", swatchImage: "/fabrics/silver-03.webp" },
  { id: "silver-04", name: "Silver (Variant 4)", collection: "Performance Linen Weave", swatchImage: "/fabrics/silver-04.webp" },
  { id: "silver-05", name: "Silver (Variant 5)", collection: "Performance Linen Weave", swatchImage: "/fabrics/silver-05.webp" },
  { id: "pattern-01", name: "Pattern", collection: "Performance Linen Weave", swatchImage: "/fabrics/pattern-01.webp" },
  { id: "pattern-02", name: "Pattern (Variant 2)", collection: "Performance Linen Weave", swatchImage: "/fabrics/pattern-02.webp" },
  { id: "pattern-03", name: "Pattern (Variant 3)", collection: "Performance Linen Weave", swatchImage: "/fabrics/pattern-03.webp" },
  { id: "pattern-04", name: "Pattern (Variant 4)", collection: "Performance Linen Weave", swatchImage: "/fabrics/pattern-04.webp" },
  { id: "pattern-05", name: "Pattern (Variant 5)", collection: "Performance Linen Weave", swatchImage: "/fabrics/pattern-05.webp" },
  { id: "fluffy-01", name: "Fluffy", collection: "Performance Linen Weave", swatchImage: "/fabrics/fluffy-01.webp" },
  { id: "fluffy-02", name: "Fluffy (Variant 2)", collection: "Performance Linen Weave", swatchImage: "/fabrics/fluffy-02.webp" },
  { id: "fluffy-03", name: "Fluffy (Variant 3)", collection: "Performance Linen Weave", swatchImage: "/fabrics/fluffy-03.webp" },
  { id: "black-golden-01", name: "Black Golden", collection: "Performance Linen Weave", swatchImage: "/fabrics/black-golden-01.webp" },
  { id: "cookie-01", name: "Cookie", collection: "Performance Linen Weave", swatchImage: "/fabrics/cookie-01.webp" },
  { id: "golden-sand-01", name: "Golden Sand", collection: "Performance Linen Weave", swatchImage: "/fabrics/golden-sand-01.webp" },
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

// Get default fabric (first one)
export function getDefaultFabric(): Fabric {
  return fabrics[0];
}

