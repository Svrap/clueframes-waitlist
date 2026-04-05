import React from "react";

interface GlowOrbProps {
  size?: string;
  color?: string;
  delay?: number;
  duration?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className?: string;
}

export default function GlowOrb({
  size = "80px",
  color = "rgba(139, 92, 246, 0.3)",
  delay = 0,
  duration = "4s",
  top,
  left,
  right,
  bottom,
  className = "",
}: GlowOrbProps) {
  const style = {
    width: size,
    height: size,
    backgroundColor: color,
    top,
    left,
    right,
    bottom,
    "--glow-delay": `${delay}s`,
    "--glow-duration": duration,
  } as React.CSSProperties & {
    "--glow-delay"?: string;
    "--glow-duration"?: string;
  };

  return (
    <div
      className={`absolute rounded-full blur-xl animate-glow-pulse pointer-events-none ${className}`}
      style={style}
    />
  );
}

