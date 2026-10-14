import Art from "./Art";
import { specialties as s, BOOKING_URL } from "@/lib/content";

export default function Specialties() {
  return (
    <section id="specialties" className="section-y bg-secondary">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:sticky lg:top-28 lg:aspect-[4/5]">
            <Art variant="ripples" alt="Slate-blue ripples spreading from a honey-colored center, evoking steady, paced healing" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl">
            {s.title} <em className="text-accent-deep">{s.amp}</em> {s.title2}
          </h2>
          <h3 className="mt-8 text-2xl sm:text-3xl">{s.sub} <em className="text-accent-deep">{s.subAccent}</em> {s.subEnd}</h3>
          <div className="mt-6 divide-y divide-primary/15 border-y border-primary/15">
            {s.items.map((it) => (
              <article key={it.title} className="py-8">
                <h4 className="text-2xl">{it.title}</h4>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink/85">{it.text}</p>
                <a href={BOOKING_URL} className="mt-4 inline-block font-semibold text-accent-deep underline decoration-accent decoration-2 underline-offset-4 hover:text-primary">{s.cta}</a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
