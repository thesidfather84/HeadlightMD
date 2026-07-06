type DiagonalCompareProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

const AFTER_CLIP = "polygon(42% 0%, 100% 0%, 100% 100%, 58% 100%)";
const DIVIDER_CLIP = "polygon(41.3% 0%, 42.7% 0%, 58.7% 100%, 57.3% 100%)";

export default function DiagonalCompare({ before, after, beforeAlt, afterAlt, className = "" }: DiagonalCompareProps) {
  return (
    <div className={`relative w-full rounded-lg overflow-hidden shadow-2xl ${className}`}>
      <img src={before} alt={beforeAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: AFTER_CLIP }}>
        <img src={after} alt={afterAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-white" style={{ clipPath: DIVIDER_CLIP }} />

      <div className="absolute bottom-4 left-4 bg-navy text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-sm">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-blue text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-sm">
        After
      </div>
    </div>
  );
}
