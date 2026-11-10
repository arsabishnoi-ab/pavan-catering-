import Image from "next/image";
import Link from "next/link";
import { GoldRule } from "@/components/GoldRule";

const offers = [
  {
    title: "Weddings",
    image: "/images/fresh/occasion-wedding.jpg",
    href: "/occasions#weddings",
    link: "View occasions",
  },
  {
    title: "Cuisine",
    image: "/images/fresh/intro-thali.jpg",
    href: "/menu",
    link: "View menu",
  },
  {
    title: "Live stations",
    image: "/images/fresh/chai-kulhad.jpg",
    href: "/sweets",
    link: "View sweets",
  },
];

export function Occasions() {
  return (
    <section className="bg-[#0e0d0c] px-5 pt-16 pb-16 md:px-8 md:pt-24 md:pb-20">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="text-[12px] font-bold tracking-[0.4em] text-[#e4c590] uppercase">Flavors for a celebration</p>
        <GoldRule className="mt-4 justify-center" />
        <h2 className="mt-5 font-display text-[40px] text-white md:text-[60px]">We Offer Top Notch</h2>
        <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-[1.85] text-white/75">
          Vegetarian menus for weddings and family functions, cooked in Hubballi and served at your venue.
        </p>
      </div>
      <div className="mx-auto mt-6 grid max-w-[1100px] gap-10 md:grid-cols-3 md:gap-16">
        {offers.map((offer, index) => (
          <article key={offer.title} className={`text-center ${index === 1 ? "md:mt-40" : ""}`}>
            <Link href={offer.href} className="shine relative mx-auto block aspect-[3/4] max-w-[320px] overflow-hidden">
              <Image
                src={offer.image}
                alt={`${offer.title} catering by Shree Pavan Caterers`}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </Link>
            <h3 className="mt-6 font-display text-[35px] text-white">{offer.title}</h3>
            <Link href={offer.href} className="mt-3 inline-block text-[12px] font-bold tracking-[0.2em] text-[#e4c590] uppercase">
              {offer.link}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
