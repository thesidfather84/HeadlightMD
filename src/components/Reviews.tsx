import { StarIcon } from "./Icons";

type Review = {
  quote: string;
  name: string;
  location?: string;
  rating: number;
};

// Add new verified reviews here as they come in — each entry renders as its own card.
const REVIEWS: Review[] = [
  {
    quote:
      "I had HeadlightMD restore the headlights on my 2006 Nissan Sentra, and the results were amazing. The headlights are crystal clear, and the difference at night is incredible. Five stars all the way. I highly recommend HeadlightMD.",
    name: "Sidney I.",
    location: "Slidell, LA",
    rating: 5,
  },
  {
    quote:
      "I had the headlights on my 2006 Mercury Grand Marquis restored by HeadlightMD, and now I can see much better driving at night. Great service, professional work, and I would definitely recommend them.",
    name: "Bob T.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-cloud">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-navy uppercase">Customer Reviews</h2>
          <div className="w-16 h-1 bg-blue mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Verified feedback from real HeadlightMD customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-200 rounded-sm p-8 shadow-sm flex flex-col gap-4"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
              <div className="pt-2 border-t border-gray-100 text-sm font-bold text-navy">
                {review.name}
                {review.location && (
                  <span className="font-medium text-gray-400"> &middot; {review.location}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
