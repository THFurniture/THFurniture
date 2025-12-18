export type CustomCategory = "tables" | "beds" | "seating" | "storage" | "collections";

export interface CustomProduct {
  slug: string;
  name: string;
  category: CustomCategory;
  description: string;
  images: string[];
}

// Helper to generate image paths from slug
function generateImages(slug: string, count: number): string[] {
  const imageSlug = slug.replace(/_/g, '-');
  const basePath = `/custom/${slug}/${imageSlug}`;
  if (count === 1) return [`${basePath}.webp`];
  return [
    `${basePath}.webp`,
    ...Array.from({ length: count - 1 }, (_, i) => `${basePath}-${i + 2}.webp`)
  ];
}

export const customCategories: { id: CustomCategory; name: string }[] = [
  { id: "tables", name: "Tables" },
  { id: "beds", name: "Beds" },
  { id: "seating", name: "Seating" },
  { id: "storage", name: "Storage" },
  { id: "collections", name: "Collections" },
];

export const customProducts: CustomProduct[] = [
  {
    slug: "florence_console",
    name: "Florence Console",
    category: "tables",
    description:
      "A refined blend of modern elegance and timeless simplicity, the Aurelia Console features a clean, sculptural profile that elevates any entryway or living space. Its slim silhouette highlights the natural beauty of the materials, while the soft curvature and smooth edges bring a sense of calm and contemporary balance. Perfect as an accent piece or styling surface, this console table complements minimalist, modern, and transitional interiors with ease.",
    images: generateImages("florence_console", 1)
  },
  {
    slug: "marseille_bed",
    name: "The Marseille Bed",
    category: "beds",
    description:
      "The Marseille Bed brings a refined European elegance to any primary bedroom. Its sculpted wingback headboard, upholstered in soft neutral tones, pairs beautifully with the deep blue leather-wrapped base for a sophisticated contrast. Vertical channeling adds subtle texture, while the gold accents introduce a touch of quiet luxury. Designed for modern living, this bed blends comfort, craftsmanship, and contemporary style—creating a serene, hotel-inspired retreat.",
    images: generateImages("marseille_bed", 1)
  },
  {
    slug: "lyon_bench",
    name: "The Lyon Bench",
    category: "seating",
    description:
      "The Lyon Bench adds a refined touch of European elegance to the bedroom. Upholstered in a soft two-tone palette, it features a tufted cushion top paired with smooth, structured sides for a modern yet timeless look. Its elongated silhouette offers both comfort and practicality—perfect at the foot of the bed for seating, styling, or effortless everyday use.",
    images: generateImages("lyon_bench", 1)
  },
  {
    slug: "verona_nightstand",
    name: "The Verona Nightstand",
    category: "storage",
    description:
      "The Verona Nightstand blends sculptural curves with a sleek, modern silhouette. Its glossy finish is complemented by warm gold accents and a stone-inspired top, creating an elegant balance of luxury and minimalism. With smooth, rounded edges and discreet storage, it adds a refined, contemporary touch to any bedroom.",
    images: generateImages("verona_nightstand", 1)
  },
  {
    slug: "palermo_bed",
    name: "The Palermo Bed",
    category: "beds",
    description:
      "The Palermo Bed features a beautifully sculpted headboard with soft, arched paneling that adds depth and sophistication. Upholstered in warm, neutral tones with subtle contrast edges, it blends modern elegance with timeless comfort. Paired with a sleek, low-profile base, this design creates a serene and refined bedroom centerpiece—perfect for contemporary interiors with a touch of luxury.",
    images: generateImages("palermo_bed", 1)
  },
  {
    slug: "capri_vanity_set",
    name: "The Capri Vanity Set",
    category: "tables",
    description:
      "The Capri Vanity Set blends sculptural elegance with modern functionality. Its sleek curved silhouette features honeycomb-textured side panels in a soft blue leather, paired with warm gold accents for a refined, luxurious finish. The smooth tabletop offers ample space for daily essentials, while the matching stool adds comfort and style with its two-tone upholstery and rounded form. Perfect for creating a serene, contemporary dressing space.",
    images: generateImages("capri_vanity_set", 1)
  },
  {
    slug: "enzo_bed",
    name: "The Enzo Bed",
    category: "beds",
    description:
      "The Enzo Bed brings contemporary elegance to the forefront with its striking blue upholstered headboard framed by soft gold accents. Clean vertical paneling adds refined structure, while the smooth, rounded base introduces a modern, sculptural touch. Designed with a luxe hotel-inspired aesthetic, this bed creates a calm, sophisticated atmosphere—perfect for elevating any primary bedroom into a serene retreat.",
    images: generateImages("enzo_bed", 1)
  },
  {
    slug: "nova_console",
    name: "The Nova Console",
    category: "tables",
    description:
      "The Nova Console embodies modern elegance with its smooth rounded edges, soft grey finish, and refined gold accents. Its clean silhouette and minimalist design create a sophisticated presence, while the slender metal legs add a light, contemporary touch. Perfect for an entryway or bedroom, this console offers a sleek surface for décor and everyday essentials—bringing effortless luxury to any space.",
    images: generateImages("nova_console", 1)
  },
  {
    slug: "azure_bed",
    name: "The Azure Bed",
    category: "beds",
    description:
      "The Azure Bed brings a refreshing blend of modern luxury and soft sophistication. Its channel-tuffed velvet headboard in a rich aqua tone creates a bold focal point, beautifully framed with warm gold accents and dark wood detailing. The clean, upholstered base keeps the look contemporary and refined. Designed to elevate any bedroom, the Azure Bed adds a touch of color, comfort, and effortless elegance.",
    images: generateImages("azure_bed", 1)
  },
  {
    slug: "orion_nightstand",
    name: "The Orion Nightstand",
    category: "storage",
    description:
      "The Orion Nightstand combines rich, dark wood grain with polished gold accents for a luxurious, modern look. Its smooth rounded edges and high-gloss finish create a refined silhouette, while two spacious drawers offer practical bedside storage. Elegant and timeless, the Orion Nightstand adds warmth, sophistication, and a touch of glamour to any bedroom.",
    images: generateImages("orion_nightstand", 1)
  },
  {
    slug: "heaven_bed",
    name: "The Heaven Bed",
    category: "beds",
    description:
      "The Heaven Bed embodies soft luxury with its warm neutral palette and gently contoured headboard. Vertical channel detailing adds subtle texture, while the smooth leather-wrapped frame creates a clean, modern silhouette. Paired with understated elegance and a serene aesthetic, the Solace Bed brings comfort, sophistication, and a calming presence to any primary bedroom.",
    images: generateImages("heaven_bed", 1)
  },
  {
    slug: "seren_nightstand",
    name: "SerenNightstand",
    category: "storage",
    description:
      "The Seren Nightstand features a smooth, curved silhouette wrapped in quilted leather, creating a soft and serene presence beside the bed. A rich, glossy wood top adds contrast and sophistication, while the open shelf below offers practical, easy-access storage. With its gentle form and warm tones, the Seren Nightstand pairs beautifully with the Heaven/Haven Bed, bringing harmony and modern elegance to any bedroom.",
    images: generateImages("seren_nightstand", 1)
  },
  {
    slug: "alto_dresser",
    name: "The Alto Dresser",
    category: "storage",
    description:
      "The Alto Dresser combines modern minimalism with refined detailing. Its smooth curved edges, high-gloss finish, and sleek gold accents create a clean, luxurious look. Five streamlined drawers offer practical storage while maintaining a slim, elegant silhouette—perfect for elevating any contemporary bedroom.",
    images: generateImages("alto_dresser", 1)
  },
  {
    slug: "rosa_bed",
    name: "Rosa Bed",
    category: "beds",
    description:
      "The Rosa Bed brings soft sophistication and modern elegance into the bedroom. Its gently winged headboard features tailored geometric tufting, creating a refined focal point in a warm rose-mauve tone. Gold accents and clean lines add a touch of luxury, while the upholstered frame keeps the look inviting and contemporary. Paired with layered pillows and plush textures, the Rosa Bed delivers a serene, upscale atmosphere perfect for today’s modern homes.",
    images: generateImages("rosa_bed", 1)
  },
  {
    slug: "nox_nightstand",
    name: "The Nox Nightstand",
    category: "storage",
    description:
      "The Nox Nightstand blends sleek glossy wood with a soft upholstered frame, creating a modern contrast of texture and tone. Its rounded silhouette and gold base add a touch of elegance, while the spacious drawer provides practical bedside storage. Minimal, refined, and timeless—perfect for elevating any contemporary bedroom.",
    images: generateImages("nox_nightstand", 1)
  },
  {
    slug: "monarch_bed",
    name: "The Monarch Bed",
    category: "beds",
    description:
      "The Monarch Bed embodies refined sophistication with its sculpted winged headboard and subtle quilted detailing. Upholstered in a soft, elegant neutral tone, it creates a serene centerpiece anchored by clean lines and warm metallic accents. The design balances luxury and calm simplicity, offering a timeless look that elevates any modern bedroom with quiet elegance.",
    images: generateImages("monarch_bed", 1)
  },
  {
    slug: "saville_bed",
    name: "The Saville Bed",
    category: "beds",
    description:
      "The Saville Bed blends refined detailing with contemporary elegance. Its diagonal quilted headboard in a serene teal tone creates a sophisticated visual statement, beautifully framed with warm metallic accents. Paired with a streamlined upholstered base and coordinating bench, the design offers both luxury and comfort—perfect for elevating any modern bedroom with a polished, high-end feel.",
    images: generateImages("saville_bed", 1)
  },
  {
    slug: "aria_bed",
    name: "The Aria Bed",
    category: "beds",
    description:
      "The Aria Bed brings a soft, modern elegance to any bedroom with its sculpted wingback headboard and gentle fan-stitched detailing. Upholstered in smooth, neutral tones, it creates a calming focal point while the clean platform base adds a refined, contemporary edge. Subtle metallic accents elevate the look, making the Aria Bed a perfect blend of comfort, sophistication, and timeless style.",
    images: generateImages("aria_bed", 1)
  },
  {
    slug: "adeo_luxe_bed",
    name: "Adeo Luxe Bed",
    category: "beds",
    description:
      "The Adeo Luxe Bed brings refined sophistication to the modern bedroom. Its sculpted wingback headboard features elegant diagonal paneling, creating a soft, sweeping silhouette that feels both inviting and luxurious. Upholstered in warm, neutral tones with subtle metallic accents, the design balances comfort and contemporary style. With its clean platform base and tailored detailing, the Adeo Luxe Bed delivers an elevated, serene centerpiece for any high-end interior.",
    images: generateImages("adeo_luxe_bed", 1)
  },
  {
    slug: "flare_bed",
    name: "The Flare Bed",
    category: "beds",
    description:
      "The Flare Bed showcases a beautifully curved wingback headboard that creates a soft, uplifting silhouette. Its smooth upholstery and refined stitching highlight the sculptural wing-inspired form, bringing both elegance and comfort to the room. Paired with a clean platform base and warm metallic accents, the Flare Bed adds a serene, modern luxury to any bedroom.",
    images: generateImages("flare_bed", 1)
  },
  {
    slug: "emerson_bed",
    name: "The Emerson Bed",
    category: "beds",
    description:
      "The Emerson Bed blends clean modern lines with soft, refined details. Its smooth upholstered headboard is framed by elegant corner accents, giving it a tailored, architectural presence. The warm neutral tones create a calming, luxurious atmosphere, while the minimal platform base keeps the design contemporary and balanced. Timeless and effortlessly chic, the Emerson Bed brings understated sophistication to any bedroom.",
    images: generateImages("emerson_bed", 1)
  },
  {
    slug: "astoria_collection",
    name: "The Astoria Collection",
    category: "collections",
    description:
      "The Astoria Collection exemplifies modern luxury with its sculpted lines, rich wood detailing, and soft full-grain upholstery. Each piece is framed with warm metallic accents, creating a refined balance of sophistication and comfort. Designed for grand living spaces, the collection blends elegance and functionality, offering deep seating, premium craftsmanship, and a polished silhouette. The Astoria Collection is an elevated expression of contemporary luxury—perfect for homes seeking a truly distinguished aesthetic.",
    images: generateImages("astoria_collection", 1)
  },
  {
    slug: "marlow_sideboard",
    name: "The Marlow Sideboard",
    category: "storage",
    description:
      "The Marlow Sideboard blends modern luxury with refined architectural lines. Featuring a striking marble-inspired top, asymmetric paneling, and warm metallic accents, it creates a sophisticated focal point in any living or dining space. The combination of closed storage and a geometric glass display offers both function and style, making the Marlow Sideboard perfect for showcasing décor while keeping essentials neatly organized. Its sleek silhouette and premium finishes bring an elevated, contemporary elegance to the home.",
    images: generateImages("marlow_sideboard", 1)
  },
  {
    slug: "valen_accent_chair",
    name: "The Valen Accent Chair",
    category: "seating",
    description:
      "The Valen Accent Chair pairs sculptural elegance with modern comfort. Its high, gently curved back features refined vertical tufting that adds texture and sophistication, while the soft upholstered seat offers inviting support. Slim, tapered legs with subtle metallic tips complete the luxurious silhouette. Perfect for living rooms, lounges, or reading corners, the Valen Chair brings timeless style and a touch of contemporary charm to any space.",
    images: generateImages("valen_accent_chair", 1)
  },
  {
    slug: "elara_chaise",
    name: "The Elara Chaise",
    category: "seating",
    description:
      "The Elara Chaise combines timeless elegance with a soft, sculptural silhouette. Its gently curved backrest features refined tufting, offering both visual texture and exceptional comfort. The smooth, extended seat invites relaxation, while the tapered legs add a touch of classic sophistication. Perfect for bedrooms, lounges, or reading corners, the Elara Chaise brings a serene, luxurious presence to any modern interior.",
    images: generateImages("elara_chaise", 1)
  },
  {
    slug: "avalon_collection",
    name: "The Avalon Collection",
    category: "collections",
    description:
      "The Avalon Collection embodies modern elegance with a bold, architectural presence. Wrapped in rich navy upholstery, each piece features clean lines, deep seating, and refined channel detailing that brings texture and sophistication to the room. Warm gold accents create a striking contrast, enhancing the luxurious feel of the design. Paired with sculptural metal-and-glass tables, the Avalon Collection offers both comfort and grandeur—perfect for contemporary living spaces seeking a polished, upscale aesthetic.",
    images: generateImages("avalon_collection", 1)
  },
  {
    slug: "valmont_collection",
    name: "The Valmont Collection",
    category: "collections",
    description:
      "The Valmont Collection blends contemporary artistry with refined luxury. Featuring smooth sculpted forms, soft neutral upholstery, and rich navy accents, each piece creates a harmonious and elevated aesthetic. Gold detailing adds warmth and sophistication, while the generous seating and tailored cushioning ensure exceptional comfort. From its elegant curves to its modern silhouettes, the Valmont Collection transforms any living space into a polished and inviting retreat.",
    images: generateImages("valmont_collection", 1)
  },
  {
    slug: "valente_collection",
    name: "The Valente Collection",
    category: "collections",
    description:
      "The Valente Collection brings together sculptural elegance and modern serenity. Wrapped in smooth ocean-blue upholstery and framed with high-gloss ebony wood, each piece creates a striking balance of softness and structure. The rounded silhouettes promote a relaxed yet polished atmosphere, while the marble-accent coffee table adds an architectural touch. Designed for contemporary luxury living, the Valente Collection elevates any interior with calm tones, refined materials, and effortless sophistication.",
    images: generateImages("valente_collection", 1)
  },
  {
    slug: "kora_collection",
    name: "The Kora Collection",
    category: "collections",
    description:
      "The Kora Collection blends contemporary elegance with sculptural warmth. Soft suede-inspired upholstery pairs effortlessly with rich, high-gloss wood panels, creating a refined contrast that feels modern yet timeless. Curved accent chairs, warm bronze details, and a statement patterned coffee table complete the ensemble, offering a space that is both inviting and artfully composed. Perfect for interiors seeking sophistication with a calm, contemporary edge.",
    images: generateImages("kora_collection", 1)
  },
  {
    slug: "solis_lounge_chair",
    name: "The Solis Lounge Chair",
    category: "seating",
    description:
      "The Solis Lounge Chair brings a contemporary edge to refined comfort. Its sculpted barrel silhouette, accented with a smooth two-tone leather finish, creates a bold yet harmonious statement. The subtle geometric stitching adds texture, while the 360° swivel base in brushed gold elevates its modern appeal. Perfect for living rooms, lounges, and reception spaces seeking a balance of luxury, warmth, and effortless style.",
    images: generateImages("solis_lounge_chair", 1)
  },
  {
    slug: "marlow_collection",
    name: "The Marlow Collection",
    category: "collections",
    description:
      "The Marlow Collection blends modern luxury with timeless warmth, featuring sculpted silhouettes wrapped in velvety upholstery and framed by rich, high-gloss wood. Brass accents add a refined glow, while the deep-seated cushions offer unmatched comfort. Designed for contemporary living spaces that appreciate both style and serenity, Marlow brings a harmonious balance of elegance, texture, and inviting comfort to any home.",
    images: generateImages("marlow_collection", 1)
  },
  {
    slug: "bubble_luxe_collection",
    name: "The Bubble Luxe Collection",
    category: "collections",
    description:
      "The Bubble Luxe Collection brings a playful twist to high-end design with its signature tufted curves, silky upholstery, and rich wood accents. Soft, rounded silhouettes offer a cozy, cloud-like feel, while the deep mauve tones elevate the space with a touch of modern glamour. Finished with quilted detailing and marble-top tables, this collection transforms any living room into a stylish and inviting retreat—where comfort meets personality.",
    images: generateImages("bubble_luxe_collection", 1)
  },
  {
    slug: "vessa_chair",
    name: "The Vessa Chair",
    category: "seating",
    description:
      "The Vessa Chair features a cocoon-like silhouette with a quilted outer shell and smooth upholstered interior. Its gentle curves and refined craftsmanship create a perfect balance of modern luxury and inviting comfort. Finished with a brushed-gold base, this piece elevates any living space with a soft yet sophisticated presence.",
    images: generateImages("vessa_chair", 1)
  },
  {
    slug: "marlow_credenza",
    name: "The Marlow Credenza",
    category: "storage",
    description:
      "The Marlowe Credenza is a refined statement piece crafted for contemporary luxury interiors. Its deep espresso lacquered finish is paired with a sleek marble top and subtle gold accents, creating a look that is both timeless and elevated. Designed with discreet double-door storage, this credenza blends elegance with practicality—perfect for dining rooms, living spaces, or grand entryways seeking a touch of modern sophistication.",
    images: generateImages("marlow_credenza", 1)
  },
  {
    slug: "aurea_console",
    name: "Aurea Console",
    category: "tables",
    description:
      "The Aurea Console brings sculptural elegance into any space with its arched brass base, marble-inspired top, and rich dark wood pedestal. Designed as a statement piece, it blends luxury materials with refined modern lines. Perfect for entryways or living spaces, this console adds a touch of timeless sophistication to your home.",
    images: generateImages("aurea_console", 1)
  },
  {
    slug: "nova_set",
    name: "The Nova Set",
    category: "collections",
    description:
      "The Nova Set combines soft curves, modern color blocking, and refined metallic accents to create a living room that feels both luxurious and inviting. With its sculpted silhouette, plush seating, and elegant contrast detailing, this collection brings a polished contemporary look to any home. Stylish, comfortable, and effortlessly elevated—Nova is designed to shine in every space.",
    images: generateImages("nova_set", 1)
  },
  {
    slug: "vela_collection",
    name: "The Vela Collection",
    category: "collections",
    description:
      "The Vela Collection blends sculpted curves, rich wood detailing, and soft neutral upholstery to create a space that feels refined and modern. Its polished accents, marble-top centrepiece, and thoughtfully layered textures bring a quiet sense of luxury to any living room. Elegant, comfortable, and beautifully structured—Vela is designed to elevate contemporary homes with effortless sophistication.",
    images: generateImages("vela_collection", 1)
  },
  {
    slug: "ava_collection",
    name: "The Ava Collection",
    category: "collections",
    description:
      "The Ava Collection embodies soft elegance with its curved silhouettes, calming neutral palette, and refined textures. Featuring sculpted backs, plush seating, and subtle gold details, Ava brings a light and graceful presence to any living room. This collection blends contemporary style with a serene, inviting feel—perfect for homes that value comfort wrapped in quiet luxury.",
    images: generateImages("ava_collection", 1)
  },
  {
    slug: "luca_collection",
    name: "The Luca Collection",
    category: "collections",
    description:
      "The Luca Collection blends modern refinement with soft, sculptural comfort. Featuring smooth curves, tailored leather surfaces, and brushed gold detailing, this ensemble creates a warm yet sophisticated atmosphere. Its clean lines and balanced proportions make it an effortless fit for contemporary homes seeking understated luxury. Luca brings harmony, comfort, and timeless style into any living space.",
    images: generateImages("luca_collection", 1)
  },
  {
    slug: "nexa_sideboard",
    name: "Nexa Sideboard",
    category: "storage",
    description:
      "The Nexa Sideboard brings sleek minimalism to modern living. Its soft-rounded edges, high-gloss finish, and subtle gold detailing create a refined, contemporary silhouette. Designed with spacious drawers and concealed storage, Nexa balances elegance and functionality—perfect for dining rooms, living spaces, or stylish entryways. A clean, quiet statement piece for the modern home.",
    images: generateImages("nexa_sideboard", 1)
  },
  {
    slug: "mason_collection",
    name: "The Mason Collection",
    category: "collections",
    description:
      "The Mason Collection embodies refined modern comfort with a subtle touch of luxury. Wrapped in soft neutral upholstery and elevated with sculptural arm detailing and brushed-gold accents, every piece balances elegance with everyday livability. The clean lines, tailored silhouettes, and rich textural layers create a warm yet sophisticated atmosphere—perfect for contemporary homes seeking understated luxury. A harmonious blend of craftsmanship and comfort, Mason brings serenity, style, and effortless refinement to any living space.",
    images: generateImages("mason_collection", 1)
  },
  {
    slug: "edmund_collection",
    name: "The Edmund Collection",
    category: "collections",
    description:
      "The Edmund Collection blends old-English elegance with contemporary refinement, offering a dining set that feels both timeless and modern. The table features a sculpted pedestal base wrapped in quilted detailing and warm wood paneling, crowned with a smooth, dark stone top that anchors the design with quiet sophistication. Paired with sleek armchairs framed in brushed gold and upholstered in soft, diamond-stitched leather, the collection brings a sense of heritage craftsmanship reimagined for today’s interiors. Graceful, noble, and impeccably detailed, Edmund transforms every meal into a refined experience.",
    images: generateImages("edmund_collection", 1)
  },
  {
    slug: "winston_collection",
    name: "The Winston Collection",
    category: "collections",
    description:
      "The Winston Collection brings a refined old-English charm into the modern dining space. Defined by its round marble tabletop and sculptural brass pedestal base, the dining table becomes both a functional centrepiece and an elegant architectural statement. The chairs pair seamlessly with the table—featuring a gently curved silhouette, quilted upholstery, and brass-accented legs that evoke classic British tailoring with a contemporary twist. Sophisticated, gracious, and impeccably crafted, Winston creates a warm yet distinguished atmosphere, perfect for intimate dinners or elevated everyday dining.",
    images: generateImages("winston_collection", 1)
  },
  {
    slug: "elowen_collection",
    name: "The Elowen Collection",
    category: "collections",
    description:
      "The Elowen Collection brings refined old-English elegance into the modern workspace. With its soft quilted textures, high-gloss finishes, and warm brass detailing, this office ensemble blends sophistication with quiet luxury. The statement bookcase features glass-framed doors, plush diamond-stitched backing, and illuminated shelving—creating a showcase worthy of treasured books, art pieces, and personal collections. Paired with the sculptural executive chair, designed with ergonomic curves and a regal silhouette, Elowen transforms any office into a serene, empowered, and beautifully curated environment. Classic charm meets contemporary craftsmanship—Elowen is designed for those who work with grace and lead with presence.",
    images: generateImages("elowen_collection", 1)
  },
  {
    slug: "aldric_chair",
    name: "The Aldric Chair",
    category: "seating",
    description:
      "The Aldric Chair brings the quiet authority of old-English refinement into a modern executive setting. Wrapped in smooth, sculpted leather and supported by a brushed gold base, its silhouette balances strength with elegance. Subtle crest detailing add a heritage touch, while the ergonomic contours provide lasting comfort for long workdays. Designed for leaders who value sophistication and performance, Aldric transforms the workspace into a place of confidence, clarity, and understated luxury.",
    images: generateImages("aldric_chair", 1)
  },
];

export function getCustomProductsByCategory(category: CustomCategory): CustomProduct[] {
  return customProducts.filter((product) => product.category === category);
}

export function getCustomProductBySlug(slug: string): CustomProduct | undefined {
  return customProducts.find((product) => product.slug === slug);
}

export function getAllCustomProducts(): CustomProduct[] {
  return customProducts;
}
