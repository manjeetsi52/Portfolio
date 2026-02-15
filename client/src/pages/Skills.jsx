import img from "../assets/svgs/img2.svg";
import { SkillIcons } from "../components/SkillIcons.jsx";

export const Skills = () => {
  return (
    <section className="h-fit text-white flex flex-col justify-center items-center  contain bg-black font-poppins relative">
        {/* intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit md:h-screen ">
        <img src={img} alt="cap" className="size-120 md:size-150 md:ml-15 animeImage " />
        <div className=" flex flex-col justify-center gap-4 items-center ">
          <h1 className="font-bold tracking-wide mt-[-2rem] clipText lg:text-7xl text-5xl">
            <a href="#skills">Skills</a>
          </h1>
          <p className="text-neutral-300 max-w-xl leading-relaxed lg:text-lg text-sm text-center md:text-left ">
            Frontend development using HTML, CSS, JavaScript, React, Tailwind
            CSS, and Redux, with a focus on responsive layouts, animations, and
            reusable components. Strong understanding of Git, GitHub, and modern
            development workflows. Currently advancing backend skills with
            Node.js, Express.js, MongoDB, and building scalable MERN stack
            applications.
          </p>
        </div>
      </div>
      {/* decoration img */}
      <img src="/decoration/purple.png" alt="img" className="absolute w-12 md:size-48 top-90 md:top-120 right-5  md:right-0 animeImage" />
      {/* skills */}
        <SkillIcons/>
    </section>
  );
};
