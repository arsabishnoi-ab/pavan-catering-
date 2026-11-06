import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { GoldRule } from "@/components/GoldRule";
import { hosts, site } from "@/data/site";

export function Booking() {
  const gangaram = hosts[0];

  return (
    <section className="bg-[#0e0d0c] px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1100px] items-center gap-14 md:grid-cols-2">
        <div className="text-center">
          <div className="relative mx-auto flex size-72 items-center justify-center">
            <span className="ring-spin absolute inset-0 rounded-full border border-dashed border-[#e4c590]/80" />
            <span className="absolute inset-4 rounded-full border border-[#e4c590]/40" />
            <div className="logo-float">
              <Image
                src="/images/logo.png"
                alt="Shree Pavan Caterers"
                width={2000}
                height={814}
                className="h-28 w-auto"
              />
            </div>
          </div>
          <p className="mt-6 font-hindi text-2xl text-[#e4c590]">{site.hindiName}</p>
          <p className="mt-3 text-[16px] leading-[1.85] text-white/70">
            {site.street}
            <br />
            {site.locality} – {site.postalCode}
          </p>
          <p className="mt-4 font-display text-3xl text-white">
            <a href={`tel:${gangaram.tel}`}>{gangaram.phone}</a>
          </p>
        </div>
        <div>
          <p className="text-[12px] font-bold tracking-[0.4em] text-[#e4c590] uppercase">Booking request</p>
          <GoldRule className="mt-4" />
          <h2 className="mt-4 font-display text-[36px] text-white md:text-[48px]">What are you waiting for?</h2>
          <p className="mt-3 mb-8 text-[16px] leading-[1.7] text-white/70">
            Fill this in and it opens WhatsApp to {gangaram.name}, with Jagadish {hosts[1].phone} and Pappuram {hosts[2].phone} listed on the contact page.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
