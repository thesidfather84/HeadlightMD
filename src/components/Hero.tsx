import { PlusIcon } from "./Icons";
import { PHONE_PRIMARY, PHONE_PRIMARY_DISPLAY, PHONE_SECONDARY, PHONE_SECONDARY_DISPLAY } from "../lib/constants";
import ownerPhoto from "../assets/owner-photo.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative bg-gradient-to-b from-blue-light to-white overflow-hidden py-20 lg:py-28">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl animate-fade-in">
          <div className="mb-4 flex items-center gap-2 text-blue font-bold tracking-widest uppercase text-sm">
            <PlusIcon className="w-4 h-4" />
            <span className="tracking-[0.2em]">Mobile Headlight Restoration Specialist</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-navy">
            Your Headlight <span className="text-blue">Doctor.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed font-medium">
            Restore Your Vision. Restore Your Safety.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
            Professional mobile headlight restoration that comes to you. We treat cloudy, yellowed, and oxidized
            headlights with a long-lasting, professional-grade process &mdash; right in your driveway.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="inline-flex items-center justify-center bg-navy text-white px-8 py-4 text-lg font-bold hover:bg-blue transition-colors uppercase tracking-wide rounded-sm shadow-lg shadow-navy/10"
            >
              Call Now
            </a>
            <a
              href={`sms:${PHONE_PRIMARY}`}
              className="inline-flex items-center justify-center border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg font-bold transition-colors uppercase tracking-wide rounded-sm"
            >
              Text Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-500 pt-6">
            <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-blue transition-colors">
              {PHONE_PRIMARY_DISPLAY}
            </a>
            <span className="hidden sm:inline">&middot;</span>
            <a href={`tel:${PHONE_SECONDARY}`} className="hover:text-blue transition-colors">
              {PHONE_SECONDARY_DISPLAY}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-10 text-sm text-gray-500 border-t border-gray-200 mt-10">
            <span>Mobile &mdash; we come to you</span>
            <span>Locally owned</span>
            <span>Fast, same-day service</span>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 bg-blue/10 rounded-lg blur-2xl pointer-events-none" />
          <img
            src={ownerPhoto}
            alt="Charles, the HeadlightMD headlight restoration technician"
            className="relative w-full max-w-md ml-auto rounded-sm shadow-2xl object-cover ring-1 ring-black/5"
          />
        </div>
      </div>
    </section>
  );
}
