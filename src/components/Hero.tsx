import { ShieldCheckIcon, SunIcon, ClockIcon, CheckCircleIcon, StarIcon, ArrowRightIcon, PlusIcon } from "./Icons";
import { PHONE_PRIMARY, PHONE_PRIMARY_DISPLAY } from "../lib/constants";

const heroPhoto = "/images/mobile-headlight-restoration-hero.webp";

const TRUST_ICONS = [
  { icon: ShieldCheckIcon, label: "Improves Visibility & Night Safety" },
  { icon: SunIcon, label: "Removes Oxidation & Yellowing" },
  { icon: ClockIcon, label: "Save Time & Money vs. Replacement" },
  { icon: CheckCircleIcon, label: "Professional Results" },
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink text-white overflow-hidden">
      {/* Photo constrained to the right side so the crop stays proportional instead of stretching across the full (much wider) section */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <img
          src={heroPhoto}
          alt="HeadlightMD mobile headlight restoration technician standing beside a vehicle with a professionally restored, glowing headlight"
          className="absolute inset-0 w-full h-full object-cover object-[70%_top]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 via-20% to-transparent" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      {/* Mobile: photo isn't split into a side column, so a stronger uniform scrim keeps text legible regardless of crop */}
      <div className="absolute inset-0 bg-ink/55 lg:hidden" />
      <div className="absolute top-1/3 right-[20%] w-[380px] h-[380px] bg-blue/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="hidden lg:flex absolute top-8 right-8 z-20 flex-col items-center gap-1.5">
        <div className="w-11 h-11 rounded-full border-2 border-blue bg-ink/70 backdrop-blur flex items-center justify-center text-blue">
          <PlusIcon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight w-20">
          Your Headlight Doctor
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16 lg:py-24">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 leading-[1.05]">
            Restore Clarity.
            <br />
            <span className="text-blue">Drive Safer.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            HeadlightMD's mobile headlight restoration service restores cloudy, oxidized headlights back to
            crystal clarity so you can see better and drive with confidence at night.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 max-w-xl">
            {TRUST_ICONS.map((item) => (
              <div key={item.label} className="flex flex-col items-start gap-2">
                <div className="w-11 h-11 rounded-full border-2 border-blue flex items-center justify-center text-blue">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-gray-300 leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5 mb-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue text-white px-7 py-4 text-base font-bold rounded-md hover:bg-blue-700 hover:brightness-110 transition uppercase tracking-wide shadow-lg shadow-blue/20"
            >
              Book Appointment
              <ArrowRightIcon />
            </a>
            <div className="flex flex-col gap-1">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Trusted by Local Drivers
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={`tel:${PHONE_PRIMARY}`} className="font-semibold text-gray-300 hover:text-blue transition-colors">
              Call Now: {PHONE_PRIMARY_DISPLAY}
            </a>
            <a href={`sms:${PHONE_PRIMARY}`} className="font-semibold text-gray-300 hover:text-blue transition-colors">
              Text Now: {PHONE_PRIMARY_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
