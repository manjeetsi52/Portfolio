import { useEffect, useState } from "react";

export const TypewriterText = ({
  text = "",
  delay = 200,
  as: Tag = "h1",
  className = "",
  start = false,
}) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start || !text) return;

    let index = 0;
    setDisplayed("");

    const type = () => {
      if (index < text.length) {
        setDisplayed((prev) => prev + text.charAt(index));
        index++;
        setTimeout(type, delay);
      }
    };

    type();

    return () => {
      index = text.length; // hard stop on unmount / re-run
    };
  }, [start, text, delay]);

  return <Tag className={className}>{displayed}</Tag>;
};
