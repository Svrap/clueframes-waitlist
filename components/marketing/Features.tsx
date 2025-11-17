export default function Features() {
  return (
    <section className="py-20 bg-zinc-900/30">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What ClueFrames Offers
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-xl p-6">
            <div className="text-blue-500 text-2xl mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Multi-source AI research
            </h3>
            <p className="text-gray-300">
              Reddit, YouTube, articles, and more in one click
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <div className="text-blue-500 text-2xl mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Creator-style script generator
            </h3>
            <p className="text-gray-300">Not robotic. Actually usable.</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <div className="text-blue-500 text-2xl mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Automatic storyboard generation
            </h3>
            <p className="text-gray-300">Visual planning that makes sense</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <div className="text-blue-500 text-2xl mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Scene-by-scene media pack suggestions
            </h3>
            <p className="text-gray-300">
              Stock images, B-roll ideas, sound effects
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <div className="text-blue-500 text-2xl mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Notion-like workspace for creators
            </h3>
            <p className="text-gray-300">Keep everything in one place</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <div className="text-blue-500 text-2xl mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Built from real creator pain
            </h3>
            <p className="text-gray-300">No overpromises. Only speed + structure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
