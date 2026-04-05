export default function Steps() {
  return (
    <section className="py-20 max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold text-center mb-16">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-5xl font-bold text-blue-500 mb-4">1</div>
          <h3 className="text-xl font-semibold mb-3 text-white">Give your topic</h3>
          <p className="text-gray-300">
            Tell us what you want to create. That's it.
          </p>
        </div>

        <div>
          <div className="text-5xl font-bold text-blue-500 mb-4">2</div>
          <h3 className="text-xl font-semibold mb-3 text-white">
            AI researches + drafts script
          </h3>
          <p className="text-gray-300">
            We pull sources, structure ideas, and write a first draft.
          </p>
        </div>

        <div>
          <div className="text-5xl font-bold text-blue-500 mb-4">3</div>
          <h3 className="text-xl font-semibold mb-3 text-white">
            Storyboard + media pack auto-generated
          </h3>
          <p className="text-gray-300">
            Get visual storyboards and a media pack ready to use.
          </p>
        </div>
      </div>
    </section>
  );
}
