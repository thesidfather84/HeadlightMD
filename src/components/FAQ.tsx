import { ChevronDownIcon } from "./Icons";
import { LEGAL_NAME, YEARS_IN_BUSINESS } from "../lib/constants";

const FAQS = [
  {
    question: "How long has HeadlightMD been in business?",
    answer: `HeadlightMD is owned and operated by ${LEGAL_NAME}, an established company with over ${YEARS_IN_BUSINESS} years of experience restoring headlights.`,
  },
  {
    question: "What does headlight restoration actually involve?",
    answer:
      "Our process removes the oxidized, UV-damaged outer layer of the lens through graduated wet sanding, then compounds and polishes the surface back to optical clarity, and finishes with a UV-protective sealant to help slow future yellowing.",
  },
  {
    question: "Do I need to bring my car to a shop?",
    answer:
      "No. HeadlightMD is a mobile headlight restoration service — we come to you at your home or workplace with everything needed to complete the restoration on site, so you don't need to search for a shop offering headlight restoration near me.",
  },
  {
    question: "How long does a restoration take?",
    answer:
      "Most vehicles are completed in about an hour, right where your car is parked. Timing can vary based on the number of headlights and their condition.",
  },
  {
    question: "How long do the results last?",
    answer:
      "With the UV-protective coating applied, results are designed to hold up well for the long term. Sun exposure, climate, and prior damage all affect how quickly headlights cloud over again — we're happy to advise on care in between visits.",
  },
  {
    question: "Will this work on my vehicle?",
    answer:
      "Our restoration process works on the standard polycarbonate headlight lenses found on the vast majority of cars, trucks, and SUVs on the road today.",
  },
  {
    question: "How do I get a quote or schedule a visit?",
    answer:
      "Call or text us directly, or submit the appointment form below with your vehicle details — Charles will follow up to confirm pricing and scheduling.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-navy uppercase">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-blue mx-auto" />
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group bg-cloud rounded-sm border border-gray-200 open:border-blue/40"
            >
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-bold text-navy">
                {faq.question}
                <ChevronDownIcon className="w-5 h-5 shrink-0 text-blue transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
