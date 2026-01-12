import projectSvg from "../assets/svgs/project.svg";
import { ProjectDisplay } from "../components/ProjectDisplay";

export const Project = () => {
  return (
    <section className="h-fit text-white flex flex-col justify-center items-center  contain bg-black font-poppins relative ">
      {/* intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:h-screen h-fit">
        <div className="row-start-2 md:row-start-1 flex flex-col justify-center gap-4 items-center  ">
          <h1 className=" lg:text-7xl text-5xl font-bold tracking-wide clipText">
            <a href="#projectDisplay">Projects</a>
          </h1>
          <p className="lg:text-lg text-sm text-neutral-300 max-w-xl leading-relaxed md:text-left text-center mb-10 md:mb-0">
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
            className="size-120 md:size-130 md:ml-15 animeImage "
          />
        </div>
      </div>

      {/* project display */}
      <ProjectDisplay/>
    </section>
  );
};
