import Art from "./Art";
import { book, BOOKING_URL } from "@/lib/content";

export default function Book() {
  return (
    <section id="book" className="section-y">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow">{book.eyebrow}</p>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl lg:text-5xl">
            {book.title} <em className="text-accent-deep">{book.accent}</em> {book.titleEnd}
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
            {book.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
          <a href={BOOKING_URL} className="btn mt-9">{book.cta}</a>
        </div>
        <div className="lg:col-span-5">
          <div className="arch mx-auto aspect-[3/4] max-w-sm overflow-hidden">
            <Art variant="arch" alt="A softly lit archway in slate blue and honey, an open door toward feeling steady" />
          </div>
        </div>
      </div>
    </section>
  );
}
