"use client";

import { useState, useRef, useEffect } from "react";
import OrbitBadge from "@/components/ui/OrbitBadge";
import GlowOrb from "@/components/ui/GlowOrb";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import "./styles.css";

export default function MarketingPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [channelUrl, setChannelUrl] = useState("");
  const [category, setCategory] = useState("");
  const [biggestPain, setBiggestPain] = useState("");
  const [source, setSource] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    "Research takes me longer than recording. Anything that cuts that down is a blessing.",
    "Half my time goes into finding the right info… not making the actual video.",
    "Scriptwriting drains me. If this saves even 30 minutes, I'm in.",
    "I've got ideas, but organizing them into a video plan takes forever.",
    "Pre-production is my bottleneck. I'd rather spend that time filming.",
    "If this tool speeds up planning, I'll finally be able to post consistently."
  ];

  const handleEmailFocus = () => {
    setIsExpanded(true);
  };

  // Enhanced Validation functions
  const validateEmail = (email: string): boolean => {
    if (!email || email.trim() === "") {
      return false;
    }
    const trimmedEmail = email.trim().toLowerCase();
    
    // Basic length check
    if (trimmedEmail.length < 3 || trimmedEmail.length > 254) {
      return false;
    }
    
    // RFC 5322 compliant email regex (simplified but robust)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(trimmedEmail)) {
      return false;
    }
    
    // Check for common invalid patterns
    if (trimmedEmail.startsWith('.') || trimmedEmail.startsWith('@') || trimmedEmail.endsWith('@')) {
      return false;
    }
    
    // Check for consecutive dots
    if (trimmedEmail.includes('..')) {
      return false;
    }
    
    // Check domain has at least one dot after @
    const parts = trimmedEmail.split('@');
    if (parts.length !== 2 || !parts[1].includes('.')) {
      return false;
    }
    
    // Check domain extension
    const domainParts = parts[1].split('.');
    if (domainParts.length < 2 || domainParts[domainParts.length - 1].length < 2) {
      return false;
    }
    
    return true;
  };

  const validateURL = (url: string): boolean => {
    if (!url || url.trim() === "") {
      return true; // URL is optional, empty is valid
    }
    const trimmedUrl = url.trim();
    
    // Length check
    if (trimmedUrl.length > 2048) {
      return false;
    }
    
    try {
      const urlObj = new URL(trimmedUrl);
      // Only allow http and https protocols
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        return false;
      }
      // Check for valid domain
      if (!urlObj.hostname || urlObj.hostname.length === 0) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  };

  const validateName = (name: string): boolean => {
    if (!name || name.trim() === "") {
      return true; // Name is optional, empty is valid
    }
    const trimmedName = name.trim();
    
    // Length check
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return false;
    }
    
    // Name should only contain letters, spaces, hyphens, apostrophes, and periods
    const nameRegex = /^[a-zA-Z\s'.-]{2,100}$/;
    if (!nameRegex.test(trimmedName)) {
      return false;
    }
    
    // No consecutive special characters
    if (trimmedName.includes('  ') || trimmedName.includes('--') || trimmedName.includes("''")) {
      return false;
    }
    
    return true;
  };

  const sanitizeInput = (input: string, maxLength: number = 1000): string => {
    if (!input) return "";
    return input.trim().slice(0, maxLength);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setPending(false);
      return;
    }

    // Validate name if provided
    if (name && name.trim() !== "" && !validateName(name)) {
      setError("Please enter a valid name (2-100 characters, letters and spaces only).");
      setPending(false);
      return;
    }

    // Validate channel URL if provided
    if (channelUrl && channelUrl.trim() !== "" && !validateURL(channelUrl)) {
      setError("Please enter a valid channel URL (e.g., https://youtube.com/@channelName).");
      setPending(false);
      return;
    }

    // Validate biggest pain point length if provided
    if (biggestPain && biggestPain.trim().length > 500) {
      setError("Pain point description should be less than 500 characters.");
      setPending(false);
      return;
    }

    // Validate source length if provided
    if (source && source.trim().length > 100) {
      setError("Source should be less than 100 characters.");
      setPending(false);
      return;
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeInput(name, 100);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedChannelUrl = sanitizeInput(channelUrl, 2048);
    const sanitizedCategory = category || null;
    const sanitizedBiggestPain = sanitizeInput(biggestPain, 500);
    const sanitizedSource = sanitizeInput(source, 100) || "landing-page";

    // Additional email validation - check for disposable emails (basic check)
    const disposableEmailDomains = ['tempmail.com', 'throwaway.email', 'mailinator.com'];
    const emailDomain = sanitizedEmail.split('@')[1]?.toLowerCase();
    if (emailDomain && disposableEmailDomains.some(domain => emailDomain.includes(domain))) {
      setError("Please use a valid email address.");
      setPending(false);
      return;
    }

    const payload = {
      name: sanitizedName || null,
      email: sanitizedEmail,
      channel_url: sanitizedChannelUrl || null,
      category: sanitizedCategory,
      biggest_pain: sanitizedBiggestPain || null,
      source: sanitizedSource,
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
        setCategory("");
        setBiggestPain("");
        setSource("");
        setIsExpanded(false);
    } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setPending(false);
    }
  }

  // Calculate dot positions for smooth sliding animation
  // gap-2 = 0.5rem = 8px, dot size = 1.5 = 6px, indicator width = 32px (w-8)
  // Position: index * (dotWidth + gap) + (dotSize - indicatorWidth) / 2
  const getIndicatorPosition = (index: number) => {
    const dotSize = 6; // 1.5 * 4 = 6px
    const gap = 8; // 0.5rem = 8px (gap-2)
    const indicatorWidth = 32; // w-8 = 32px
    return index * (dotSize + gap) + (dotSize - indicatorWidth) / 2;
  };

  // Handle click outside form card to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isExpanded && formCardRef.current && !formCardRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        // Reset form state when closing
        setEmail("");
        setName("");
        setCategory("");
        setBiggestPain("");
        setSource("");
        setError(null);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  // Rotate testimonials sequentially when form is expanded
  useEffect(() => {
    if (!isExpanded) return;

    const interval = setInterval(() => {
      // Start fade-out animation
      setIsTransitioning(true);
      
      // After fade-out completes, change to next testimonial and fade-in
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 400); // Half of fade-out duration for smooth transition
    }, 6000); // Change every 6 seconds (5.6s display + 0.4s transition)

    return () => clearInterval(interval);
  }, [isExpanded, testimonials.length]);

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
      {/* 5 badges = 360° / 5 = 72° spacing between each */}
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
      <div className={`relative z-30 w-full max-w-2xl mx-auto px-4 sm:px-6 text-center transition-all duration-500 ${
        isExpanded 
          ? 'pt-8 pb-12 sm:pt-12 sm:pb-16' 
          : 'pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16'
      }`}>
        {/* Logo placeholder - Hide when form expanded */}
        {!isExpanded && (
          <div className="mb-4 sm:mb-6 animate-in fade-in duration-500">
            <div className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">ClueFrames</div>
          </div>
        )}

        {/* Main Heading - Hide when form expanded */}
        {!isExpanded && (
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight animate-in fade-in duration-500 delay-100">
            Turn Ideas Into{" "}<br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 bg-clip-text text-transparent">
              Scripts & Storyboards
            </span>
            <br />
            <span className="text-gray-900">In Minutes, Not Days.</span>
        </h1>
        )}

        {/* Sub-headline - Hide when form expanded */}
        {!isExpanded && (
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed animate-in fade-in duration-500 delay-200 px-2">
            Creators spend hours researching and scripting videos.{" "}
            <br className="hidden sm:block" />
            ClueFrames cuts pre-production time by 70–90% with practical AI workflows.
          </p>
        )}

        {/* Waitlist Form - Two Column Split Card Layout */}
        {success ? (
          <div className="relative z-30 w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 p-6 sm:p-8 md:p-10">
            <p className="text-green-600 text-base sm:text-lg font-medium text-center">
              You're in! 🚀 We'll email you soon.
            </p>
          </div>
        ) : !isExpanded ? (
          /* Email Input - Initial State - Clean Minimal */
          <div className="max-w-md mx-auto w-full">
            <input
              type="email"
              placeholder="Enter your email -> Join the beta list"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleEmailFocus}
              required
              autoComplete="email"
              maxLength={254}
              pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*"
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg border border-gray-300 bg-white text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-sm transition-all duration-200"
            />
          </div>
        ) : (
          /* Two Column Split Card - Clean Minimal Design */
          <div ref={formCardRef} className="relative z-30 w-full max-w-7xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200 flex flex-col md:flex-row">
            {/* Left Side - Gradient Panel with Rotating Testimonials (50%) */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-orange-500 via-red-500 to-red-600 flex flex-col justify-center text-white p-6 sm:p-8 md:p-12 lg:p-16 relative min-h-[300px] sm:min-h-[400px] md:min-h-0 overflow-hidden">
              {/* Content - Vertically Centered */}
              <div className="max-w-lg mx-auto md:mx-0 md:max-w-md relative h-full flex items-center">
                {/* Rotating Testimonial */}
                <div className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[280px]">
                  <div
                    key={currentTestimonial}
                    className={isTransitioning ? "testimonial-exit" : "testimonial-enter"}
                  >
                    <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white/90 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-white mb-6 sm:mb-8">
                      "{testimonials[currentTestimonial]}"
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="relative flex gap-2">
                        {/* Background dots (static) */}
                        {testimonials.map((_, index) => (
                          <div
                            key={index}
                            className="h-1.5 w-1.5 rounded-full bg-white/50"
                          />
                        ))}
                        
                        {/* Sliding white indicator */}
                        <div
                          className="absolute h-1.5 w-8 bg-white shadow-sm rounded-full transition-all duration-700 ease-in-out"
                          style={{
                            transform: `translateX(${getIndicatorPosition(currentTestimonial)}px)`,
                            left: 0,
                            top: 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Divider - Desktop Only */}
            <div className="hidden md:block w-px bg-gray-200"></div>

            {/* Right Side - Clean White Form Panel (50%) */}
            <div className="w-full md:w-1/2 bg-white text-gray-900 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-0">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 max-w-lg mx-auto md:mx-0 md:max-w-md w-full">
                {/* Email Field */}
                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    maxLength={254}
                    pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-white transition-all duration-200"
                  />
                </div>

                {/* Name Field */}
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    maxLength={100}
                    pattern="[a-zA-Z\s'.-]{2,100}"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-white transition-all duration-200"
                  />
                </div>

                {/* Content Category Dropdown */}
                <div>
                  <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-gray-900 bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Content Category (optional)</option>
                    <option value="Tech">Tech</option>
                    <option value="Education">Education</option>
                    <option value="Commentary">Commentary</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Finance">Finance</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Biggest Pain Point Textarea */}
                <div>
                  <textarea
                    id="biggestPain"
                    name="biggestPain"
                    rows={2}
                    value={biggestPain}
                    onChange={(e) => setBiggestPain(e.target.value)}
                    maxLength={500}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none resize-none bg-white transition-all duration-200"
                    placeholder="Biggest Pain Point (optional)"
                  />
                </div>

                {/* Source Field */}
                <div>
                  <input
                    id="source"
                    name="source"
                    type="text"
                    placeholder="How did you hear about us? (optional)"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    maxLength={100}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-white transition-all duration-200"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700 text-center">{error}</p>
                  </div>
                )}

                {/* CTA Button - Creator-Friendly Gradient */}
                <button
                  type="submit"
                  disabled={pending}
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-400 hover:via-red-400 hover:to-red-500 text-white rounded-lg py-3.5 sm:py-3 font-semibold text-base sm:text-sm shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-orange-500 disabled:hover:via-red-500 disabled:hover:to-red-600 mt-1 touch-manipulation"
                >
                  {pending ? "Joining..." : "Join the Beta"}
                </button>

                {/* Login Link */}
                
          </form>
            </div>
          </div>
        )}

          {/* Microcopy - Hide when form expanded */}
          {!isExpanded && (
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 animate-in fade-in duration-500 delay-300 px-4">
              No spam. One email when beta is ready.
            </p>
          )}
      </div>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 text-center py-4 sm:py-6 md:py-8 text-xs sm:text-sm text-gray-400 px-4">
          <p>ClueFrames © 2025 — Built for creators.</p>
        </footer>
    </main>
  );
}
