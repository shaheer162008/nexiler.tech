import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export const GridBackground = ({ children, className }: GridBackgroundProps) => {
  return (
    <div className={cn("w-full relative", className)}>
      {/* Dark Grid Background with NO magenta/purple glow (Pure Black and white/muted) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 40px 40px",
          maskImage: "linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;