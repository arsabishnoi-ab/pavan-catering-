import { Booking } from "@/components/home/Booking";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { MenuPreview } from "@/components/home/MenuPreview";
import { Occasions } from "@/components/home/Occasions";
import { Reviews } from "@/components/home/Reviews";
import { Specialities } from "@/components/home/Specialities";
import { SweetsBand } from "@/components/home/SweetsBand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Specialities />
      <Occasions />
      <SweetsBand />
      <MenuPreview />
      <Reviews />
      <Booking />
    </main>
  );
}
