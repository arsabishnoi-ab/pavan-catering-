import Image from "next/image";
import Link from "next/link";
import { hosts, nav, site, whatsappHref } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#0e0d0c] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Image
            src="/images/logo.png"
            alt="Shree Pavan Caterers"
            width={2000}
            height={814}
            quality={92}
            sizes="320px"
            className="h-24 w-auto"
          />
          <p className="mt-6 font-hindi text-xl text-[#e4c590]">{site.hindiName}</p>
          <p className="mt-4 max-w-sm text-[16px] leading-[1.85] text-white/75">
            Pure vegetarian catering for Marwari, Jain and North Indian celebrations in Hubballi, Dharwad and Keshwapur.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[12px] font-bold tracking-[0.28em] text-[#e4c590] uppercase">Visit us</p>
          <p className="mt-5 text-[16px] leading-[1.85] text-white/80">
            {site.street}
            <br />
            {site.locality} – {site.postalCode}
            <br />
            {site.region}
          </p>
          <ul className="mt-6 space-y-2 text-[16px]">
            {hosts.map((host) => (
              <li key={host.tel}>
                <a href={`tel:${host.tel}`} className="hover:text-[#e4c590]">
                  {host.name} · {host.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[12px] font-bold tracking-[0.28em] text-[#e4c590] uppercase">Pages</p>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-[16px]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#e4c590]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappHref()}
            className="mt-8 inline-block border border-[#e4c590] px-6 py-3 text-[12px] font-bold tracking-[0.18em] text-[#e4c590] uppercase hover:bg-[#e4c590] hover:text-[#171819]"
          >
            Booking request
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-[13px] leading-relaxed text-white/55 md:px-8">
          Vegetarian wedding caterers in Hubli and Hubballi · Marwari, Jain, Rajasthani, Gujarati, Punjabi and South Indian · Keshwapur
          <br />
          Food photographs by Wikimedia Commons contributors.
        </p>
      </div>
    </footer>
  );
}
