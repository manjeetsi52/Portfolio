import projectSvg from "../assets/svgs/project.svg";
import { ProjectDisplay } from "../components/ProjectDisplay";

export const Project = () => {
  return (
    <section className="h-fit text-white flex flex-col justify-center items-center  contain bg-black font-poppins relative">
      {/* intro */}
      <div className="grid grid-cols-2 w-full h-screen">
        <div className=" flex flex-col justify-center gap-4 items-center  ">
          <h1 className="text-6xl font-bold tracking-wide clipText">
            <a href="#projectDisplay">Projects</a>
          </h1>
          <p className="text-lg text-neutral-300 max-w-xl leading-relaxed ">
            I have developed multiple frontend and full-stack projects focused
            on real-world use cases, responsive design, and clean architecture.
            These projects showcase my proficiency in JavaScript, React, and the
            MERN stack, along with my ability to build scalable applications,
            integrate APIs, and write maintainable, performance-focused code.
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={projectSvg}
            alt="cap"
            className="size-130 ml-15 animeImage "
          />
        </div>
      </div>

      {/* project display */}
      <ProjectDisplay/>
    </section>
  );
};
