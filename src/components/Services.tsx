import { PlusIcon, CloudIcon, SunIcon, WindIcon, DropletIcon, ShieldIcon, CarIcon } from "./Icons";

const TREATMENTS = [
  { title: "Foggy Headlight Restoration", icon: CloudIcon },
  { title: "Yellow Headlight Correction", icon: SunIcon },
  { title: "Oxidation Removal", icon: WindIcon },
  { title: "Wet Sanding & Polishing", icon: DropletIcon },
  { title: "UV Protection Coating", icon: ShieldIcon },
  { title: "Mobile Service At Your Location", icon: CarIcon },
];

export default function Services() {
  return (
    <section id="treatments" className="py-24 bg-cloud">
      <div className="mx-auto px-6 container">
        <div className="mb-16 text-center flex flex-col items-center">
          <div className="bg-blue-light p-3 rounded-full mb-4">
            <PlusIcon className="w-6 h-6 text-blue" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-navy uppercase">Headlight Treatments</h2>
          <div className="w-16 h-1 bg-blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.title}
              className="bg-white border border-gray-200 p-8 hover:border-blue hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-sm"
            >
              <div className="mb-6 text-blue">
                <treatment.icon />
              </div>
              <h3 className="text-xl font-bold text-navy">{treatment.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
