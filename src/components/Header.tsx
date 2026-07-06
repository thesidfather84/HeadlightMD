import { useState } from "react";
import { MenuIcon, CloseIcon, CalendarIcon } from "./Icons";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#top">
          <Logo variant="dark" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={
                idx === 0
                  ? "text-sm font-bold text-blue border-b-2 border-blue pb-1"
                  : "text-sm font-bold text-navy/70 hover:text-blue transition-colors"
              }
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-blue text-white px-5 py-2.5 text-sm font-bold rounded-md hover:bg-navy transition-colors"
        >
          BOOK APPOINTMENT
          <CalendarIcon className="w-4 h-4" />
        </a>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-navy"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-bold text-navy/80 hover:text-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-blue text-white px-5 py-3 text-sm font-bold rounded-md mt-1"
          >
            BOOK APPOINTMENT
            <CalendarIcon className="w-4 h-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
