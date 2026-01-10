import { forwardRef, useEffect } from "react";
import gsap from "gsap";

export const CursorPreview = forwardRef(({ activeImage }, ref) => {
  useEffect(() => {
    const move = (e) => {
      gsap.to(ref.current, {
        x: e.clientX + 24,
        y: e.clientY + 24,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [ref]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-50 border border-white
                 w-64  rounded-xl overflow-hidden
                 scale-0 opacity-0"
    >
      <img
        src={activeImage}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
});
