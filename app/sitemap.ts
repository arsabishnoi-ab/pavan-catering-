import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const paths = ["", "/services", "/menu", "/occasions", "/sweets", "/gallery", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-06");
  return paths.map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" || path === "/menu" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }));
}
