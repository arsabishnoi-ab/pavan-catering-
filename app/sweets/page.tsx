import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { festivals, pageMetadata, whatsappHref } from "@/data/site";

const mithai = [
  { name: "Manglik lapsi", hindi: "मांगलिक लापसी", image: "/images/dishes/lapsi.jpg" },
  { name: "Sitaphal rabdi", hindi: "सीताफल रबडी", image: "/images/dishes/sitaphal-rabdi.jpg" },
  { name: "Kaju paan", hindi: "काजु पान स्वीट", image: "/images/dishes/kaju-paan.jpg" },
  { name: "Hot kalakand", hindi: "गर्म कलाकन्द", image: "/images/dishes/kalakand.jpg" },
  { name: "Hot gulab jamun", hindi: "गर्म गुलाब जामुन", image: "/images/dishes/gulab-jamun.jpg" },
  { name: "Baklava", hindi: "बकलावा", image: "/images/dishes/baklava.jpg" },
  { name: "Badam sheera", hindi: "बादाम सीरा", image: "/images/dishes/badam-sheera.jpg" },
  { name: "Australian angoori", hindi: "ऑस्ट्रेलियन अंगुरी", image: "/images/dishes/angoori.jpg" },
];

export const metadata = pageMetadata(
  "Diwali and Wedding Sweets in Hubli",
  "Traditional vegetarian sweets in Hubballi for Diwali, Dasara, Holi and weddings. Lapsi, rabdi, kalakand, gulab jamun and kaju sweets from Shree Pavan Caterers.",
  "/sweets",
);

export default function SweetsPage() {
  return (
    <main>
      <PageIntro
        kicker="Prepared and delivered"
        title="Festive sweets"
        lede="Mithai for Diwali, Dasara, Holi and the wedding counter. The sweets are the ones our kitchen already cooks for celebrations."
      />
      <div className="relative mx-auto aspect-[16/7] max-w-6xl overflow-hidden px-5 md:px-8">
        <div className="relative h-full min-h-64">
          <Image
            src="/images/sweets-festive.jpg"
            alt="Indian festive sweets arranged for a Hubballi celebration"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
        {festivals.map((festival) => (
          <article key={festival.id} id={festival.id} className="border-t border-gold pt-6">
            <h2 className="font-display text-4xl text-white">{festival.title}</h2>
            <p className="mt-3 text-sm leading-relaxed font-light">{festival.text}</p>
          </article>
        ))}
      </section>
      <section className="border-t border-gold/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-display text-4xl text-white">From the mithai list</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {mithai.map((item) => (
              <li key={item.name}>
                <div className="relative aspect-square overflow-hidden bg-beige">
                  <Image
                    src={item.image}
                    alt={`${item.name}, festive sweet from Hubballi`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 font-serif text-2xl">{item.name}</h3>
                <p className="font-hindi text-white">{item.hindi}</p>
              </li>
            ))}
          </ul>
          <a href={whatsappHref("Namaste, I would like to order festive sweets from Shree Pavan Caterers in Hubballi.")} className="mt-12 inline-block bg-[#e4c590] px-8 py-3 text-[12px] font-bold tracking-[0.18em] text-[#171819] uppercase">
            Order sweets on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
