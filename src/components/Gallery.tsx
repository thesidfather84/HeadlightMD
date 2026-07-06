import before1 from "../assets/before-1.jpg";
import after1 from "../assets/after-1.jpg";
import before2 from "../assets/before-2.jpg";
import after2 from "../assets/after-2.jpg";
import before3 from "../assets/before-3.jpg";
import after3 from "../assets/after-3.jpg";

const PAIRS = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
];

export default function Gallery() {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-navy uppercase">Real Results</h2>
          <div className="w-16 h-1 bg-blue mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Before &amp; after photos from actual HeadlightMD restorations</p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {PAIRS.map((pair, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 gap-1 overflow-hidden rounded-sm shadow-lg ring-1 ring-black/5"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pair.before}
                  alt={`Before headlight restoration ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-56 md:h-72 object-cover"
                />
                <div className="absolute top-3 left-3 bg-navy/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm">
                  Before
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={pair.after}
                  alt={`After headlight restoration ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-56 md:h-72 object-cover"
                />
                <div className="absolute top-3 right-3 bg-blue text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm shadow-lg">
                  After
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-gray-400 uppercase tracking-widest">
          Results may vary based on headlight condition, age, and prior treatments.
        </p>
      </div>
    </section>
  );
}
