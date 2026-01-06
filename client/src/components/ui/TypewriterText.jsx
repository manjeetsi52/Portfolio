import { useEffect, useRef, useState } from "react";

export const TypewriterText = ({
  text = "",
  delay = 200,
  as: Tag = "h1",
  className = "",
  start = false,
}) => {
  const [displayed, setDisplayed] = useState("");
  const timeoutRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!start || !text) {
      setDisplayed("");
      return;
    }
    //prevent appending old text when text changes or re-rendring happens
    indexRef.current = 0;
    setDisplayed("");

    const type = () => {
      if (indexRef.current < text.length) {
        setDisplayed((prev) => prev + text.charAt(indexRef.current));
        indexRef.current += 1;

        timeoutRef.current = setTimeout(type, delay);
      }
    };

    type();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [start, text, delay]);

  return <Tag className={className}>{displayed}</Tag>;
};
