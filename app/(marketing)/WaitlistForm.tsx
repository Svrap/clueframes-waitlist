"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function WaitlistForm() {
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") || null,
      email: formData.get("email"),
      channel_url: formData.get("channelUrl") || null,
      category: formData.get("category") || null,
      biggest_pain: formData.get("biggestPain") || null,
      source: formData.get("source") || null,
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
        form.reset();
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (success) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-green-900/30 border border-green-700 rounded-xl p-8 text-center">
          <p className="text-green-400 text-xl mb-2">You're in! 🚀</p>
          <p className="text-gray-300">
            We'll email you soon with access details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section id="waitlist" className="py-20 max-w-md mx-auto px-6">
      <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-900 rounded-xl p-8">
        {error && (
          <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-red-400 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name (optional)
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Akhil"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email <span className="text-red-400">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="creator@gmail.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="channelUrl" className="block text-sm font-medium text-gray-300">
            Channel URL (optional)
          </label>
          <Input
            id="channelUrl"
            name="channelUrl"
            type="url"
            placeholder="https://youtube.com/@channelName"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-300">
            Content Category (optional)
          </label>
          <select
            id="category"
            name="category"
            className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Category (optional)</option>
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

        <div className="space-y-2">
          <label htmlFor="biggestPain" className="block text-sm font-medium text-gray-300">
            Biggest Pain Point (optional)
          </label>
          <textarea
            id="biggestPain"
            name="biggestPain"
            rows={3}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="What's your biggest challenge in video creation?"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="source" className="block text-sm font-medium text-gray-300">
            How did you hear about us? (optional)
          </label>
          <Input
            id="source"
            name="source"
            type="text"
            placeholder="Reddit, YouTube, Friend, etc."
          />
        </div>

        <div className="pt-2">
          <Button type="submit" disabled={pending}>
            {pending ? "Joining..." : "Join the Reddit Beta Waitlist"}
          </Button>
        </div>
      </form>
    </section>
  );
}

