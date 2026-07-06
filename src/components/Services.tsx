import { CloudIcon, SunIcon, WindIcon, DropletIcon, ShieldIcon, CarIcon } from "./Icons";

const SERVICES = [
  {
    title: "Foggy Headlight Restoration",
    description: "Clears the hazy film that builds up over years of sun exposure.",
    icon: CloudIcon,
  },
  {
    title: "Yellow Headlight Correction",
    description: "Removes the yellow tint caused by UV breakdown of the lens coating.",
    icon: SunIcon,
  },
  {
    title: "Oxidation Removal",
    description: "Strips away oxidized plastic to reveal a clear lens underneath.",
    icon: WindIcon,
  },
  {
    title: "Wet Sanding & Polishing",
    description: "Graduated-grit sanding and precision polishing for optical clarity.",
    icon: DropletIcon,
  },
  {
    title: "UV Protection Coating",
    description: "A durable sealant applied after restoration to slow future yellowing.",
    icon: ShieldIcon,
  },
  {
    title: "Mobile Service At Your Location",
    description: "We bring the full restoration process to your home or workplace.",
    icon: CarIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto px-6 container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-navy uppercase">Our Services</h2>
          <div className="w-16 h-1 bg-blue mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-cloud border border-gray-200 p-8 hover:border-blue hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-lg"
            >
              <div className="w-14 h-14 rounded-full bg-navy text-blue flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
