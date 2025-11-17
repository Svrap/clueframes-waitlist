import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClueFrames — Join the Reddit Beta Waitlist",
  description:
    "Cut pre-production time by 70–90%. AI-powered research, scripting, and storyboarding for YouTube creators. Pre-production in minutes, not days.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

