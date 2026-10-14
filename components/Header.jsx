"use client";
import { useState } from "react";
import { nav, site, BOOKING_URL } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-paper/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" className="leading-tight" onClick={close}>
          <span className="block font-display text-xl text-primary-dark sm:text-2xl">{site.name}</span>
          <span className="block text-xs text-primary/80">Clinical Psychology in {site.city}, CA</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 py-6 text-[15px] font-medium text-primary hover:text-accent-deep" aria-haspopup="true">
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                </button>
                <ul className="invisible absolute left-0 top-full min-w-[15rem] rounded-b-xl border border-primary/10 bg-paper py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <a href={c.href} className="block px-5 py-2 text-[15px] text-primary hover:bg-secondary">{c.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a key={item.label} href={item.href} className="text-[15px] font-medium text-primary hover:text-accent-deep">{item.label}</a>
            )
          )}
        </nav>

        <a href={BOOKING_URL} className="btn !px-5 !py-2.5 !text-sm hidden lg:inline-flex">Schedule a session</a>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open ? <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" /> : <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <nav id="mobile-menu" aria-label="Mobile" hidden={!open} className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-primary/10 bg-paper lg:hidden">
        <ul className="container-x py-4">
          {nav.map((item) => (
            <li key={item.label} className="border-b border-primary/10 py-3">
              {item.children ? (
                <>
                  <p className="font-display text-lg text-primary-dark">{item.label}</p>
                  <ul className="mt-1 pl-3">
                    {item.children.map((c) => (
                      <li key={c.label}><a href={c.href} onClick={close} className="block py-1.5 text-primary">{c.label}</a></li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.href} onClick={close} className="block font-display text-lg text-primary-dark">{item.label}</a>
              )}
            </li>
          ))}
          <li className="pt-5"><a href={BOOKING_URL} onClick={close} className="btn w-full">Schedule a session</a></li>
        </ul>
      </nav>
    </header>
  );
}
