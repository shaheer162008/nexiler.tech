import * as React from "react";

export function UserPlaceholder({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-block bg-gradient-to-br from-zinc-700 via-zinc-500 to-zinc-800 rounded-full border-2 border-border/20 shadow-lg ${className}`}
      style={{ aspectRatio: "1/1" }}
    >
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="32" fill="url(#avatarGradient)" />
        <ellipse cx="32" cy="26" rx="12" ry="12" fill="#fff" fillOpacity="0.18" />
        <ellipse cx="32" cy="50" rx="18" ry="10" fill="#fff" fillOpacity="0.10" />
        <defs>
          <radialGradient id="avatarGradient" cx="0" cy="0" r="1" gradientTransform="translate(32 32) rotate(90) scale(32)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a1a1aa" />
            <stop offset="1" stopColor="#27272a" />
          </radialGradient>
        </defs>
      </svg>
    </span>
  );
}
