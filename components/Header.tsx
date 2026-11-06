"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  {
    href: "/menu",
    label: "Menu",
    children: [
      { href: "/menu#welcome-drinks", label: "Welcome drinks" },
      { href: "/menu#breakfast", label: "Breakfast" },
      { href: "/menu#starters", label: "Starters" },
      { href: "/menu#chaat", label: "Chaat" },
      { href: "/menu#mains", label: "Main course" },
      { href: "/menu#rajasthani", label: "Rajasthani" },
      { href: "/menu#jain", label: "Jain" },
      { href: "/menu#breads", label: "Breads" },
      { href: "/menu#rice", label: "Rice & pulao" },
      { href: "/menu#desserts", label: "Desserts" },
    ],
  },
  {
    href: "/services",
    label: "Cuisine",
    children: [
      { href: "/services#marwari", label: "Marwari" },
      { href: "/services#jain", label: "Jain" },
      { href: "/services#north-indian", label: "North Indian" },
      { href: "/services#gujarati", label: "Gujarati" },
      { href: "/services#punjabi", label: "Punjabi" },
      { href: "/services#south-indian", label: "South Indian" },
    ],
  },
  {
    href: "/sweets",
    label: "Live station",
    children: [
      { href: "/menu#chaat", label: "Chaat counter" },
      { href: "/menu#breads", label: "Tandoor breads" },
      { href: "/sweets", label: "Mithai" },
      { href: "/contact", label: "Chai station" },
    ],
  },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Venue" },
  { href: "/gallery", label: "Our gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openedGroup, setOpenedGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${scrolled || open ? "bg-[#1a1a1a]/95" : "bg-black/25"}`}>
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between gap-4 px-4 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Shree Pavan Caterers"
            width={2000}
            height={814}
            priority
            quality={92}
            sizes="180px"
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {links.map((item) => {
            const current =
              item.label !== "Venue" && (item.href === "/" ? pathname === "/" : pathname === item.href);
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-[13px] font-medium tracking-[0.14em] uppercase ${
                    current ? "text-[#e4c590]" : "text-white hover:text-[#e4c590]"
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    {current ? (
                      <span className="absolute -bottom-2 left-0 flex w-full flex-col gap-0.5" aria-hidden>
                        <span className="h-px bg-[#e4c590]" />
                        <span className="h-px bg-[#e4c590]" />
                      </span>
                    ) : null}
                  </span>
                  {item.children ? <span className="text-[9px]">▼</span> : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute top-full left-0 z-50 min-w-52 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className="bg-[#111] py-2 shadow-2xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          className="block px-5 py-2 text-[13px] tracking-[0.08em] text-white uppercase hover:text-[#e4c590]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-1.5">
            <span className="h-px bg-white" />
            <span className="h-px bg-white" />
            <span className="h-px bg-white" />
          </span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-[#1a1a1a] px-6 py-5 xl:hidden" aria-label="Mobile">
          <ul className="space-y-3">
            {links.map((item) => (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <Link href={item.href} className="text-[15px] tracking-[0.14em] text-white uppercase" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      className="px-2 text-[#e4c590]"
                      aria-label={`Show ${item.label} links`}
                      onClick={() => setOpenedGroup((value) => (value === item.label ? null : item.label))}
                    >
                      ▼
                    </button>
                  ) : null}
                </div>
                {item.children && openedGroup === item.label ? (
                  <ul className="mt-2 space-y-2 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link href={child.href} className="text-[13px] text-white/80" onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
