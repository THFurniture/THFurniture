export type Category = "sofas" | "seating" | "ottomans" | "tables" | "beds";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  description: string;
  dimensions: string;
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
    slug: "alice_lounge_chair",
    name: "Alice Lounge Chair",
    category: "seating",
    description: "The Alice Lounge Chair is designed for relaxed, effortless living—its sculpted form and supportive silhouette make it exceptionally comfortable for conversation, reading, or lounging. The gently flared arms and plush cushioning create an inviting seat that feels both modern and timeless.\nIts smooth swivel base adds dynamic movement and convenience, making it perfect for living rooms, lounges, offices, and open-concept spaces. The sculptural base can be customized in a variety of finishes, allowing you to choose from metallic tones, matte blacks, or warm bronzes to suit your interior style.\nFully adaptable to your vision, the Alice Lounge Chair is available in a wide range of fabrics and leathers, offering endless possibilities—from soft neutrals to bold textures or mixed-material combinations. This versatility ensures the chair can be tailored to feel contemporary, understated, or luxurious.\nElegant, comfortable, and highly customizable, the Alice Lounge Chair brings a refined modern presence to any space.",
    dimensions: "31-12\"W x 32\"D x 34\"H",
    images: generateImages("alice_lounge_chair", 5),
  },
  {
    slug: "aria_side_table",
    name: "Arya Side Table",
    category: "tables",
    description: "The Arya Side Table is a serene fusion of natural beauty and sculptural design. Its rounded marble top, rich with organic veining, rests gracefully on a brushed-metal pedestal that adds quiet strength and contemporary elegance. Inspired by the Buddhist concept of Arya—meaning noble and enlightened—this table brings a sense of purity and calm to any space.\nPerfect for living rooms, bedrooms, or meditation corners, the Arya Table elevates interiors with its refined balance of stone and metal. Each piece is unique, making it both functional and artistic.",
    dimensions: "17-3/4\"Diam x 21-1/2\" H",
    images: generateImages("aria_side_table", 1),
  },
  {
    slug: "elizabeth_sofa",
    name: "Elizabeth Sofa",
    category: "sofas",
    description: "The Elizabeth Sofa brings together comfort and refined elegance in a beautifully balanced design. Crafted with a fancy, elegant style, it features subtle brass details and a strong back line that adds structure and sophistication to any living space.\nDesigned to be very comfortable, the Elizabeth offers a supportive back, comfortable armrests, and a deep seat perfect for lounging. The seat cushions are removable, making them easy to swap or refresh whenever needed.\nWith a wide range of fabric variations to choose from, you can fully customize the Elizabeth Sofa to suit your interior—whether you prefer something soft and cozy or sleek and modern.\nElegant, refined, and exceptionally comfortable, the Elizabeth Sofa is a timeless piece made to elevate any home.",
    dimensions: "8'6\" W x 3'5\" D x 2'6 1/2\" H",
    images: generateImages("elizabeth_sofa", 10),
  },
  {
    slug: "ashley_sofa",
    name: "Ashley Sofa",
    category: "sofas",
    description: "The Ashley Sofa is a unique long 11' statement piece, blending a sleek design with a mix of modern and mid-century style. Its generous profile features a fully tufted base filled with down-feather cushioning, creating an elegant look that feels both luxurious and incredibly comfortable.\nDesigned for big or small people alike, this sofa offers a deep, relaxed seat and big strong armrests that double as a side table, display surface, or extra seating area. Its silhouette is clean and timeless, while still feeling warm and sophisticated.\nAvailable in a wide range of fabrics for customization, the Ashley Sofa can be tailored to suit any interior—from bright contemporary spaces to cozy minimalist homes.",
    dimensions: "136\" W x 42\" D x 24\" H",
    images: generateImages("ashley_sofa", 8),
  },
  {
    slug: "billy_sofa",
    name: "Billy Sofa",
    category: "sofas",
    description: "The Billy Sofa is a bold, architectural statement—celebrated as the longest sofa in our collection. Its clean, uninterrupted lines and structured profile are designed to impress, offering a sleek and modern look without the need for back cushions. This creates a contemporary, minimalist silhouette that feels both spacious and refined.\nCrafted for complete flexibility, the Billy Sofa can be upholstered in fabric, leather, or a combination of both, depending on your vision. Its horizontal panel detail adds subtle texture and can be fully customized with different stitching patterns for a tailored, high-end finish.\nPerfect for large living rooms, open-concept spaces, or luxury settings, the Billy Sofa brings both scale and sophistication. With a wide range of customization options, it can be crafted to match any interior—whether you prefer a soft, inviting aesthetic or a bold, modern statement.\nTimeless, versatile, and beautifully oversized, the Billy Sofa redefines contemporary comfort.",
    dimensions: "132\"W x 39\"D x 26.37\"H",
    images: generateImages("billy_sofa", 9),
  },
  {
    slug: "ethan_arm_chair",
    name: "Ethan Armchair",
    category: "seating",
    description: "The Ethan Armchair brings modern comfort into a sculptural, contemporary silhouette. With its rounded base and enveloping curves, this chair offers deep seating that feels exceptionally comfortable, making it the perfect spot to unwind. The gently raised back provides good back support, creating a balanced, supportive feel without compromising its clean and minimalist design.\nAvailable in two sizes — Medium or Large — the Ethan adapts beautifully to different room layouts, whether used as a statement piece or paired in multiples. Its smooth, seamless design can be tailored to any space with a wide variation of customization options, including premium fabric, supple leather, or a combination of both.\nThoughtfully crafted with an eye for soft geometry and modern elegance, the Ethan Armchair brings a refined presence to any interior. Versatile, stylish, and deeply inviting, it's a piece that effortlessly elevates contemporary living.",
    dimensions: "3'Diam x 2'5\"H",
    images: generateImages("ethan_arm_chair", 1),
  },
  {
    slug: "hannah_sofa",
    name: "Hannah Sofa",
    category: "sofas",
    description: "The Hannah Sofa is designed with a low-profile silhouette that brings a calm, modern presence to any living space. Built with a very strong frame and base, it offers exceptional durability while maintaining a refined, contemporary look. Its proportions are thoughtfully balanced, making it comfortable for both big and small people.\nThe seating cushions are removable and easy to handle, allowing for simple cleaning or quick updates. With a wide variation of fabrics to choose from, the Hannah Sofa can be fully customized—including unique combinations of leather and fabric for a tailored, elevated finish.\nThe wide armrests add versatility to the design, functioning as a side table, display surface, or extra seating area when needed. Clean, understated, and adaptable, the Hannah Sofa brings both beauty and practicality to everyday living.",
    dimensions: "11'-3 1/2\" W x 3'4\" D x 2'5\" H",
    images: generateImages("hannah_sofa", 2),
  },
  {
    slug: "jade_side_table",
    name: "Jade Side Table",
    category: "tables",
    description: "Jade Side Table is a sculptural expression of balance, lightness, and modern serenity. Inspired by the Zen concept of Satori—a moment of awakening—this accent table features a floating brushed-metal top resting on an airy wireframe base that evokes openness and clarity.\nThe harmonious contrast between the smooth, bowl-shaped surface and the vertical metal lines creates a calming visual rhythm, making the Satori Table a grounding presence in any space. Available in multiple finishes, it blends effortlessly into contemporary, minimalist, and spiritually inspired interiors.\nMore than a table, the jade is a design statement that brings peace, intention, and refined beauty into the home.",
    dimensions: "18\"Diam x 24\"H",
    images: generateImages("jade_side_table", 1),
  },
  {
    slug: "justin_sofa",
    name: "Justin Sofa",
    category: "sofas",
    description: "The Justin Sofa blends modern comfort with a tailored, architectural silhouette. Its gently sloped arm design offers a relaxed, inviting profile that enhances both style and comfort. With generous deep seating, it creates the perfect lounge experience for everyday living.\nDesigned for complete personalization, the Justin Sofa is available in a wide range of materials, including premium fabrics, supple leathers, or a combination of both for a striking, custom look. The stitching details can also be customized, allowing you to choose finishes that feel minimal, refined, or more decorative depending on your aesthetic.\nThe quilted exterior panels add subtle texture and sophistication, while the clean lines and plush back cushions create a balanced, contemporary feel. Whether you're designing for a modern home, luxury condo, or hospitality space, the Justin Sofa delivers versatility, comfort, and timeless appeal.\nA piece that can be tailored from top to bottom, the Justin Sofa is crafted to reflect your personal style with elevated ease.",
    dimensions: "120\" W x 40\"D x 26\"H",
    images: generateImages("justin_sofa", 6),
  },
  {
    slug: "karlina_sofa",
    name: "Karlina Sofa",
    category: "sofas",
    description: "The Karlina Sofa is a comfortable, contemporary piece designed with a modern, timeless silhouette. Its generous 10'–11' custom size and deep, plush seating create a lounge-like experience, while the supportive back cushions offer exceptional comfort for everyday living.\nCrafted with versatility in mind, the Karlina offers a wide variation of fabrics for customization. You can tailor it to your space with endless combinations — for example, choosing leather seating paired with a fabric frame, or selecting a fully upholstered look. The signature folded front arm detail features a refined T accent, which can also be customized with or without the T for a more minimal aesthetic.\nWith its clean lines, soft proportions, and many configuration options, the Karlina Sofa is a sophisticated addition to any home — beautifully made to reflect your personal style.",
    dimensions: "120\"W x 42\"D x 26\"H",
    images: generateImages("karlina_sofa", 8),
  },
  {
    slug: "koby_sofa",
    name: "Koby Sofa",
    category: "sofas",
    description: "The Koby Sofa blends modern precision with customizable luxury, offering a clean, structured silhouette that feels both contemporary and timeless. Designed with a custom back layout, each back cushion is crafted for a tailored look while still providing exceptional comfort and support.\nThe removable seat cushions make switching or refreshing the seating effortless—ideal for long-term convenience and easy maintenance. Both the arm panels and sides feature the option of a signature \"T\" detail, which can be added for a bold, distinctive touch or omitted for a more minimal, understated look.\nFully adaptable to your style, the Koby Sofa is available in a wide range of fabric and leather options, with the ability to mix materials for a personalized finish. Whether you prefer a sleek monochromatic aesthetic or a contrasting combination, the Koby can be customized to complement any interior.\nThoughtfully designed and highly versatile, the Koby Sofa is a refined statement piece—crafted to evolve with your space and reflect your design vision.",
    dimensions: "120\"W x 41-1/2\"D x 28\"H",
    images: generateImages("koby_sofa", 13),
  },
  {
    slug: "koi_office_chair",
    name: "Koi Office Chair",
    category: "seating",
    description: "Ergonomic design meets aesthetic excellence in this premium office chair.",
    dimensions: "",
    images: generateImages("koi_office_chair", 2),
  },
  {
    slug: "mila_ottoman",
    name: "Mila Ottoman",
    category: "ottomans",
    description: "The Mila Ottoman is a striking, unique centrepiece that effortlessly blends style and versatility. With its smooth top and subtly quilted sides, it adds a sculptural elegance that works beautifully in almost any setting. Whether placed in a bedroom, living room, by a window seating area, in front of a fireplace, an entryway, or even a hotel lobby, the Mila adapts with ease.\nIts clean, rounded form can be tailored to your exact needs with customizable sizing, multiple pattern options, and a wide range of fabrics — from luxurious textures to sleek, modern finishes. Depending on your choices, the Mila can lean fancy and glamorous or modern and minimal.\nPerfect as a coffee-table alternative, a seating area, or a soft visual anchor in a room, the Mila Ottoman brings refined sophistication wherever it goes — an elegant blend of comfort, practicality, and high-end design.",
    dimensions: "6'8\"W x 2'3\" D x 1'4\" H (Big), 4' W x 2'1 1/2\"D x 1'4\" H (Small)",
    images: generateImages("mila_ottoman", 6),
  },
  {
    slug: "monaco_ottoman",
    name: "Monaco Round Ottoman",
    category: "ottomans",
    description: "The Monaco Round Ottoman is a beautifully balanced piece that brings both function and style to any room. Its clean, rounded silhouette offers a soft, inviting presence, while its generous proportions make it comfortable to sit on and perfect for casual lounging.\nDesigned for versatile use, the Monaco works effortlessly as a coffee table, an entryway accent, a stylish addition to a theater room, or a flexible seating option in living spaces. Its design allows the top to be upholstered in one fabric, while the wrap-around sides can be done in leather or another fabric, giving you endless possibilities to tailor the look.\nWith a wide range of fabric and leather options, you can create a piece that is understated and modern or richly textured and luxurious. The Monaco can also be customized in low or high profiles, making it adaptable to different aesthetics and room scales.\nA blend of comfort, versatility, and refined simplicity, the Monaco Round Ottoman is a timeless piece that elevates any interior with ease.",
    dimensions: "44\" D x 16\"H",
    images: generateImages("monaco_ottoman", 6),
  },
  {
    slug: "nora_accent_chair",
    name: "Nora Accent Chair",
    category: "seating",
    description: "The Nora Accent Chair blends luxurious detailing with a bold contemporary silhouette, making it a standout piece in any space. Its softly curved form is wrapped in fancy tufted upholstery, adding texture, depth, and refined elegance. The stitching is fully customizable, allowing you to choose from subtle linear patterns to a more decorative look that reflects your personal style.\nThe chair features sculptural metal side panels crafted in brass, which can be finished in a variety of colours—from brushed gold to matte black or stainless steel—offering endless customization options. With deep seating and a generously cushioned base, the Nora Accent Chair is exceptionally comfortable, ideal for long lounging sessions or as a statement piece in a living room, bedroom, or lounge area.\nDesigned to be both very contemporary and timeless, it combines modern curves with classic quilting and tailored craftsmanship. Versatile, elegant, and customizable in a wide range of fabrics and leather options, the Nora Accent Chair elevates any interior with effortless sophistication.",
    dimensions: "31\" W x 28.5\"D x 27.5\"H",
    images: generateImages("nora_accent_chair", 3),
  },
  {
    slug: "paris_atelier_ottoman",
    name: "Paris Atelier Ottoman",
    category: "ottomans",
    description: "Paris Atelier Ottoman blends simplicity with functional elegance. Wrapped in a warm caramel-toned upholstery and topped with a smooth navy cushion, this ottoman stands out with its signature integrated strap—making it effortless to move, style, and place throughout your home.\nIts soft-rounded silhouette adds a modern sculptural touch, while its compact scale makes it a versatile piece for living rooms, bedrooms, entryways, and boutique design spaces. Whether used as portable seating, a footrest, or a stylish accent, the Copenhagen offers both practicality and refined design.",
    dimensions: "20\"W x 16\"D x 17\"H",
    images: generateImages("paris_atelier_ottoman", 1),
  },
  {
    slug: "rome_ottoman",
    name: "Rome Ottoman",
    category: "ottomans",
    description: "Rome Ottoman brings a sophisticated global aesthetic to any interior. Its sculpted cube silhouette is elevated by a striking two-tone design—a soft textured fabric paired with a rich caramel base, finished with a refined leather-style strap detail. Resting on a subtle metallic plinth, this ottoman blends craftsmanship with contemporary elegance.\nCompact yet impactful, it functions as versatile seating, a stylish side accent, or a statement décor piece. Its modern color palette makes it easy to pair with neutral, warm, or contemporary interiors.",
    dimensions: "20\"W x 16\"D x 17\"H",
    images: generateImages("rome_ottoman", 4),
  },
  {
    slug: "sia_bench",
    name: "Sia Bench",
    category: "seating",
    description: "The Sia Bench is a beautifully sculpted accent piece designed to elevate any room with its refined silhouette and inviting comfort. With supportive side bolsters and a generously cushioned seat, it creates the perfect spot for reading, lounging, or relaxing.\nHighly versatile, the Sia Bench fits effortlessly at the end of a bed, in an entryway, as a window seat, or as an elegant addition to a living room or hallway. Its timeless shape adapts to both modern and classic interiors.\nAvailable in custom sizes and a wide range of fabric and leather options, the Sia Bench can be tailored to suit your exact style. Whether you prefer soft neutrals, bold tones, or luxurious textures, endless customization options allow you to create a piece that is uniquely yours.\nElegant, functional, and beautifully crafted—the Sia Bench is the perfect blend of comfort and sophisticated versatility.",
    dimensions: "72\"W x 24\"D x 27\"H",
    images: generateImages("sia_bench", 3),
  },
  {
    slug: "th_signature_bed",
    name: "TH Signature Bed",
    category: "beds",
    description: "The TH Signature Bed is designed to be an absolute centerpiece—a luxurious statement that anchors any bedroom with presence and sophistication. Its high headboard provides the perfect height to comfortably lean on, making it ideal for reading, relaxing, or simply enjoying the refined ambiance it creates.\nThoughtfully engineered for convenience, the headboard comes in three separate pieces, making it easy to move, install, and adapt to any space. For larger rooms or a more dramatic effect, the custom panel sizes can be extended wall-to-wall, creating a seamless architectural feature.\nHighly versatile and customizable, the TH Signature Bed offers a wide range of fabrics and finishes. Clients can choose from fabric, leather, or a combination of both, tailoring the bed to perfectly match their style—whether understated and modern or warm and luxurious. With many configuration options, it adapts effortlessly to both minimal and richly layered interiors.\nElegant, functional, and built with thoughtful craftsmanship, the TH Signature Bed transforms any bedroom into a sophisticated retreat.",
    dimensions: "11'10\" W x 7'6\"D x 3'9\" H",
    images: generateImages("th_signature_bed", 1),
  },
  {
    slug: "thomas_arm_chair",
    name: "Thomas Armchair",
    category: "seating",
    description: "The Thomas Armchair brings a beautifully curved profile and a refined modern style, offering a perfect balance between comfort and sophistication. Its sleek armrests and clean silhouette give it an elevated, contemporary presence, while the deep seating invites you to relax in complete comfort.\nA generously sized back cushion provides strong support, making the Thomas ideal for long moments of lounging. Its design is elegant and timeless, inspired by both modern simplicity and subtle luxury.\nWith a wide range of fabrics and the option to mix leather and fabric, the Thomas Armchair can be tailored to your personal style—whether you prefer something fancy, understated, or fully contemporary. Details around the chair can also be customized, allowing you to choose stitching, finish, and texture combinations for a truly individualized look.\nVersatile, stylish, and deeply comfortable, the Thomas Armchair is a beautifully crafted piece that enhances any living space.",
    dimensions: "3'1-1/2\" W x 2'11\"D x 2'10 1/2\"H",
    images: generateImages("thomas_arm_chair", 9),
  },
  {
    slug: "vienna_ottoman",
    name: "Vienna Ottoman",
    category: "ottomans",
    description: "Vienna Ottoman brings understated luxury to any interior. Its clean rectangular silhouette, low-profile design, and soft textured upholstery create a modern, sculptural presence. Generously sized, it functions beautifully as a coffee table alternative, an extra seating surface, or a statement piece that anchors a living room.\nCrafted with high-density cushioning and durable performance fabric, the Milano Grand Ottoman offers both comfort and longevity—perfect for refined residential and staging environments. Its neutral tone blends seamlessly with contemporary, minimalist, and transitional spaces.",
    dimensions: "80\" W x 26.7\" D x 17\"H",
    images: generateImages("vienna_ottoman", 3),
  },
  {
    slug: "zara_bench",
    name: "Zara Bench",
    category: "seating",
    description: "The Zara Bench stands out with its signature cut-out backrest, creating an airy, architectural silhouette that feels both modern and refined. Paired with a deeply cushioned seat and two bolster pillows, it offers a perfect balance of comfort and elegance.\nCrafted with a discreet yet supportive wooden beam beneath the seat, the Zara is designed for durability without compromising its light, graceful look. Its acrylic legs add a contemporary touch—creating the illusion of floating while enhancing the bench's sophisticated charm.\nAn elegant bench that works beautifully in entryways, bedrooms, living spaces, or boutique-style interiors, the Zara can be customized in a wide range of fabrics to suit any aesthetic.\nTimeless, stylish, and artfully designed, the Zara Bench is a striking statement piece for any room.",
    dimensions: "54\"W x 24\"D x 29-1/4\"H",
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

