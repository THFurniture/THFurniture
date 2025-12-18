# TH Furniture - Luxury Furniture Digital Showroom Platform

A premium, full-stack e-commerce application for TH Furniture, featuring an interactive fabric selector and seamless inquiry flow. Built with React Router, TypeScript, and Tailwind CSS.

## Overview

TH Furniture is a modern furniture showcase and inquiry platform that enables customers to explore curated furniture collections, select from multiple fabric options with real-time image updates, and initiate inquiries directly with their selected configurations.

## Key Features

- 🪑 **Product Catalog**: Comprehensive furniture collection organized by category (Sofas, Seating, Ottomans, Tables, Beds)
- 🎨 **Interactive Fabric Selector**: Browse 20+ stocked fabrics organized by collection with texture preview images
- 🖼️ **Dynamic Product Images**: Real-time image updates when selecting different fabrics
- 📨 **Smart Inquiry Flow**: Pre-filled contact forms with selected product and fabric information
- 📱 **Responsive Design**: Mobile-first approach with adaptive layouts
- 🎭 **Modern UI**: Elegant design system with smooth animations using Framer Motion
- 🔤 **TypeScript**: Full type safety across the application
- 🎨 **TailwindCSS**: Utility-first styling framework

## Project Structure

```
app/
├── data/
│   ├── fabric-data.ts          # Fabric definitions and helpers
│   └── furniture-data.ts       # Product definitions and helpers
├── routes/
│   ├── product.$slug.tsx       # Product detail page with fabric selector
│   └── contact.tsx             # Contact/inquiry page
├── components/
│   ├── product/
│   │   └── fabric-selector.tsx # Fabric selection UI component
│   ├── contact/
│   │   └── contact-form.tsx    # Contact form with inquiry context
│   ├── home/                   # Homepage sections
│   ├── catalog/                # Product listing components
│   └── layout/                 # Navigation and layout
└── styles/                     # Global styles and Tailwind config

public/
├── furniture/                  # Product images (organized by product-fabric combo)
├── fabrics/                    # Fabric swatch texture images
└── logos/                      # Branding assets
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

## Feature Details

### Fabric Selector

The fabric selector is a cornerstone feature that allows users to:

- Browse fabrics organized by collection (Performance Linen Weave, Perennials Performance Textured, Washed Belgian Flax Linen)
- View texture preview images for each fabric option
- See selected fabric information in a persistent preview banner
- Experience real-time product image updates as they select different fabrics

**Component**: `app/components/product/fabric-selector.tsx`

### Smart Inquiry Flow

When users click "Inquire About This Piece", the system:

1. Captures the selected product name, fabric, and collection
2. Passes this information via URL parameters to the contact form
3. Displays a context banner confirming the inquiry details
4. Pre-fills the message with relevant product information

**Files involved**:
- Product Page: `app/routes/product.$slug.tsx`
- Contact Form: `app/components/contact/contact-form.tsx`

### Image Organization

**Product Images** (one per product-fabric combination):
```
public/furniture/{product_slug}-{fabric_id}.webp
Example: ashley_sofa-white.webp, mila_ottoman-natural.webp
```

**Fabric Swatches** (texture preview):
```
public/fabrics/{fabric_id}.webp
Example: white.webp, natural.webp, dove.webp
```

## Data Structure

### Fabric Data (`app/data/fabric-data.ts`)

```typescript
interface Fabric {
  id: string;                    // Unique fabric identifier
  name: string;                  // Display name
  collection: FabricCollection;  // Fabric collection type
  swatchImage: string;           // Path to texture image
}
```

Available Collections:
- Performance Linen Weave (16 colors)
- Perennials Performance Textured (2 colors)
- Washed Belgian Flax Linen (1 color)

### Product Data (`app/data/furniture-data.ts`)

```typescript
interface Product {
  slug: string;      // URL-friendly identifier
  name: string;      // Display name
  category: Category; // sofas | seating | ottomans | tables | beds
  description: string; // Product description
}
```

## Styling

The application uses a carefully curated color palette:

- **Primary**: `#2E2C2A` (Dark Brown)
- **Secondary**: `#F9F7F4` (Cream)
- **Accent**: `#A0685F` (Terracotta)
- **Text**: `#6B6965` (Warm Gray)

All styling is built with [Tailwind CSS](https://tailwindcss.com/), providing:
- Responsive utility classes
- Custom color palette configuration
- Optimized production builds

## Animations

Smooth animations powered by [Framer Motion](https://www.framer.com/motion/):
- Fabric selector accordion expansions
- Image transitions when changing fabrics
- Selection state indicators
- Page transitions

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Server-side rendering for SEO optimization

## Performance Optimizations

- Image lazy loading with error fallbacks
- CSS optimization via Tailwind
- Code splitting for routes
- Production build optimization

## Deployment

### Docker Deployment

```bash
docker build -t th-furniture .
docker run -p 3000:3000 th-furniture
```

### Supported Platforms

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### Manual Deployment

The built application is production-ready:

```bash
npm run build
# Output: build/ directory with client and server code
```

Deploy the output of `npm run build` to any Node.js hosting provider.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

## Technology Stack

- **Framework**: React Router 7+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Bundler**: Vite
- **Runtime**: Node.js

## Contributing

This project maintains a simple, maintainable structure. When adding features:

1. Keep components focused and reusable
2. Organize data in the `/data` directory
3. Follow the established naming conventions
4. Use TypeScript for type safety
5. Ensure responsive design mobile-first

## License

Built with care for TH Furniture.

---

Built with ❤️ using React Router, Tailwind CSS, and Framer Motion.
