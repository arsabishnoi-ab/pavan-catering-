import { areas, hosts, site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "CateringService"],
    name: site.name,
    alternateName: ["Shri Pavan Caterers", site.hindiName],
    description: site.description,
    url: site.url,
    image: `${site.url}/images/fresh/hero-buffet.jpg`,
    logo: `${site.url}/images/logo.png`,
    telephone: hosts.map((host) => host.tel),
    servesCuisine: [
      "Rajasthani",
      "Marwari",
      "Jain",
      "North Indian",
      "Gujarati",
      "Punjabi",
      "South Indian",
      "Vegetarian",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: areas.map((name) => ({ "@type": "City", name })),
    hasMenu: `${site.url}/menu`,
    knowsAbout: [
      "Marwari wedding catering",
      "Jain wedding catering",
      "North Indian vegetarian catering",
      "Festive Indian sweets",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
