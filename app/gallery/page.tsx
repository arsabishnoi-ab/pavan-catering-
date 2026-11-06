import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { photoDishes } from "@/data/menu";
import { pageMetadata, scenes } from "@/data/site";

export const metadata = pageMetadata(
  "Gallery",
  "Photographs of vegetarian wedding food, mithai and celebration tables from Shree Pavan Caterers, Hubballi.",
  "/gallery",
);

export default function GalleryPage() {
  const dishes = photoDishes();

  return (
    <main>
      <PageIntro
        kicker="The table"
        title="Gallery"
        lede="Food from the kitchen card, and the kind of table it is cooked for."
      />
      <div className="mx-auto columns-1 gap-4 px-5 pb-20 sm:columns-2 lg:columns-3 md:px-8">
        {scenes.map((scene) => (
          <figure key={scene.src} className="mb-4 break-inside-avoid">
            <div className="relative aspect-[4/3] bg-beige">
              <Image src={scene.src} alt={scene.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-2 font-serif text-lg text-ink">{scene.caption}</figcaption>
          </figure>
        ))}
        {dishes.map((dish) => (
          <figure key={dish.image} className="mb-4 break-inside-avoid">
            <div className="relative aspect-[4/3] bg-beige">
              <Image
                src={dish.image!}
                alt={`${dish.name} by Shree Pavan Caterers, Hubballi`}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 font-serif text-lg text-ink">
              {dish.name}
              <span className="mt-0.5 block font-hindi text-base text-white">{dish.hindi}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
