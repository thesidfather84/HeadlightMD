import { PlusIcon } from "./Icons";
import { PHONE_PRIMARY, PHONE_PRIMARY_DISPLAY } from "../lib/constants";
import ownerPhoto from "../assets/owner-photo.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue/5 rounded-sm blur-2xl pointer-events-none" />
            <img
              src={ownerPhoto}
              alt="Charles Bruns, owner of HeadlightMD"
              className="relative w-full max-w-md mx-auto lg:mx-0 rounded-sm shadow-xl object-cover ring-1 ring-black/5"
            />
            <div className="absolute bottom-4 left-4 bg-navy text-white px-4 py-2 text-sm font-black uppercase tracking-wider rounded-sm shadow-lg">
              The Headlight Doctor
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 text-blue font-bold tracking-wider uppercase text-sm mb-4">
                <PlusIcon className="w-4 h-4" />
                Meet Your Headlight Doctor
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-navy">
                Charles &mdash;<br />
                <span className="text-blue">HeadlightMD</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              With years of hands-on automotive restoration experience, Charles founded Special Delivery
              Headlight Restoration to bring professional-grade results directly to your driveway.
            </p>
            <p className="text-gray-500 leading-relaxed">
              No shop visits. No waiting. He shows up with the tools, the process, and the expertise to take
              your cloudy, yellowed headlights back to crystal clarity &mdash; right where your vehicle is parked.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="inline-flex items-center justify-center bg-navy text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-blue transition-colors rounded-sm"
              >
                Call Charles: {PHONE_PRIMARY_DISPLAY}
              </a>
              <a
                href={`sms:${PHONE_PRIMARY}`}
                className="inline-flex items-center justify-center border-2 border-navy text-navy px-8 py-4 font-bold uppercase tracking-wide hover:bg-navy hover:text-white transition-colors rounded-sm"
              >
                Send a Text
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
