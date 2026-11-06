import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { moreOccasions, pageMetadata, whatsappHref } from "@/data/site";

export const metadata = pageMetadata(
  "Wedding and Party Catering in Hubli",
  "Vegetarian catering in Hubballi for grand weddings, engagements, birthdays, anniversaries, religious functions, family gatherings and private events.",
  "/occasions",
);

export default function OccasionsPage() {
  return (
    <main>
      <PageIntro
        kicker="The year, as it is lived"
        title="Occasions"
        lede="From a wedding that runs breakfast through the evening, to a birthday lunch at home. The food stays vegetarian."
      />
      {moreOccasions.map((item) => (
        <section key={item.id} id={item.id} className="scroll-mt-28 border-t border-gold/40">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-12 md:px-8">
            <div className="relative aspect-[4/3] md:col-span-5">
              <Image
                src={item.image}
                alt={`${item.title} catering in Hubballi`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-7">
              <h2 className="font-display text-4xl text-white">{item.title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed font-light">{item.text}</p>
            </div>
          </div>
        </section>
      ))}
      <div className="px-5 py-12">
        <a href={whatsappHref()} className="text-[0.72rem] tracking-[0.18em] text-white uppercase">
          Tell us the date
        </a>
      </div>
    </main>
  );
}
