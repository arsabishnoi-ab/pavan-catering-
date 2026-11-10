"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoldRule } from "@/components/GoldRule";

const slides = [
  {
    image: "/images/fresh/occasion-wedding.jpg",
    alt: "A vegetarian wedding table set by Shree Pavan Caterers in Hubballi",
    title: "Where Every Celebration Becomes a Feast",
    text: "Authentic Marwari, Jain and North Indian catering for your special moments.",
  },
  {
    image: "/images/fresh/hero-buffet.jpg",
    alt: "Vegetarian buffet service at a Hubballi celebration",
    title: "Occasion for Today, Memories for a Lifetime",
    text: "Breakfast, lunch and an evening meal, cooked and served at your venue.",
  },
  {
    image: "/images/fresh/sweets-festive.jpg",
    alt: "Festive Indian sweets prepared for a celebration",
    title: "Flavors for the Festival Table",
    text: "Diwali, Dasara, Holi and wedding mithai from the same vegetarian kitchen.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {slides.map((item, itemIndex) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${itemIndex === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            priority={itemIndex === 0}
            sizes="100vw"
            className={`object-cover ${itemIndex === index ? "hero-zoom" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative flex min-h-screen items-center justify-center px-6 pt-20 text-center">
        <div key={index} className="max-w-[950px]">
          <p className="hero-piece text-[12px] font-bold tracking-[0.4em] text-[#e4c590] uppercase" style={{ animationDelay: "0.35s" }}>
            Shree Pavan Caterers
          </p>
          <div className="hero-piece mt-4 flex justify-center" style={{ animationDelay: "0.7s" }}>
            <GoldRule />
          </div>
          <h1
            className="hero-piece mt-6 font-display text-[34px] leading-none sm:text-[48px] lg:text-[80px] xl:text-[100px]"
            style={{ animationDelay: "1.05s" }}
          >
            {slide.title}
          </h1>
          <p
            className="hero-piece mx-auto mt-4 max-w-xl text-[18px] leading-[1.7] text-white/90 sm:text-[20px]"
            style={{ animationDelay: "1.45s" }}
          >
            {slide.text}
          </p>
          <div className="hero-piece mt-10" style={{ animationDelay: "1.85s" }}>
            <Link
              href="/menu"
              className="inline-block border border-[#e4c590] px-8 py-3 text-[12px] font-bold tracking-[0.22em] text-[#e4c590] uppercase hover:bg-[#e4c590] hover:text-[#171819]"
            >
              View our menu
            </Link>
          </div>
        </div>
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setIndex((value) => (value + slides.length - 1) % slides.length)}
        className="absolute top-1/2 left-4 hidden size-12 -translate-y-1/2 items-center justify-center border border-white/40 text-2xl text-white hover:border-[#e4c590] hover:text-[#e4c590] md:flex"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setIndex((value) => (value + 1) % slides.length)}
        className="absolute top-1/2 right-4 hidden size-12 -translate-y-1/2 items-center justify-center border border-white/40 text-2xl text-white hover:border-[#e4c590] hover:text-[#e4c590] md:flex"
      >
        ›
      </button>
    </section>
  );
}
