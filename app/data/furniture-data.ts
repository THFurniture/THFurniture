export type Category = "sofas" | "seating" | "ottomans" | "tables" | "beds";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  description: string;
  images: string[];
}

// Helper to generate image paths from slug
function generateImages(slug: string, count: number): string[] {
  const imageSlug = slug.replace(/_/g, '-');
  const basePath = `/furniture/${slug}/${imageSlug}`;
  if (count === 1) return [`${basePath}.webp`];
  return [
    `${basePath}.webp`,
    ...Array.from({ length: count - 1 }, (_, i) => `${basePath}-${i + 2}.webp`)
  ];
}

export const categories: { id: Category; name: string }[] = [
  { id: "sofas", name: "Sofas" },
  { id: "seating", name: "Seating" },
  { id: "ottomans", name: "Ottomans" },
  { id: "tables", name: "Tables" },
  { id: "beds", name: "Beds" },
];

export const products: Product[] = [
  {
    slug: "alice_chair",
    name: "Alice Chair",
    category: "seating",
    description: "Elegant chair with graceful lines and exceptional comfort, perfect for any room.",
    images: generateImages("alice_chair", 5),
  },
  {
    slug: "aria_side_table",
    name: "Aria Side Table",
    category: "tables",
    description: "Sophisticated side table with refined design and premium materials.",
    images: generateImages("aria_side_table", 1),
  },
  {
    slug: "ariya_sofa",
    name: "Ariya Sofa",
    category: "sofas",
    description: "Sophisticated sofa with clean lines and premium upholstery for modern living.",
    images: generateImages("ariya_sofa", 10),
  },
  {
    slug: "ashley_sofa",
    name: "Ashley Sofa",
    category: "sofas",
    description: "A timeless sofa designed for comfort and elegance, featuring clean lines and premium upholstery.",
    images: generateImages("ashley_sofa", 8),
  },
  {
    slug: "billy_sofa",
    name: "Billy Sofa",
    category: "sofas",
    description: "Contemporary design meets exceptional comfort in this versatile sofa piece.",
    images: generateImages("billy_sofa", 9),
  },
  {
    slug: "ethan_sofa",
    name: "Ethan Sofa",
    category: "sofas",
    description: "Bold yet refined, the Ethan Sofa brings character to any living space.",
    images: generateImages("ethan_sofa", 1),
  },
  {
    slug: "hannah_sofa",
    name: "Hannah Sofa",
    category: "sofas",
    description: "Soft curves and plush cushioning define this inviting sofa design.",
    images: generateImages("hannah_sofa", 2),
  },
  {
    slug: "jade_side_table",
    name: "Jade Side Table",
    category: "tables",
    description: "Elegant side table with refined proportions and premium materials.",
    images: generateImages("jade_side_table", 1),
  },
  {
    slug: "justin_sofa",
    name: "Justin Sofa",
    category: "sofas",
    description: "Modern minimalism with maximum comfort, perfect for contemporary interiors.",
    images: generateImages("justin_sofa", 6),
  },
  {
    slug: "karlina_sofa",
    name: "Karlina Sofa",
    category: "sofas",
    description: "Scandinavian-inspired design with exceptional craftsmanship and detail.",
    images: generateImages("karlina_sofa", 8),
  },
  {
    slug: "koby_sofa",
    name: "Koby Sofa",
    category: "sofas",
    description: "A statement piece that balances form and function beautifully.",
    images: generateImages("koby_sofa", 13),
  },
  {
    slug: "koi_office_chair",
    name: "Koi Office Chair",
    category: "seating",
    description: "Ergonomic design meets aesthetic excellence in this premium office chair.",
    images: generateImages("koi_office_chair", 2),
  },
  {
    slug: "mila_ottoman",
    name: "Mila Ottoman",
    category: "ottomans",
    description: "Versatile ottoman with elegant proportions, perfect for compact living.",
    images: generateImages("mila_ottoman", 6),
  },
  {
    slug: "monaco_ottoman",
    name: "Monaco Ottoman",
    category: "ottomans",
    description: "Luxurious ottoman featuring premium materials and sophisticated design.",
    images: generateImages("monaco_ottoman", 6),
  },
  {
    slug: "nora_arm_chair",
    name: "Nora Arm Chair",
    category: "seating",
    description: "Classic armchair with modern sensibilities and exceptional comfort.",
    images: generateImages("nora_arm_chair", 3),
  },
  {
    slug: "paris_ottoman",
    name: "Paris Ottoman",
    category: "ottomans",
    description: "French-inspired ottoman with elegant tufting and refined proportions.",
    images: generateImages("paris_ottoman", 1),
  },
  {
    slug: "rome_ottoman",
    name: "Rome Ottoman",
    category: "ottomans",
    description: "Stately ottoman design with generous proportions and timeless appeal.",
    images: generateImages("rome_ottoman", 4),
  },
  {
    slug: "sia_bench",
    name: "Sia Bench",
    category: "seating",
    description: "Minimalist bench design perfect for entryways and bedrooms.",
    images: generateImages("sia_bench", 3),
  },
  {
    slug: "th_signature_bed",
    name: "TH Signature Bed",
    category: "beds",
    description: "Our signature bed frame featuring handcrafted details and premium materials.",
    images: generateImages("th_signature_bed", 1),
  },
  {
    slug: "thomas_chair",
    name: "Thomas Chair",
    category: "seating",
    description: "Timeless chair design with exceptional comfort and durability.",
    images: generateImages("thomas_chair", 9),
  },
  {
    slug: "vienna_ottoman",
    name: "Vienna Ottoman",
    category: "ottomans",
    description: "European-inspired ottoman with velvet upholstery and sophisticated design.",
    images: generateImages("vienna_ottoman", 3),
  },
  {
    slug: "zara_bench",
    name: "Zara Bench",
    category: "seating",
    description: "Contemporary bench with clean lines and versatile styling options.",
    images: generateImages("zara_bench", 2),
  },
];

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((product) => product.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

