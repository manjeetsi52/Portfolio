import { Button } from "@mui/material";
import { FaArrowCircleDown } from "react-icons/fa";

export const About = () => {
  return (
    <section
    id="about"
    className="
        relative min-h-screen
        bg-black text-white
        contain
        grid grid-cols-1 md:grid-cols-2
        gap-12
        items-center
        font-poppins
        overflow-hidden 
        pt-20"
    >
      {/* Left content */}
      <div className="relative z-10 space-y-4 -mt-10">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Hi, I’m <span className="text-fuchsia-500 ">Manjeet</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-neutral-400">
          Web Developer
        </h2>

        <p className="text-sm md:text-base text-neutral-500 tracking-wide">
          JavaScript Enthusiast / Creative Problem Solver
        </p>
      </div>
      {/* arrow button */}
       <Button
              variant="text"
              className="!absolute !top-150 !right-0 !text-3xl !text-purple-500 !font-semibold !border-purple-500 !rounded-2xl !hover:bg-white"
            >
              <a href="#extra"><FaArrowCircleDown/></a>
            </Button>

      {/* About text */}
      <div className="relative z-10 max-w-xl text-neutral-300 leading-relaxed">
        <p>
          I’m a MERN stack developer focused on building scalable,
          performance-driven web applications with clean, maintainable code. I
          specialize in React, state management, and modern UI architecture,
          backed by a strong foundation in data structures and problem-solving.
          <br />
          <br />I enjoy turning complex requirements into simple, intuitive
          interfaces and writing code that scales beyond demos. Currently, I’m
          sharpening my backend skills and building real-world projects while
          preparing for internships and full-stack roles.
        </p>
      </div>

      {/* Background masked letter */}
      <h1
        className="
          masked-text
          absolute
          -top-20
          left-1/2
          -translate-x-1/2
          z-0
          opacity-30
          pt-20
        "
      >
        M
      </h1>
      <img
        src="cube.png"
        alt="cube"
        className="absolute size-40 bottom-10 left-30 animate-pulse"
      />
      <img
        src="./purple.png"
        alt="image"
        className="absolute w-50 top-2 right-86"
      />
    </section>
  );
};
