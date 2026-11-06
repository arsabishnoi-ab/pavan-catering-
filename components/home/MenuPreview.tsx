"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    id: "story",
    label: "Our story",
    kicker: "Shree Pavan Caterers",
    title: "A Hubballi wedding kitchen",
    image: "/images/about-kitchen.jpg",
    alt: "Vegetarian cooking for a celebration in Hubballi",
    imageFirst: true,
    body: (
      <>
        <p>
          The house cooks for the families who keep a Marwari, Jain or North Indian table in Hubballi and Dharwad. Rajasthani, Gujarati, Punjabi and South Indian dishes sit on the same vegetarian menu when the function asks for them.
        </p>
        <p>
          From a courtyard wedding to a religious gathering at home, the plan is the food, the counters and the service. You set the guest count and the rules of the kitchen.
        </p>
      </>
    ),
  },
  {
    id: "why",
    label: "Why Pavan",
    kicker: "Why Shree Pavan Caterers",
    title: "How a function is handled",
    image: "/images/occasion-family.jpg",
    alt: "A family gathering table",
    imageFirst: false,
    list: [
      "Pure vegetarian cooking for weddings, engagements and family functions.",
      "Jain food prepared to the household’s rules.",
      "Marwari, Rajasthani, North Indian, Gujarati and South Indian dishes.",
      "Breakfast, a morning welcome, lunch and an evening meal.",
      "Chaat, tandoor breads, mithai and a chai station.",
      "Service at the venue in Hubballi, Dharwad and Keshwapur.",
      "The menu is agreed before the day, including what must be left out.",
    ],
  },
  {
    id: "quality",
    label: "Food & quality",
    kicker: "Food and quality",
    title: "Our promise to you",
    image: "/images/dishes/butter-paneer.jpg",
    alt: "Butter paneer from the vegetarian kitchen",
    imageFirst: true,
    list: [
      "One vegetarian kitchen. Nothing on the menu is non-vegetarian.",
      "Jain restrictions are cooked out of the pots you name.",
      "Dishes come from the function card, not from a made-up list.",
      "The menu can be composed again for each celebration.",
      "Festive sweets for Diwali, Dasara, Holi and weddings.",
      "You reach Gangaram, Jagadish or Pappuram directly.",
    ],
  },
];

export function MenuPreview() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((item) => item.id === active) ?? tabs[0];

  return (
    <section className="bg-[#171819] py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        <div className="flex flex-wrap justify-center gap-3 border-b border-white/10 pb-6">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={`px-4 py-2 text-[13px] font-bold tracking-[0.18em] uppercase ${
                item.id === active ? "text-[#e4c590]" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className={`relative aspect-[4/3] bg-[#111] ${tab.imageFirst ? "" : "md:order-2"}`}>
            <Image src={tab.image} alt={tab.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-[0.32em] text-[#e4c590] uppercase">{tab.kicker}</p>
            <h2 className="mt-3 font-display text-[36px] leading-none text-white md:text-[48px]">{tab.title}</h2>
            {"body" in tab && tab.body ? (
              <div className="mt-5 space-y-4 text-[16px] leading-[1.85] text-white/75">{tab.body}</div>
            ) : null}
            {"list" in tab && tab.list ? (
              <ul className="mt-5 space-y-3 text-[16px] leading-[1.7] text-white/75">
                {tab.list.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-[#e4c590]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
