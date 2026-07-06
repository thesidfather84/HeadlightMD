import DiagonalCompare from "./DiagonalCompare";
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PAIRS.map((pair, idx) => (
            <DiagonalCompare
              key={idx}
              before={pair.before}
              after={pair.after}
              beforeAlt={`Before headlight restoration ${idx + 1}`}
              afterAlt={`After headlight restoration ${idx + 1}`}
              className="h-64"
            />
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-gray-400 uppercase tracking-widest">
          Results may vary based on headlight condition, age, and prior treatments.
        </p>
      </div>
    </section>
  );
}
