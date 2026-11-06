import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { hosts, pageMetadata, site, whatsappHref } from "@/data/site";

export const metadata = pageMetadata(
  "Contact a Hubballi Caterer",
  "Book Shree Pavan Caterers in Keshwapur, Hubballi. Call Gangaram, Jagadish or Pappuram, or send a WhatsApp for vegetarian wedding catering.",
  "/contact",
);

export default function ContactPage() {
  const map = `https://www.openstreetmap.org/export/embed.html?bbox=75.115%2C15.342%2C75.148%2C15.363&layer=mapnik&marker=${site.geo.latitude}%2C${site.geo.longitude}`;

  return (
    <main>
      <PageIntro
        kicker="Keshwapur, Hubballi"
        title="Contact"
        lede="Call, or send the occasion on WhatsApp. The message goes to Gangaram, and the other two numbers are here as well."
      />
      <section className="mx-auto grid max-w-6xl gap-16 px-5 pb-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-[0.68rem] tracking-[0.2em] text-gold-deep uppercase">Address</p>
          <p className="mt-3 font-display text-3xl leading-snug text-white">
            {site.street}
            <br />
            {site.locality} – {site.postalCode}
          </p>
          <p className="mt-2 text-sm font-light">{site.region}, India</p>
          <ul className="mt-8 space-y-5">
            {hosts.map((host) => (
              <li key={host.tel} className="border-t border-gold/50 pt-4">
                <p className="font-display text-2xl">{host.name}</p>
                <p className="mt-1 text-sm">
                  <a href={`tel:${host.tel}`} className="text-white">
                    {host.phone}
                  </a>
                  <span className="mx-2 text-gold">/</span>
                  <a href={whatsappHref(site.greeting, host.wa)} className="text-white">
                    WhatsApp
                  </a>
                </p>
              </li>
            ))}
          </ul>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden border border-gold/50">
            <iframe
              title="Map of Shivaganga Colony, Keshwapur, Hubballi"
              src={map}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
          <a
            href={`https://www.openstreetmap.org/?mlat=${site.geo.latitude}&mlon=${site.geo.longitude}#map=16/${site.geo.latitude}/${site.geo.longitude}`}
            className="mt-3 inline-block text-[0.68rem] tracking-[0.16em] text-white uppercase"
          >
            Open the map
          </a>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
