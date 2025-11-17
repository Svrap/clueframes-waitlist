import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClueFrames",
  description: "AI-powered pre-production tools for YouTube creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

