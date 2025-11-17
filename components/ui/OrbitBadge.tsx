import React from "react";

interface OrbitBadgeProps {
  children: React.ReactNode;
  icon?: string;
  delay?: number;
  orbitDistance?: string;
  orbitDuration?: string;
  initialAngle?: number;
  className?: string;
}

export default function OrbitBadge({
  children,
  icon,
  delay = 0,
  orbitDistance = "120px",
  orbitDuration = "20s",
  initialAngle = 0,
  className = "",
}: OrbitBadgeProps) {
  const style = {
    "--orbit-distance": orbitDistance,
    "--orbit-duration": orbitDuration,
    "--delay": `${delay}s`,
    "--initial-angle": `${initialAngle}deg`,
  } as React.CSSProperties & {
    "--orbit-distance"?: string;
    "--orbit-duration"?: string;
    "--delay"?: string;
    "--initial-angle"?: string;
  };

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center orbit-container ${className}`}
      style={style}
    >
      <div className="orbit-badge flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 text-gray-800 text-sm font-medium pointer-events-none">
        {icon && <span className="text-lg">{icon}</span>}
        <span>{children}</span>
      </div>
    </div>
  );
}

