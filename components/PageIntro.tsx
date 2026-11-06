import { GoldRule } from "@/components/GoldRule";

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mx-auto max-w-[850px] px-5 pt-40 pb-12 text-center md:pt-44 md:pb-16">
      <p className="text-[12px] font-bold tracking-[0.4em] text-[#e4c590] uppercase">{kicker}</p>
      <GoldRule className="mt-4 justify-center" />
      <h1 className="mt-6 font-display text-[34px] leading-none text-white sm:text-[48px] lg:text-[80px]">{title}</h1>
      <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.85] text-white/75">{lede}</p>
    </header>
  );
}
