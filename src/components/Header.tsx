import { useState } from "react";
import { PlusIcon, MenuIcon, CloseIcon } from "./Icons";
import { PHONE_PRIMARY, PHONE_PRIMARY_DISPLAY } from "../lib/constants";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Treatments" },
  { href: "#results", label: "Results" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur text-navy border-b border-gray-200">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-1.5 font-black tracking-tight text-lg uppercase text-navy">
          <PlusIcon className="w-4 h-4 text-blue" />
          Headlight<span className="text-blue">MD</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="inline-flex items-center bg-navy text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-sm hover:bg-blue transition-colors"
          >
            Call {PHONE_PRIMARY_DISPLAY}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-navy"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="inline-flex items-center justify-center bg-navy text-white px-5 py-3 text-sm font-bold uppercase tracking-wide rounded-sm mt-1"
          >
            Call {PHONE_PRIMARY_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  );
}
