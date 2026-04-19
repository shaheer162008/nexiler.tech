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
        }}
      />
      {/* Top fade gradient (fixes mobile Safari mask-image render limits) */}
      <div className="absolute top-0 inset-x-0 h-[150px] bg-gradient-to-b from-background to-transparent z-0 pointer-events-none" />
      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 inset-x-0 h-[150px] bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;