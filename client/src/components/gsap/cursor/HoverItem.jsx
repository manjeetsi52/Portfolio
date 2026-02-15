import gsap from "gsap";

export function HoverItem({ children, image, setActiveImage, previewRef }) {
  const onEnter = () => {
    setActiveImage(image);

    gsap.to(previewRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    gsap.to(previewRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.25,
      ease: "power3.in",
    });
  };

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}
