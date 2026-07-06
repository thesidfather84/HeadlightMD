import { EyeIcon, ShieldIcon, DollarIcon } from "./Icons";

const REASONS = [
  {
    icon: EyeIcon,
    title: "Better Visibility",
    description:
      "Clear lenses let your headlights project light the way they were designed to, improving night driving safety and visibility in rain or fog.",
  },
  {
    icon: ShieldIcon,
    title: "Safer Driving",
    description:
      "Better light output means faster reaction time to hazards, pedestrians, and road signs — especially in low-visibility conditions.",
  },
  {
    icon: DollarIcon,
    title: "Save Money",
    description:
      "Restoration costs a fraction of replacing a headlight assembly, with results that hold up thanks to a UV-protective coating.",
  },
];

export default function WhyRestore() {
  return (
    <section id="why-restore" className="py-24 bg-blue-light">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-navy uppercase">Why Restore?</h2>
          <div className="w-16 h-1 bg-blue mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Headlight lenses are polycarbonate plastic protected by a thin UV coating. Sun exposure slowly breaks
            that coating down, leaving the hazy, yellowed look common on vehicles just a few years old &mdash;
            and cutting into your visibility exactly when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REASONS.map((reason) => (
            <div key={reason.title} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-navy text-blue flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
