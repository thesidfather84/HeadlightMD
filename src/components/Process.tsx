import { SearchIcon, DropletIcon, TargetIcon, ShieldIcon, CheckIcon } from "./Icons";

const STEPS = [
  {
    title: "Inspection & Diagnosis",
    description: "We assess oxidation depth, UV damage, and lens condition to plan the right treatment.",
    icon: SearchIcon,
  },
  {
    title: "Wet Sanding",
    description: "Graduated-grit wet sanding removes the damaged outer layer without harming the lens.",
    icon: DropletIcon,
  },
  {
    title: "Compound & Polish",
    description: "Precision polishing restores optical clarity and a like-new finish.",
    icon: TargetIcon,
  },
  {
    title: "UV Protective Coating",
    description: "A durable UV sealant is applied to protect against future yellowing and fading.",
    icon: ShieldIcon,
  },
  {
    title: "Final Quality Check",
    description: "Every headlight is inspected for clarity and finish before we call the job complete.",
    icon: CheckIcon,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-blue-light">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-navy uppercase">Our Treatment Process</h2>
          <div className="w-16 h-1 bg-blue mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A consistent, professional-grade process on every visit &mdash; not a quick wipe-down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <span className="text-xs font-bold text-blue uppercase tracking-widest mb-3">Step {idx + 1}</span>
              <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center shadow-md mb-5">
                <step.icon className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
