import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { hosts, pageMetadata, site } from "@/data/site";

export const metadata = pageMetadata(
  "About Shree Pavan Caterers",
  "Shree Pavan Caterers is a pure vegetarian wedding caterer in Shivaganga Colony, Keshwapur, Hubballi, cooking Marwari, Jain and North Indian food.",
  "/about",
);

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        kicker={site.hindiName}
        title="About the kitchen"
        lede="A vegetarian catering house in Keshwapur, cooking for the weddings and family occasions of Hubballi and Dharwad."
      />
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 pb-20 md:grid-cols-12 md:px-8">
        <div className="relative aspect-[4/3] md:col-span-7">
          <Image
            src="/images/about-kitchen.jpg"
            alt="The vegetarian kitchen of Shree Pavan Caterers in Keshwapur, Hubballi"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="md:col-span-5">
          <p className="text-base leading-relaxed font-light">
            The card says it plainly: wedding and other party orders, with experience in Rajasthani, Gujarati, Punjabi, Agarwal, Maheshwari, North Indian and South Indian dishes. The food is vegetarian. Jain menus are cooked to the household, not from a fixed printed list.
          </p>
          <p className="mt-4 text-base leading-relaxed font-light">
            Gangaram, Jagadish and Pappuram take the bookings. The kitchen address is {site.street}, {site.locality} {site.postalCode}.
          </p>
          <ul className="mt-8 space-y-4 border-t border-gold pt-6">
            {hosts.map((host) => (
              <li key={host.tel} className="flex items-baseline justify-between gap-4">
                <span className="font-display text-2xl">{host.name}</span>
                <a href={`tel:${host.tel}`} className="text-sm text-white">
                  {host.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
