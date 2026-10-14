import Art from "./Art";
import { hope } from "@/lib/content";

export default function Hope() {
  return (
    <section className="section-y">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="h-display text-3xl sm:text-4xl lg:text-[2.9rem]">
            {hope.title} <em className="text-accent-deep">{hope.accent}</em>
          </h2>
          <p className="mt-6 font-display text-xl italic text-primary sm:text-2xl">{hope.lead}</p>
          <div className="mt-6 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
            {hope.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Art variant="dunes" alt="Soft dunes under a low honey-colored sun, evoking relief after a long stretch of stress" />
          </div>
        </div>
      </div>
    </section>
  );
}
