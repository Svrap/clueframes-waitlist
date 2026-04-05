export default function Hero() {
  return (
    <section className="text-center py-20 max-w-3xl mx-auto px-6">
      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Cut Your Pre-Production Time by 70–90%.
      </h1>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
        Creators spend hours researching, scripting, and planning.
        <br />
        ClueFrames does it in minutes — without hype, only practical speed.
      </p>

      {/* Mockup Placeholder */}
      <div className="mb-12">
        <div className="h-64 w-full bg-zinc-900/50 rounded-xl flex items-center justify-center text-gray-500 border border-zinc-800">
          Preview coming soon
        </div>
      </div>

      {/* CTA Button */}
      <div className="mb-4">
        <a
          href="#waitlist"
          className="inline-block py-4 px-8 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-lg"
        >
          Join the Beta
        </a>
      </div>

      {/* Microcopy */}
      <p className="text-sm text-gray-500">
        No spam. One email when beta is ready.
      </p>
    </section>
  );
}
