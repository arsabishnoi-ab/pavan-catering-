import type { Metadata } from "next";
import { DM_Sans, Forum, Tiro_Devanagari_Hindi } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppTab } from "@/components/WhatsAppTab";
import { keywords, site } from "@/data/site";
import "./globals.css";

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: "400",
  variable: "--font-tiro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Shree Pavan Caterers | Vegetarian Wedding Catering in Hubballi",
    template: "%s · Shree Pavan Caterers",
  },
  description: site.description,
  keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "Catering",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Shree Pavan Caterers | Vegetarian Wedding Catering in Hubballi",
    description: site.description,
    url: "/",
    images: [
      {
        url: "/images/hero-buffet.jpg",
        width: 1200,
        height: 675,
        alt: "Vegetarian wedding buffet by Shree Pavan Caterers, Hubballi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Pavan Caterers | Hubballi",
    description: site.description,
    images: ["/images/hero-buffet.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${forum.variable} ${dm.variable} ${tiro.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#171819] font-sans text-white">
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <WhatsAppTab />
      </body>
    </html>
  );
}
