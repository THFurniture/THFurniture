import type { Route } from "./+types/home";
import { Hero } from "../components/home/hero";
import { Intro } from "../components/home/intro";
import { FeaturedCategories } from "../components/home/featured-categories";
import { CTA } from "../components/home/cta";

export function meta({ }: Route.MetaArgs) {
  const title = "THU Furniture - Form follows feeling";
  const description = "Discover a curated collection of furniture that brings calm, elegance, and purpose to your space.";
  const image = "https://thfurniture.com/logos/THU_logo_black.png";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedCategories />
      <CTA />
    </>
  );
}
