import { CheckIcon, DollarIcon, ShieldIcon, CarIcon, ClockIcon } from "./Icons";
import { EMAIL, LEGAL_NAME } from "../lib/constants";
import kitBox from "../assets/diy-headlight-restoration-kit-box.webp";

const BENEFITS = [
  "Improves night driving visibility",
  "Enhances vehicle appearance",
  "Helps extend headlight life",
  "Saves money vs. replacement",
  "Professional results at home",
];

const KIT_INCLUDES = [
  "Cleaning Solution (Step 1)",
  "Restoration Polish (Step 2)",
  "UV Protective Sealant (Step 3)",
  "Sanding Discs — 4 Grits",
  "Foam Applicator Pad",
  "Masking Tape",
  "Microfiber Cloth",
  "Polishing Cloth",
  "Easy-to-Follow Instructions",
];

const TRUST_ROW = [
  { icon: DollarIcon, title: "Cost Effective", description: "Restores instead of replacing." },
  { icon: ShieldIcon, title: "Protects", description: "UV sealant helps protect against future damage." },
  { icon: CheckIcon, title: "Easy DIY", description: "No special tools. No experience needed." },
  { icon: CarIcon, title: "Works on All Vehicles", description: "Cars, trucks, SUVs, motorcycles & more." },
];

export default function DIYKit() {
  return (
    <section id="diy-kit" className="py-24 bg-ink text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="inline-block bg-amber-400 text-ink px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-sm mb-5">
              Coming Soon
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-4">
              DIY Headlight <span className="text-blue">Restoration Kit</span>
            </h2>
            <p className="text-lg font-semibold text-gray-300 mb-6">Clearer Lights. Safer Driving.</p>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
              Restore cloudy, yellowed, and hazy headlights to like-new clarity in less than 30 minutes &mdash;
              no power tools, no experience needed. The same {LEGAL_NAME} process behind HeadlightMD's mobile
              service, packaged for home use.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  <span className="text-sm text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${EMAIL}?subject=Notify%20me%20about%20the%20DIY%20Headlight%20Restoration%20Kit`}
              className="inline-flex items-center gap-2 bg-blue text-white px-7 py-4 text-base font-bold rounded-md hover:bg-navy hover:ring-2 hover:ring-blue transition uppercase tracking-wide"
            >
              Notify Me When It Launches
            </a>
          </div>

          <div>
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-blue/10 rounded-lg blur-2xl pointer-events-none" />
              <img
                src={kitBox}
                alt="DIY Headlight Restoration Kit box, coming soon from HeadlightMD"
                className="relative w-full max-w-sm mx-auto rounded-lg shadow-2xl ring-1 ring-white/10"
                loading="lazy"
              />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-center gap-2 mb-5 text-blue font-bold uppercase tracking-widest text-xs">
                <ClockIcon className="w-4 h-4" />
                30 Minutes or Less
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Kit Includes</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                {KIT_INCLUDES.map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-blue mt-1">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16 pt-10 border-t border-white/10">
          {TRUST_ROW.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-blue">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-white leading-snug">{item.title}</div>
                <div className="text-[11px] text-gray-400 leading-snug mt-0.5">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
