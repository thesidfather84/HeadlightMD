import DiagonalCompare from "./DiagonalCompare";
import before1 from "../assets/headlight-restoration-before-1.webp";
import after1 from "../assets/headlight-restoration-after-1.webp";
import before2 from "../assets/headlight-restoration-before-2.webp";
import after2 from "../assets/headlight-restoration-after-2.webp";
import before3 from "../assets/headlight-restoration-before-3.webp";
import after3 from "../assets/headlight-restoration-after-3.webp";

const PAIRS = [
  {
    before: before1,
    after: after1,
    beforeAlt: "Foggy, yellowed sedan headlight before HeadlightMD restoration",
    afterAlt: "Sedan headlight restored to crystal clarity by HeadlightMD",
  },
  {
    before: before2,
    after: after2,
    beforeAlt: "Oxidized headlight lens before professional headlight restoration",
    afterAlt: "Headlight lens after professional restoration, clear and glare-free",
  },
  {
    before: before3,
    after: after3,
    beforeAlt: "Cloudy headlight reducing night driving visibility before restoration",
    afterAlt: "Restored headlight improving night driving safety after HeadlightMD service",
  },
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
              beforeAlt={pair.beforeAlt}
              afterAlt={pair.afterAlt}
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
