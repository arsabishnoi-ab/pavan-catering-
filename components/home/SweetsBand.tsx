"use client";

import { useEffect, useRef, useState } from "react";

const facts = [
  { value: 10, suffix: "+", label: "Years\nin Hubli" },
  { value: 50, suffix: "+", label: "Special\ndishes" },
  { value: 9, suffix: "", label: "Cuisines\non the card" },
  { value: 7, suffix: "", label: "Kinds of\noccasions" },
];

export function SweetsBand() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url(/images/wedding-service.jpg)" }}
    >
      <div className="bg-black/50 px-5 py-24 md:py-32">
        <div className="mx-auto mb-10 h-px max-w-3xl bg-[repeating-linear-gradient(90deg,#e4c590_0_8px,transparent_8px_16px)] opacity-80" />
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <Counter key={fact.label} {...fact} run={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 1400);
      setCurrent(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);

  return (
    <div className="flex items-center justify-center gap-4 text-white">
      <span className="font-display text-[52px] leading-none md:text-[64px]">
        {current}
        {suffix}
      </span>
      <span className="text-left text-[12px] leading-tight font-bold tracking-[0.16em] text-[#e4c590] whitespace-pre-line uppercase">
        {label}
      </span>
    </div>
  );
}
