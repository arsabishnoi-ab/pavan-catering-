"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { title: "Marwari", image: "/images/marwari.jpg", href: "/services#marwari" },
  { title: "Jain", image: "/images/jain.jpg", href: "/services#jain" },
  { title: "North Indian", image: "/images/north-indian.jpg", href: "/services#north-indian" },
  { title: "Rajasthani", image: "/images/dishes/dal-marwadi.jpg", href: "/menu#rajasthani" },
  { title: "Chaat", image: "/images/dishes/pani-puri.jpg", href: "/menu#chaat" },
  { title: "Breads", image: "/images/dishes/phulka.jpg", href: "/menu#breads" },
  { title: "Mithai", image: "/images/sweets-festive.jpg", href: "/sweets" },
  { title: "Chai", image: "/images/chai-kulhad.jpg", href: "/contact" },
];

const card = 280;
const gap = 22;

export function Specialities() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % items.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [paused]);

  function step(direction: number) {
    setIndex((value) => (value + direction + items.length) % items.length);
  }

  return (
    <section className="bg-[#0e0d0c] py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 text-center md:px-8">
        <p className="text-[12px] font-bold tracking-[0.42em] text-[#e4c590] uppercase">Our best cuisine</p>
        <h2 className="mt-3 font-display text-[42px] text-white md:text-[60px]">Best Specialties</h2>
      </div>
      <div
        className="relative mx-auto mt-12 max-w-[1240px] px-5 md:px-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ gap, transform: `translateX(-${index * (card + gap)}px)` }}
          >
            {items.map((item, itemIndex) => (
              <Link
                key={item.title}
                href={item.href}
                className="w-[280px] shrink-0"
                onMouseEnter={() => {
                  const next = (index + 3) % items.length;
                  if (itemIndex === next) step(1);
                }}
              >
                <span className="shine tilt relative block aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={item.image}
                    alt={`${item.title} by Shree Pavan Caterers`}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </span>
                <span className="mt-4 block text-left font-display text-[26px] text-white">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label="Next specialties"
          onMouseEnter={() => step(1)}
          onClick={() => step(1)}
          className="absolute top-[38%] right-2 hidden size-10 items-center justify-center text-3xl text-white/80 hover:text-[#e4c590] md:flex"
        >
          ›
        </button>
      </div>
    </section>
  );
}
