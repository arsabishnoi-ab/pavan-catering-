"use client";

import { FormEvent, useState } from "react";
import { whatsappHref } from "@/data/site";

const occasions = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Anniversary",
  "Religious function",
  "Family gathering",
  "Corporate or private function",
  "Festive sweets",
];

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Namaste, I would like to book catering with Shree Pavan Caterers.",
      `Name: ${String(data.get("name") || "").trim()}`,
      `Phone: ${String(data.get("phone") || "").trim()}`,
      `Occasion: ${String(data.get("occasion") || "").trim()}`,
      `Date: ${String(data.get("date") || "").trim()}`,
      `Guests: ${String(data.get("guests") || "").trim()}`,
      `Jain menu: ${data.get("jain") ? "Yes" : "No"}`,
      `Note: ${String(data.get("note") || "").trim()}`,
    ];
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Field label="Name" name="name" required />
      <Field label="Phone" name="phone" type="tel" required />
      <label className="block">
        <span className="text-[0.68rem] tracking-[0.18em] text-gold-deep uppercase">Occasion</span>
        <select
          name="occasion"
          required
          defaultValue="Wedding"
          className="mt-2 w-full border-b border-gold/80 bg-transparent py-3 text-sm outline-none"
        >
          {occasions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Date" name="date" type="date" required />
        <Field label="Guests" name="guests" type="number" required />
      </div>
      <label className="flex items-start gap-3 text-sm font-light">
        <input name="jain" type="checkbox" className="mt-1 accent-maroon" />
        The menu should be Jain, cooked to our household rules.
      </label>
      <label className="block">
        <span className="text-[0.68rem] tracking-[0.18em] text-gold-deep uppercase">Note</span>
        <textarea
          name="note"
          rows={4}
          className="mt-2 w-full border-b border-gold/80 bg-transparent py-3 text-sm outline-none"
          placeholder="Venue, meal times, dishes you want kept or left out"
        />
      </label>
      <button
        type="submit"
        className="bg-[#e4c590] px-8 py-3 text-[12px] font-bold tracking-[0.18em] text-[#171819] uppercase"
      >
        Continue on WhatsApp
      </button>
      {opened ? (
        <p className="text-sm text-white/80">
          WhatsApp should be open with your message to Gangaram. If it did not, call 9739628092.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[0.68rem] tracking-[0.18em] text-gold-deep uppercase">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-gold/80 bg-transparent py-3 text-sm outline-none"
      />
    </label>
  );
}
