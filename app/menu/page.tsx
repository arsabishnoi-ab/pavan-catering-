import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { categories, sampleServices } from "@/data/menu";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata(
  "Vegetarian Menu",
  "Marwari, Jain and North Indian vegetarian menu in Hubballi: welcome drinks, chaat, Rajasthani specialities, breads, pulao and mithai from Shree Pavan Caterers.",
  "/menu",
);

export default function MenuPage() {
  return (
    <main>
      <PageIntro
        kicker="श्री पवन केटरर्स"
        title="The menu"
        lede="Dishes from a Shree Pavan function card, set out by course. Each celebration is composed again. If the food must be Jain, say so when you book."
      />
      <nav className="sticky top-20 z-30 border-y border-gold/40 bg-ivory" aria-label="Menu courses">
        <div className="mx-auto max-w-6xl px-5 py-3 md:px-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="mr-4 inline-block py-1 text-[0.68rem] tracking-[0.12em] text-ink uppercase hover:text-gold"
            >
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      {categories.map((category) => (
        <section key={category.id} id={category.id} className="scroll-mt-40 border-b border-gold/30">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="font-serif text-xl text-gold-deep italic">{category.kicker}</p>
            <h2 className="mt-2 font-display text-4xl text-white md:text-5xl">{category.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed font-light">{category.intro}</p>
            <ul className="mt-10">
              {category.dishes.map((item) => (
                <li key={`${category.id}-${item.id}`} className="grid gap-6 border-t border-gold/40 py-7 md:grid-cols-12">
                  {item.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden bg-beige md:col-span-4">
                      <Image
                        src={item.image}
                        alt={`${item.name} by Shree Pavan Caterers, Hubballi`}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="hidden md:col-span-4 md:block" />
                  )}
                  <div className={item.image ? "md:col-span-8" : "md:col-span-8 md:col-start-5"}>
                    <h3 className="font-serif text-3xl text-ink md:text-4xl">{item.name}</h3>
                    <p className="mt-1 font-hindi text-lg text-white">{item.hindi}</p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed font-light">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-beige/60" id="sample">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-[0.68rem] tracking-[0.24em] text-gold-deep uppercase">15 January 2026</p>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">A sample function menu</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed font-light">
            One celebration, written as the kitchen card has it. Guest counts are from that day, not a limit.
          </p>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {sampleServices.map((service) => (
              <article key={service.id}>
                <div className="flex items-baseline justify-between gap-4 border-b border-gold pb-3">
                  <h3 className="font-display text-3xl text-ink">
                    {service.title}
                    {service.hindi ? (
                      <span className="mt-1 block font-hindi text-lg text-white">{service.hindi}</span>
                    ) : null}
                  </h3>
                  <p className="text-[0.68rem] tracking-[0.16em] text-gold-deep uppercase">
                    {service.guests} guests
                  </p>
                </div>
                {service.groups.map((group) => (
                  <div key={group.label ?? group.items[0]} className="mt-5">
                    {group.label ? (
                      <p className="text-[0.68rem] tracking-[0.18em] text-white uppercase">{group.label}</p>
                    ) : null}
                    <ul className="mt-2 space-y-1">
                      {group.items.map((line) => (
                        <li key={line} className="font-hindi text-lg text-ink">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
