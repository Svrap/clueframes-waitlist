"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 bg-clip-text text-transparent">
              ClueFrames
            </span>
            <span className="text-white"> — The AI Pre-Production Studio for Video Creators</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6">
            Research. Script. Storyboard. All in one place.
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            ClueFrames helps creators and content teams automate the slowest part of production — the pre-production process — so they can focus on storytelling, not spreadsheets.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                Research Engine
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Pulls insights and verified sources using AI.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                Persona-Based Scriptwriter
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Writes long-form, voice-consistent scripts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                Script-to-Storyboard
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Instantly visualizes scenes for planning.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                Smart Media Search
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Suggests relevant stock clips and B-roll.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ClueFrames Exists */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
              Why ClueFrames Exists
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Every great video starts with chaos — scattered ideas, research notes, and half-finished scripts. ClueFrames brings structure and speed to that chaos. It's your pre-production partner.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-white">
            Who It's For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* YouTubers */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-lg font-semibold text-white mb-2">YouTubers</h3>
            </div>

            {/* Filmmakers */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-lg font-semibold text-white mb-2">Filmmakers</h3>
            </div>

            {/* Marketing Teams */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Marketing Teams</h3>
            </div>

            {/* Educators */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold text-white mb-2">Educators</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="https://waitlist.clueframes.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-600 hover:via-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Join the Beta →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8 border-t border-zinc-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2025 ClueFrames. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

