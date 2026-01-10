import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function CardSpotlight({ children, className }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const handleMouseMove = (e) => {
      const rect = div.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    div.addEventListener("mousemove", handleMouseMove);
    div.addEventListener("mouseenter", handleMouseEnter);
    div.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      div.removeEventListener("mousemove", handleMouseMove);
      div.removeEventListener("mouseenter", handleMouseEnter);
      div.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(
            250px circle at ${position.x}px ${position.y}px,
            rgba(255,255,255,0.08),
            transparent 40%
          )`,
        }}
      />
      {children}
    </div>
  );
}
