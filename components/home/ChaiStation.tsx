import Image from "next/image";

export function ChaiStation() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
      <div className="order-2 lg:order-1">
        <p className="text-[0.68rem] tracking-[0.24em] text-gold-deep uppercase">At the celebration</p>
        <h2 className="mt-3 font-display text-[clamp(2.4rem,4vw,3.6rem)] leading-none text-maroon">
          Chai Station
        </h2>
        <p className="mt-6 text-base leading-relaxed font-light">
          A live masala chai counter for the wedding lawn or the family courtyard. Kulhad chai, poured while guests move between the meal and the mithai.
        </p>
        <p className="mt-4 font-serif text-2xl text-ink italic">Tea and coffee are on the morning card as well.</p>
      </div>
      <div className="relative order-1 aspect-[4/3] overflow-hidden bg-beige lg:order-2">
        <Image
          src="/images/chai-kulhad.jpg"
          alt="Kulhad masala chai for a Hubballi wedding"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
