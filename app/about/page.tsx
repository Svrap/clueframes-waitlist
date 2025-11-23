"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section - Redesigned */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm text-gray-300">Beta Available Now</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
            <span className="block mb-2">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                ClueFrames
              </span>
            </span>
            <span className="block text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              The AI Pre-Production Studio
            </span>
            <span className="block text-gray-400 text-2xl sm:text-3xl lg:text-4xl font-normal mt-2">
              for Video Creators
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6 max-w-4xl mx-auto">
            Research. Script. Storyboard.
            <span className="block text-orange-400 mt-2">All in one place.</span>
          </p>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            ClueFrames helps creators and content teams automate the slowest part of production — the pre-production process — so they can focus on storytelling, not spreadsheets.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">70-90%</div>
              <div className="text-gray-400 text-sm">Time Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">All-in-One</div>
              <div className="text-gray-400 text-sm">Unified Platform</div>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">AI-Powered</div>
              <div className="text-gray-400 text-sm">Smart Automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Redesigned */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
              <span className="text-sm text-red-400 font-medium">The Problem</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Pre-Production is
              <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mt-2">
                Breaking Creators
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Video creators spend more time planning than creating. Here's what's broken:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-5xl mb-6">⏱️</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Time-Consuming Research</h3>
                <p className="text-gray-400 leading-relaxed">
                  Hours spent jumping between Reddit, YouTube, articles, and documents. No centralized way to gather and verify information.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-5xl mb-6">📝</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Scriptwriting Bottleneck</h3>
                <p className="text-gray-400 leading-relaxed">
                  Staring at blank pages, struggling to maintain voice consistency, and manually structuring long-form content.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-5xl mb-6">🎨</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Disconnected Planning</h3>
                <p className="text-gray-400 leading-relaxed">
                  Scripts, storyboards, and media planning live in separate tools. No unified workflow from idea to production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Redesigned with Modern Cards */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <span className="text-sm text-orange-400 font-medium">The Solution</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              How ClueFrames
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mt-2">
                Solves This
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Four powerful features that transform your pre-production workflow
            </p>
          </div>

          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 sm:p-12 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="relative flex flex-col lg:flex-row gap-10 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center text-5xl backdrop-blur-sm">
                      🔍
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-4">
                      <span className="text-xs text-orange-400 font-medium">Feature 01</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                      AI Research Engine
                    </h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      ClueFrames pulls insights and verified sources from multiple platforms using advanced AI. No more switching between tabs or losing track of important information.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Multi-source aggregation",
                        "Automatic fact-checking",
                        "Organized research notes",
                        "Export-ready summaries"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-orange-400 text-xs">✓</span>
                          </div>
                          <span className="text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 sm:p-12 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="relative flex flex-col lg:flex-row gap-10 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center text-5xl backdrop-blur-sm">
                      ✍️
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-4">
                      <span className="text-xs text-orange-400 font-medium">Feature 02</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                      Persona-Based Scriptwriter
                    </h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      Generate long-form, voice-consistent scripts that sound like you wrote them. Our AI learns your style and maintains it across entire scripts.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Voice consistency",
                        "Structure optimization",
                        "Natural transitions",
                        "Multiple export formats"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-orange-400 text-xs">✓</span>
                          </div>
                          <span className="text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 sm:p-12 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="relative flex flex-col lg:flex-row gap-10 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center text-5xl backdrop-blur-sm">
                      🎬
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-4">
                      <span className="text-xs text-orange-400 font-medium">Feature 03</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                      Script-to-Storyboard Generator
                    </h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      Instantly visualize your script as a storyboard. See scene-by-scene breakdowns, shot suggestions, and visual planning that makes production smoother.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Automatic scene detection",
                        "Shot type recommendations",
                        "Visual storyboard",
                        "Timing visualization"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-orange-400 text-xs">✓</span>
                          </div>
                          <span className="text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 sm:p-12 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="relative flex flex-col lg:flex-row gap-10 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center text-5xl backdrop-blur-sm">
                      📦
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-4">
                      <span className="text-xs text-orange-400 font-medium">Feature 04</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                      Smart Media Search & Suggestions
                    </h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      Get AI-powered suggestions for stock clips, B-roll, images, and sound effects that match your script and storyboard. No more endless searching.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Context-aware recommendations",
                        "Integrated stock library",
                        "Scene-by-scene suggestions",
                        "Export media lists"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-orange-400 text-xs">✓</span>
                          </div>
                          <span className="text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow - Redesigned */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <span className="text-sm text-orange-400 font-medium">The Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Your Complete
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mt-2">
                Workflow
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From idea to production-ready plan in one platform
            </p>
          </div>

          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-red-500/50 to-orange-500/50"></div>
            
            <div className="space-y-8">
              {[
                { num: 1, title: "Start with Your Topic", desc: "Enter your video idea or topic. ClueFrames begins researching across multiple sources, gathering verified information and insights." },
                { num: 2, title: "Review & Refine Research", desc: "Review organized research notes with citations. Add your own insights, verify facts, and build your knowledge base." },
                { num: 3, title: "Generate Your Script", desc: "AI generates a complete script in your voice, using your research. Edit, refine, and customize to perfection." },
                { num: 4, title: "Visualize with Storyboard", desc: "Instantly convert your script into a visual storyboard with scene breakdowns and shot suggestions." },
                { num: 5, title: "Get Media Suggestions", desc: "Receive AI-powered media recommendations for each scene. Stock clips, images, and B-roll that match your content." },
                { num: 6, title: "Export & Produce", desc: "Export your complete pre-production package: script, storyboard, and media list. Ready for production." }
              ].map((step, idx) => (
                <div key={idx} className="relative flex gap-6 lg:gap-8 items-start group">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-6 lg:p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-[1.02]">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For - Redesigned */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <span className="text-sm text-orange-400 font-medium">For Everyone</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Built for Every
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mt-2">
                Creator
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📺", title: "YouTubers", desc: "Cut research time from hours to minutes. Generate scripts that match your channel's voice. Post consistently without burnout." },
              { icon: "🎥", title: "Filmmakers", desc: "Professional pre-production workflows. Detailed storyboards, shot lists, and production planning in one place." },
              { icon: "📊", title: "Marketing Teams", desc: "Scale video content production. Maintain brand voice across multiple creators. Faster campaign launches." },
              { icon: "🎓", title: "Educators", desc: "Create educational content faster. Research-backed scripts with proper citations. Engaging visual planning." }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section - Redesigned */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-12 sm:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="relative text-center">
              <div className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
                <span className="text-sm text-orange-400 font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
                Why ClueFrames Exists
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Every great video starts with chaos — scattered ideas, research notes, and half-finished scripts. ClueFrames brings structure and speed to that chaos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">70-90%</div>
                  <div className="text-gray-400">Time Reduction</div>
                </div>
                <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">All-in-One</div>
                  <div className="text-gray-400">Unified Workflow</div>
                </div>
                <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">AI-Powered</div>
                  <div className="text-gray-400">Smart Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-12 sm:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mt-2">
                  Pre-Production?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join the beta waitlist and be among the first to experience the future of video pre-production.
              </p>
              <Link
                href="https://waitlist.clueframes.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-600 hover:via-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 active:scale-95 text-lg"
              >
                Join the Beta
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2025 ClueFrames. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
