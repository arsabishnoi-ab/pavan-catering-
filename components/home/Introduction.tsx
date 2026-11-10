import Image from "next/image";

export function Introduction() {
  return (
    <section className="bg-[#171819] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative aspect-[4/5] bg-[#111]">
          <Image
            src="/images/fresh/intro-thali.jpg"
            alt="A vegetarian Indian thali from Shree Pavan Caterers"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[12px] font-bold tracking-[0.4em] text-[#e4c590] uppercase">Shree Pavan Caterers</p>
          <h2 className="mt-4 font-display text-[40px] leading-none text-white md:text-[60px]">Every gathering deserves a feast</h2>
          <p className="mt-6 text-[16px] leading-[1.85] text-white/75">
            Shree Pavan Caterers cooks pure vegetarian food for Marwari, Jain and North Indian celebrations in Hubballi. A wedding day can run from badam sheera at breakfast to chaat, tandoor breads, a full lunch and mithai in the evening.
          </p>
          <p className="mt-4 text-[16px] leading-[1.85] text-white/75">
            The kitchen is in Shivaganga Colony, Keshwapur. Gangaram, Jagadish and Pappuram take the booking. Tell us the occasion, the guest count, and whether the food must be Jain.
          </p>
          <p className="mt-4 text-[16px] leading-[1.85] text-white/75">
            Service covers the food, the counters and the people who serve them: weddings, engagements, birthdays, religious functions and family gatherings across Hubballi and Dharwad.
          </p>
        </div>
      </div>
    </section>
  );
}
