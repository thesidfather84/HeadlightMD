import { useState } from "react";
import type { FormEvent } from "react";
import { CheckIcon, CalendarCheckIcon } from "./Icons";
import { EMAIL, PHONE_PRIMARY, PHONE_PRIMARY_DISPLAY, WEB3FORMS_ACCESS_KEY } from "../lib/constants";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New Appointment Request — HeadlightMD");
    data.append("from_name", "HeadlightMD Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-blue-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-navy uppercase">
            Book Your Appointment
          </h2>
          <div className="w-16 h-1 bg-blue mx-auto" />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
          <div className="bg-navy text-white py-4 px-6 flex justify-between items-center border-b-4 border-blue">
            <div className="font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <CalendarCheckIcon className="w-4 h-4" /> Appointment Request
            </div>
          </div>

          <div className="p-8 md:p-10">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Appointment Request Sent!</h3>
                <p className="text-gray-500">Charles will reach out to you shortly at the number you provided.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-gray-400 underline hover:text-gray-600"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-cloud border border-gray-200 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full bg-cloud border border-gray-200 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-shadow"
                      placeholder="(228) 555-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block" htmlFor="vehicle">
                    Vehicle Make &amp; Model
                  </label>
                  <input
                    id="vehicle"
                    name="vehicle"
                    type="text"
                    required
                    className="w-full bg-cloud border border-gray-200 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-shadow"
                    placeholder="e.g. 2018 Honda Accord"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block" htmlFor="message">
                    Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-cloud border border-gray-200 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-shadow resize-none"
                    placeholder="Describe the condition of your headlights..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong &mdash; please try again or call/text directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-navy text-white py-4 font-black uppercase tracking-wide hover:bg-blue transition-colors disabled:opacity-60 disabled:cursor-not-allowed rounded-sm text-lg"
                >
                  {status === "sending" ? "Sending..." : "Book Appointment"}
                </button>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={`tel:${PHONE_PRIMARY}`}
                      className="flex-1 inline-flex items-center justify-center bg-white border-2 border-navy text-navy px-6 py-3 font-bold hover:bg-cloud transition-colors uppercase tracking-wide rounded-sm text-sm"
                    >
                      Call {PHONE_PRIMARY_DISPLAY}
                    </a>
                    <a
                      href={`sms:${PHONE_PRIMARY}`}
                      className="flex-1 inline-flex items-center justify-center bg-white border-2 border-navy text-navy px-6 py-3 font-bold hover:bg-cloud transition-colors uppercase tracking-wide rounded-sm text-sm"
                    >
                      Text {PHONE_PRIMARY_DISPLAY}
                    </a>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Or email{" "}
                    <a href={`mailto:${EMAIL}`} className="underline hover:text-gray-600">
                      {EMAIL}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
