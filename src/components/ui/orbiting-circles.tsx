import { cn } from "@/lib/utils";
import { memo } from "react";

interface OrbitingCirclesProps {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
  backgroundColor?: string;
}

const OrbitingCircles = memo(
  ({
    className,
    children,
    reverse = false,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
    strokeColor = "orange", // Set default to orange
    strokeWidth = 2,        // Increased stroke width for better visibility
    backgroundColor = "black", // Set default to black
  }: OrbitingCirclesProps) => {
    return (
      <>
        {path && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="pointer-events-none absolute inset-0 size-full"
          >
            <circle
              className="dark:stroke-white/10"
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              stroke={strokeColor} // Use orange stroke by default
              strokeWidth={strokeWidth}
            />
          </svg>
        )}

        <div
          style={
            {
              "--duration": `${duration}s`,
              "--radius": `${radius}px`,
              "--delay": `-${delay}s`,
              "--background": backgroundColor, // Set to black by default
            } as React.CSSProperties
          }
          className={cn(
            "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full [animation-delay:var(--delay)] [background-color:var(--background)]",
            {
              "[animation-direction:reverse]": reverse,
            },
            className,
          )}
        >
          {children}
        </div>
      </>
    );
  },
);

export default OrbitingCircles;
