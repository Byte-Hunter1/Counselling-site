import Image from "next/image";
import Art from "./Art";
import { hero, BOOKING_URL } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="bg-secondary">
      <div className="container-x grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-6">
          <p className="eyebrow italic">{hero.eyebrow}</p>
          <h1 className="h-display mt-5 text-[2.5rem] sm:text-6xl lg:text-[4rem]">
            {hero.titleStart} <em className="text-accent-deep">{hero.titleAccent}</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">{hero.sub}</p>
          <a href={BOOKING_URL} className="btn mt-9">{hero.cta}</a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-6">
          <div className="arch aspect-[3/4.4] overflow-hidden">
            <Art variant="coast" alt="Sun setting over layered ocean waves in slate blue, evoking the Santa Monica coast" />
          </div>
          <div className="arch relative mt-10 aspect-[3/4.4] overflow-hidden sm:mt-14">
            <Image src="/images/office-window.jpg" alt="Afternoon light through tall windows and sheer curtains in Dr. Reynolds’ Santa Monica therapy office" fill priority sizes="(min-width:1024px) 22vw, 45vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
