import { PHONE_PRIMARY, PHONE_PRIMARY_DISPLAY, PHONE_SECONDARY, PHONE_SECONDARY_DISPLAY } from "../lib/constants";

export default function StickyCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2 bg-white/95 backdrop-blur-md border-t border-gray-200 flex gap-2">
      <a
        href={`tel:${PHONE_PRIMARY}`}
        className="flex-1 flex items-center justify-center bg-navy text-white px-2 py-4 text-sm font-extrabold uppercase tracking-wide rounded-sm shadow-lg active:scale-95 transition-transform"
      >
        {PHONE_PRIMARY_DISPLAY}
      </a>
      <a
        href={`tel:${PHONE_SECONDARY}`}
        className="flex-1 flex items-center justify-center bg-blue text-white px-2 py-4 text-sm font-extrabold uppercase tracking-wide rounded-sm shadow-lg active:scale-95 transition-transform"
      >
        {PHONE_SECONDARY_DISPLAY}
      </a>
    </div>
  );
}
