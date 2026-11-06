import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata, services, whatsappHref } from "@/data/site";

export const metadata = pageMetadata(
  "Catering Services in Hubballi",
  "Marwari, Jain, Rajasthani, Gujarati, Punjabi and South Indian vegetarian catering for weddings and functions in Hubli and Hubballi.",
  "/services",
);

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        kicker="Hubballi · Keshwapur"
        title="Services"
        lede="A pure vegetarian kitchen for Marwari and Jain weddings, North Indian celebrations, and the other cuisines named on our card."
      />
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="scroll-mt-28 border-t border-gold/40"
        >
          <div className={`mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2 ${index % 2 ? "" : ""}`}>
            <div className={`relative aspect-[4/3] overflow-hidden bg-beige ${index % 2 ? "lg:order-2" : ""}`}>
              <Image
                src={service.image}
                alt={`${service.title} by Shree Pavan Caterers, Hubballi`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-xl text-gold italic">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-4xl text-white md:text-5xl">{service.title}</h2>
              <p className="mt-4 font-serif text-2xl text-ink italic">{service.lede}</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed font-light">{service.body}</p>
            </div>
          </div>
        </section>
      ))}
      <div className="border-t border-gold/40 px-5 py-14 text-center">
        <a href={whatsappHref()} className="inline-block bg-[#e4c590] px-8 py-3 text-[12px] font-bold tracking-[0.18em] text-[#171819] uppercase">
          Book Catering on WhatsApp
        </a>
      </div>
    </main>
  );
}
