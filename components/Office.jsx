import Image from "next/image";
import { office, site } from "@/lib/content";

export default function Office() {
  const [a, b, c] = office.images;
  return (
    <section id="office" className="section-y">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">{office.eyebrow}</p>
            <h2 className="h-display mt-4 text-3xl sm:text-4xl lg:text-5xl">{office.title}</h2>
            <p className="mt-5 font-display text-xl italic text-primary sm:text-2xl">{office.accent}</p>
            <div className="mt-6 space-y-5 leading-relaxed text-ink/85">
              {office.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
            <dl className="mt-8 space-y-4 border-t border-primary/15 pt-6">
              {office.details.map((d) => (
                <div key={d.label}>
                  <dt className="text-sm font-semibold text-accent-deep">{d.label}</dt>
                  <dd className="mt-0.5 text-ink/90">{d.value}</dd>
                </div>
              ))}
            </dl>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-8">{office.directions}</a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-7">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={a.src} alt={a.alt} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={b.src} alt={b.alt} fill sizes="(min-width:1024px) 27vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={c.src} alt={c.alt} fill sizes="(min-width:1024px) 27vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
