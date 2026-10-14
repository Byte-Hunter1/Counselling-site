import Art from "./Art";
import { whoIHelp } from "@/lib/content";

export default function WhoIHelp() {
  return (
    <section className="section-y bg-secondary">
      <div className="container-x">
        <h2 className="h-display text-4xl sm:text-5xl">{whoIHelp.title} <em className="text-accent-deep">{whoIHelp.accent}</em></h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 lg:gap-12">
          {whoIHelp.items.map((it) => (
            <article key={it.title}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[4/4.6]">
                <Art variant={it.art} alt={it.alt} />
              </div>
              <h3 className="mt-6 text-2xl leading-snug">{it.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
