"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Asha Patil",
    city: "Hubballi",
    text: "Our wedding lunch in Hubballi was fully vegetarian, and the Jain dishes were cooked the way our family had asked. Guests kept returning to the chaat and the dal.",
  },
  {
    name: "Rahul Deshpande",
    city: "Dharwad",
    text: "Pavan handled breakfast and the evening meal for our engagement in Dharwad. The mithai and the chai station were what everyone talked about afterwards.",
  },
  {
    name: "Kavita Joshi",
    city: "Belagavi",
    text: "They came to Belagavi for a family function. The North Indian spread, the phulka, and the sweets all arrived on time and were enough for the whole house.",
  },
  {
    name: "Suresh Kulkarni",
    city: "Gadag",
    text: "We called them from Gadag for a religious gathering. The food was satvik where we needed it, and the service at the venue was calm and well organised.",
  },
  {
    name: "Meena Naik",
    city: "Haveri",
    text: "A birthday lunch in Haveri, with chaat for the children and a proper vegetarian meal for the elders. Simple to book, and the food tasted like a wedding kitchen.",
  },
  {
    name: "Imran Mulla",
    city: "Vijayapura",
    text: "They catered a family gathering in Vijayapura. Rajasthani breads, a paneer gravy, and hot gulab jamun. Our relatives from Hubballi already knew the kitchen.",
  },
];

export function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  return (
    <section
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url(/images/intro-thali.jpg)" }}
    >
      <div className="bg-black/55 px-5 py-24 md:py-32">
        <h2 className="text-center font-display text-[40px] text-white md:text-[64px]">What People Are Saying</h2>
        <div className="relative mx-auto mt-10 max-w-4xl">
          <article className="bg-black/85 px-6 py-10 text-white shadow-2xl md:px-12 md:py-12">
            <p className="text-[#fbbc04]" aria-label="5 stars">
              ★ ★ ★ ★ ★
            </p>
            <p className="mt-5 text-[16px] leading-[1.85] text-white/90">{review.text}</p>
            <div className="mt-8 flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-[#e4c590] font-display text-xl text-[#171819]">
                {review.name.slice(0, 1)}
              </span>
              <p className="text-[13px] font-bold tracking-[0.16em] text-[#e4c590] uppercase">
                {review.name}
                <span className="mt-1 block font-sans text-[11px] font-medium tracking-[0.18em] text-white/70">{review.city}</span>
              </p>
            </div>
          </article>
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => setIndex((value) => (value + reviews.length - 1) % reviews.length)}
            className="absolute top-1/2 -left-3 flex size-10 -translate-y-1/2 items-center justify-center border border-[#e4c590]/70 text-xl text-[#e4c590] md:-left-14"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => setIndex((value) => (value + 1) % reviews.length)}
            className="absolute top-1/2 -right-3 flex size-10 -translate-y-1/2 items-center justify-center border border-[#e4c590]/70 text-xl text-[#e4c590] md:-right-14"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
