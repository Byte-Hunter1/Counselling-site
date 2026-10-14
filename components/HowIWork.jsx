import Image from "next/image";
import { how, BOOKING_URL } from "@/lib/content";

export default function HowIWork() {
  return (
    <section id="about" className="section-y">
      <div className="container-x grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="arch relative mx-auto aspect-[2/3] max-w-md overflow-hidden bg-secondary">
            <Image src="/images/maya-reynolds.jpg" alt={how.photoAlt} fill sizes="(min-width:1024px) 38vw, 90vw" className="object-cover" />
          </div>
          <ul className="mx-auto mt-6 flex max-w-md flex-wrap gap-2">
            {how.facts.map((f) => (
              <li key={f} className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary">{f}</li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">{how.eyebrow}</p>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl lg:text-5xl">{how.title}</h2>
          <p className="mt-7 font-display text-xl italic leading-snug text-primary sm:text-2xl">{how.lead}</p>
          <div className="mt-7 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
            {how.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
          <a href={BOOKING_URL} className="btn-outline mt-9">{how.cta}</a>
        </div>
      </div>
    </section>
  );
}
