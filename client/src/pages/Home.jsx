import { Button } from "@mui/material";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { About } from "../components/myself/About";
import { MdEmail } from "react-icons/md";
import computer from "../assets/svgs/computer.svg"
import { Extra } from "../components/myself/Extra";

export const Home = () => {
  return (
    <>
      <section className="contain h-screen bg-black grid grid-cols-2 font-poppins relative">
        {/* left side */}
        <div className="text-white   flex flex-col justify-center gap-5">
          <h1 className="text-7xl text-neutral-200 font-semibold tracking-wide bg-gradient-to-bl from-violet-100 via-fuchsia-500 to-fuchsia-700 bg-clip-text text-transparent">
            MERN Stack Developer
          </h1>
          <p className="text-lg w-[70%] opacity-50 tracking-wide">
            Building scalable, full-stack web applications with MongoDB,
            Express, React, and Node.js. I design clean front-end interfaces,
            develop robust back-end APIs, and focus on performance, security,
            and maintainable code.
          </p>
          <div className="flex gap-4 items-center">
            <Button
              variant="outlined"
              className="w-30 !text-purple-500 !font-semibold !border-purple-500 !rounded-2xl hover:!bg-purple-500 hover:!text-white hover:!font-semibold "
            >
              <a href="#about">About</a>
            </Button>
            <a
              href="https://www.linkedin.com/in/manjeet-singh-5987b027b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="tags" />
            </a>
            <a
              href="https://github.com/manjeetsi52"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="tags" />
            </a>
            <a
              href="mailto:manjeetsinghyk@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="tags" />
            </a>
          </div>
        </div>
        {/* right side */}
        <div className="text-white flex justify-center items-center relative">
          <img
            // src="./computerImage.png"
            src={computer}
            alt="image"
            className="w-120 transfrom -scale-x-100 animate-[slowBounce_3s_ease-in-out_infinite] z-10"
          />
          <img
            src="./purple.png"
            alt="image"
            className="absolute w-50 top-115 right-180 animate-[slowBounce_3s_ease-in-out_infinite]"
          />
          {/* <img src="./dark_cube2.png" alt="image" className="absolute w-20 top-65 left-100  right-150 animate-[slowBounce_3s_ease-in-out_infinite]" /> */}
          <div className="h-fit contain grid grid-cols-[repeat(15,1rem)] gap-8 opacity-10 absolute z-0">
            {Array.from({ length: 100 }).map((_, i) => {
              return (
                <div key={i} className="size-1 bg-amber-50 rounded-full"></div>
              );
            })}
          </div>
        </div>
      </section>
      {/* about  */}
      <About/>
      {/* extra */}
      <Extra/>
    </>
  );
};
