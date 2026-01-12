import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShapeOverlay from "../components/gsap/ShapeOverlays";
import { TypewriterText } from "../components/ui/TypewriterText";
import Button from "@mui/material/Button";
import { NAME } from "../assets/api/Constants";
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

      <section className="min-h-screen min-w-full bg-black text-white flex justify-center items-center relative z-10">
        <div className="text-center space-y-4">
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
            className={`font-pearl font-bold text-white lg:text-9xl md:text-7xl sm:text-5xl text-3xl `}
            as="h1"
          />
          <Button
            variant="outlined"
            onClick={handleClick}
            sx={{
              color: "white",
              borderColor: "white",
              borderRadius: "4rem",
              px: { xs: 3, md: 4 }, // responsive padding
              py: { xs: 1.2, md: 1.5 },
              mt: { xs: 2, md: 4 },
              transition: "background-color 0.3s ease, color 0.3s ease",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                fontWeight: 600,
              },
            }}
            className={`
    w-fit
    text-sm md:text-base
    transition-all duration-500 ease-out
    ${
      buttonVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }
  `}
          >
            Explore
          </Button>
        </div>
      </section>
    </>
  );
};
