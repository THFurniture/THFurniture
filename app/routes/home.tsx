import type { Route } from "./+types/home";
import { Hero } from "../components/home/hero";
import { Intro } from "../components/home/intro";
import { FeaturedCategories } from "../components/home/featured-categories";
import { CTA } from "../components/home/cta";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "THU Furniture - Form follows feeling" },
    { name: "description", content: "Discover a curated collection of furniture that brings calm, elegance, and purpose to your space." },
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
