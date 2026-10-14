import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faqs" className="section-y bg-secondary">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
        <h2 className="h-display text-3xl sm:text-4xl lg:col-span-4 lg:text-5xl">{faqs.title} <em className="text-accent-deep">{faqs.accent}</em></h2>
        <div className="divide-y divide-primary/15 border-y border-primary/15 lg:col-span-8">
          {faqs.items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-primary-dark [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/85">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
