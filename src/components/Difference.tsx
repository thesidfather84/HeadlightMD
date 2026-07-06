import { CheckIcon, ShieldIcon, ThumbsUpIcon, ClockIcon, CarIcon, CheckCircleIcon } from "./Icons";
import DiagonalCompare from "./DiagonalCompare";
import before1 from "../assets/headlight-restoration-before-1.webp";
import after1 from "../assets/headlight-restoration-after-1.webp";
import { LEGAL_NAME, YEARS_IN_BUSINESS } from "../lib/constants";

const DIFFERENCE_POINTS = [
  "Removes Oxidation & Yellowing",
  "Improves Nighttime Visibility",
  "Restores Like-New Clarity",
  "Professional Results You Can See",
  "Safe for All Headlight Lenses",
];

const TRUST_BAR = [
  { icon: ShieldIcon, title: "Safe & Effective", description: "Won't damage headlight lenses" },
  { icon: ThumbsUpIcon, title: "Professional Results", description: "Achieve like-new clarity at a fraction of the cost" },
  { icon: ClockIcon, title: "Save Time & Money", description: "No expensive shop visits or headlight replacements" },
  { icon: CarIcon, title: "Drive Safer", description: "Better visibility means safer driving" },
  { icon: CheckCircleIcon, title: "Satisfaction Guaranteed", description: "Love the results or we'll make it right" },
];

export default function Difference() {
  return (
    <>
      <section className="py-20 bg-cloud">
        <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto px-6 mb-14">
          HeadlightMD is proudly owned and operated by {LEGAL_NAME}, serving customers with professional
          headlight restoration for over {YEARS_IN_BUSINESS} years.
        </p>

        <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1fr_0.85fr] gap-10 items-start">
          <div>
            <h2 className="text-blue font-extrabold uppercase tracking-wide text-sm mb-4">See The Difference</h2>
            <DiagonalCompare
              before={before1}
              after={after1}
              beforeAlt="Cloudy, oxidized headlight lens before HeadlightMD restoration"
              afterAlt="Crystal clear restored headlight lens after HeadlightMD mobile service"
              className="h-72 sm:h-80"
            />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-6">
              <span className="text-blue">The HeadlightMD</span> <span className="text-navy">Difference</span>
            </h2>
            <ul className="flex flex-col gap-4">
              {DIFFERENCE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  <span className="font-semibold text-navy">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy text-white rounded-lg p-7">
            <h3 className="text-lg font-extrabold uppercase tracking-tight mb-3">
              Why Restore<span className="text-blue">?</span>
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Over time, headlights become hazy, yellowed, and dull &mdash; reducing your visibility and
              compromising your safety.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-start gap-2">
                <div className="w-9 h-9 rounded-full border-2 border-blue flex items-center justify-center text-blue">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase leading-snug">Better Visibility</span>
                <span className="text-[11px] text-gray-400 leading-snug">See clearly at night and in bad weather</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-9 h-9 rounded-full border-2 border-blue flex items-center justify-center text-blue">
                  <ShieldIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase leading-snug">Safer Driving</span>
                <span className="text-[11px] text-gray-400 leading-snug">Improve reaction time and road awareness</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-9 h-9 rounded-full border-2 border-blue flex items-center justify-center text-blue">
                  <span className="font-bold text-sm">$</span>
                </div>
                <span className="text-xs font-bold uppercase leading-snug">Save Money</span>
                <span className="text-[11px] text-gray-400 leading-snug">Restoration costs less than replacement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-navy py-8">
        <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {TRUST_BAR.map((item) => (
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
    </>
  );
}
