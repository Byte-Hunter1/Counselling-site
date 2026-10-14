import { footer, site, nav } from "@/lib/content";

export default function Footer() {
  const links = nav.filter((n) => n.href);
  return (
    <footer className="bg-primary-dark text-paper/90">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl text-paper">{site.name}</p>
          <p className="mt-1 text-sm text-paper/70">{site.role}</p>
          <p className="mt-5 max-w-sm leading-relaxed">{footer.blurb}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="font-display text-lg italic text-accent">Navigate</p>
          <ul className="mt-3 space-y-2">
            {links.map((l) => <li key={l.label}><a href={l.href} className="hover:text-accent">{l.label}</a></li>)}
          </ul>
        </nav>
        <address className="not-italic md:col-span-4">
          <p className="font-display text-lg italic text-accent">Contact</p>
          <p className="mt-3 leading-relaxed">
            {site.address.street}<br />{site.address.city}, {site.address.region} {site.address.zip}
          </p>
          <p className="mt-4 text-sm italic text-paper/75">{footer.area}</p>
        </address>
      </div>
      <div className="border-t border-paper/15">
        <div className="container-x flex flex-col gap-1 py-5 text-xs text-paper/60 sm:flex-row sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
