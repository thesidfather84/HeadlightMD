import { ShieldCheckIcon, SunIcon, ClockIcon, CheckCircleIcon, StarIcon, ArrowRightIcon, PlusIcon } from "./Icons";
import { PHONE_PRIMARY, PHONE_PRIMARY_DISPLAY } from "../lib/constants";
import ownerPhoto from "../assets/owner-photo.jpg";

const TRUST_ICONS = [
  { icon: ShieldCheckIcon, label: "Improves Visibility & Night Safety" },
  { icon: SunIcon, label: "Removes Oxidation & Yellowing" },
  { icon: ClockIcon, label: "Save Time & Money vs. Replacement" },
  { icon: CheckCircleIcon, label: "Professional Results" },
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 leading-[1.05]">
            Restore Clarity.
            <br />
            <span className="text-blue">Drive Safer.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            We bring back the clarity to your headlights so you can see better and drive with confidence.
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

        <div className="hidden lg:block relative">
          <div className="absolute top-4 right-4 z-20 flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border-2 border-blue bg-ink/80 backdrop-blur flex items-center justify-center text-blue">
              <PlusIcon className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-center leading-snug w-24">
              Your Headlight Doctor
            </span>
          </div>

          <div className="absolute -inset-6 bg-blue/10 rounded-lg blur-3xl pointer-events-none" />
          <img
            src={ownerPhoto}
            alt="Charles, the HeadlightMD headlight restoration technician"
            className="relative w-full rounded-lg shadow-2xl object-cover ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}
