import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("catalog", "routes/catalog.tsx"),
  route("product/:slug", "routes/product.$slug.tsx"),
  route("custom-made", "routes/custom-made.tsx"),
  route("custom-made/:slug", "routes/custom-made.$slug.tsx"),
  route("contact", "routes/contact.tsx"),
  route("terms", "routes/terms.tsx"),
  route("privacy", "routes/privacy.tsx"),
] satisfies RouteConfig;
