import { useEffect, useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";
const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

export const ScrambledText = ({
  text,
  as: Tag = "h1",
  className = "",
  duration = 1200,
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const intervalTime = 30;
    const totalFrames = Math.floor(duration / intervalTime);
    const original = text.split("");
    let frame = 0;

    const interval = setInterval(() => {
      const revealCount = Math.floor(
        (frame / totalFrames) * original.length
      );

      const output = original.map((char, i) =>
        i < revealCount ? char : randomChar()
      );

      el.textContent = output.join("");
      frame++;

      if (frame >= totalFrames) {
        el.textContent = text;
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <Tag ref={elRef} className={className}>
      {text}
    </Tag>
  );
};
