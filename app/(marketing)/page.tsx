"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import OrbitBadge from "@/components/ui/OrbitBadge";
import GlowOrb from "@/components/ui/GlowOrb";
import "./styles.css";

export default function MarketingPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [channelUrl, setChannelUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      channel_url: channelUrl.trim(),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setEmail("");
        setName("");
        setChannelUrl("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    if (showDemo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showDemo]);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-white pb-20 sm:pb-0">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[120px]" />
      </div>

      {/* Subtle Orbit Rings - Hidden on mobile for better performance */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-0 overflow-hidden w-full">
        <div className="orbit-ring w-[900px] h-[900px] border border-gray-200 opacity-60 max-w-[90vw] max-h-[90vh]" />
        <div className="orbit-ring w-[1100px] h-[1100px] border border-gray-200 opacity-50 max-w-[90vw] max-h-[90vh]" />
        <div className="orbit-ring w-[1300px] h-[1300px] border border-gray-200 opacity-40 max-w-[90vw] max-h-[90vh]" />
      </div>

      {/* Subtle Glow Orbs - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none w-full">
        <GlowOrb
          size="100px"
          color="rgba(249, 115, 22, 0.08)"
          delay={0}
          top="12%"
          left="12%"
        />
        <GlowOrb
          size="90px"
          color="rgba(239, 68, 68, 0.08)"
          delay={1}
          top="22%"
          right="18%"
        />
        <GlowOrb
          size="70px"
          color="rgba(249, 115, 22, 0.08)"
          delay={2}
          bottom="18%"
          left="22%"
        />
        <GlowOrb
          size="80px"
          color="rgba(239, 68, 68, 0.08)"
          delay={3}
          bottom="12%"
          right="12%"
        />
      </div>

      {/* Orbit Badges - All equally spaced (72° apart) at same orbit distance - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none w-full">
        <OrbitBadge
          icon="🔍"
          delay={0}
          orbitDistance="426px"
          orbitDuration="45s"
          initialAngle={0}
        >
          AI Research
        </OrbitBadge>
        <OrbitBadge
          icon="✍️"
          delay={0}
          orbitDistance="426px"
          orbitDuration="55s"
          initialAngle={72}
        >
          Creator Scripts
        </OrbitBadge>
        <OrbitBadge
          icon="🎬"
          delay={0}
          orbitDistance="426px"
          orbitDuration="50s"
          initialAngle={144}
        >
          Storyboards
        </OrbitBadge>
        <OrbitBadge
          icon="📦"
          delay={0}
          orbitDistance="426px"
          orbitDuration="60s"
          initialAngle={216}
        >
          Media Suggestions
        </OrbitBadge>
        <OrbitBadge
          icon="✨"
          delay={0}
          orbitDistance="426px"
          orbitDuration="48s"
          initialAngle={288}
        >
          And more…
        </OrbitBadge>
      </div>

      {/* Central Hero Section */}
      <div className="relative z-30 w-full max-w-2xl mx-auto px-4 sm:px-6 text-center transition-all duration-500 pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16">
        <div className="mb-4 sm:mb-6 animate-in fade-in duration-500">
          <div className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">ClueFrames</div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight animate-in fade-in duration-500 delay-100">
          Your next YouTube video {" "}
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 bg-clip-text text-transparent">
            researched, scripted, and storyboarded
          </span>
          <br />
          <span className="text-gray-900">in 15 minutes.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed animate-in fade-in duration-500 delay-200 px-2">
          ClueFrames learns your exact voice and style. Then handles your entire pre-production Tier-1
          research, script in your tone, storyboard with runtime automatically.
        </p>

        <div className="mb-4 flex justify-center gap-3">
          <Link
            href="/about"
            className="text-sm sm:text-base font-medium text-white bg-gradient-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 transition-all duration-200 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            About
          </Link>
          <button
            type="button"
            onClick={() => setShowDemo(true)}
            className="text-sm sm:text-base font-medium text-white bg-gradient-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 transition-all duration-200 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            View Demo
          </button>
        </div>

        {success ? (
          <div className="relative z-30 w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 p-6 sm:p-8 md:p-10">
            <p className="text-green-600 text-base sm:text-lg font-medium text-center">
              You&apos;re in! We&apos;ll be in touch personally.
            </p>
          </div>
        ) : (
          <div className="max-w-md mx-auto w-full">
            <p className="text-sm sm:text-base text-gray-700 font-medium mb-4 text-center">
              First 50 creators get 30 days free.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 w-full">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                maxLength={100}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-white transition-all duration-200"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                maxLength={254}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-white transition-all duration-200"
              />
              <input
                id="channel_url"
                name="channel_url"
                type="text"
                placeholder="youtube.com/@yourchannel"
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
                required
                autoComplete="url"
                maxLength={2048}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-white transition-all duration-200"
              />

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700 text-center">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={pending}
                className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-400 hover:via-red-400 hover:to-red-500 text-white rounded-lg py-3.5 sm:py-3 font-semibold text-base sm:text-sm shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-orange-500 disabled:hover:via-red-500 disabled:hover:to-red-600 mt-1 touch-manipulation"
              >
                {pending ? "Joining..." : "Join Early Access — Get 30 Days Free"}
              </button>
            </form>
          </div>
        )}

        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 animate-in fade-in duration-500 delay-300 px-4">
          No spam. You&apos;ll hear from us personally.
        </p>
      </div>

      {showDemo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowDemo(false);
            }
          }}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] m-4 flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">🎬 Interactive Demo</h2>
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full p-2 transition-all duration-200"
                aria-label="Close demo"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://app.usehexus.com/embed/7cea5536-8fc5-43ab-9db5-1391a172df9f"
                title="ClueFrames demo"
                frameBorder={0}
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="absolute bottom-0 left-0 right-0 text-center py-4 sm:py-6 md:py-8 text-xs sm:text-sm text-gray-400 px-4">
        <p>ClueFrames © 2026 — Built for creators.</p>
      </footer>
    </main>
  );
}
