import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShapeOverlay from "../components/gsap/ShapeOverlays";
import { TypewriterText } from "../components/ui/TypewriterText";
import { NAME } from "../services/Constants";
import Button from "@mui/material/Button";
// import { IoArrowForwardSharp } from "react-icons/io5";

export const Front = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonVisible(true);
    }, 3500);

    return () => clearTimeout(timer);
  });

  const navigate = useNavigate();
  const overlayRef = useRef(null);

  const handleClick = () => {
    overlayRef.current.open(() => {
      navigate("/manjeet");
    });
  };

  return (
    <>
      <ShapeOverlay ref={overlayRef} />

      <section className="h-screen bg-black text-white flex justify-center items-center relative z-10">
        <div className="text-center space-y-4 ">
          <div className="absolute inset-0">
            {/* background animation */}
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
          <TypewriterText
            text={NAME}
            delay={250}
            start={true}
            className={`lg:text-9xl font-pearl font-bold text-white md:text-7xl sm:text-5xl`}
            as="h1"
          />
          <Button
            variant="outlined"
            onClick={handleClick}
            sx={{
              color: "white",
              borderColor: "white",
              borderRadius: "4rem",
              width: "8rem",
              padding: "1rem",
              marginTop: "3rem",
              transition: "all 0.5s ease-out",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                fontWeight: "bold",
              },
            }}
            className={`
                      ${ buttonVisible
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 translate-y-4 pointer-events-none"
                       }
                    `}>
            Explore
          </Button>
        </div>
      </section>
    </>
  );
};
