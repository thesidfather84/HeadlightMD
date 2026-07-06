import { YOUTUBE_EMBED_URL } from "../lib/constants";

export default function Video() {
  return (
    <section id="video" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-white uppercase">Watch Us Work</h2>
          <div className="w-16 h-1 bg-blue mx-auto mb-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-sm overflow-hidden shadow-2xl ring-1 ring-white/10">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="HeadlightMD Restoration Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
