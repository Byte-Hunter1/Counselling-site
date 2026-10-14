import { statement, expertise } from "@/lib/content";

export default function Statement() {
  return (
    <section className="bg-primary-dark text-paper">
      <div className="container-x section-y">
        <h2 className="h-display mx-auto max-w-4xl text-center text-3xl !text-paper sm:text-4xl lg:text-5xl">
          {statement.title} <em className="text-accent">{statement.accent}</em>
        </h2>

        <div className="mx-auto mt-16 max-w-5xl lg:mt-20">
          <h3 className="text-center text-2xl !text-paper sm:text-3xl">{expertise.title} <em className="text-accent">{expertise.accent}</em></h3>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-3 sm:gap-x-4">
            {expertise.items.map((w) => (
              <li key={w} className="rounded-full border border-paper/25 px-5 py-2 font-display text-lg italic text-paper sm:text-xl">{w}</li>
            ))}
            <li className="px-3 py-2 font-display text-lg italic text-accent sm:text-xl">{expertise.more}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
