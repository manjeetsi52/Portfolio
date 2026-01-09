import img from "../assets/svgs/img2.svg";

export const Skills = () => {
  return (
    <section className="h-screen text-white flex justify-center items-center  contain bg-black font-poppins relative">
        {/* intro */}
      <div className="grid grid-cols-2 w-full ">
        <img src={img} alt="cap" className="size-150 ml-15 animeImage " />
        <div className=" flex flex-col justify-center gap-4 items-center ">
          <h1 className="text-6xl font-bold tracking-wide mt-[-2rem] clipText">
            <a href="">Skills</a>
          </h1>
          <p className="text-lg text-neutral-300 max-w-xl leading-relaxed ">
            Frontend development using HTML, CSS, JavaScript, React, Tailwind
            CSS, and Redux, with a focus on responsive layouts, animations, and
            reusable components. Strong understanding of Git, GitHub, and modern
            development workflows. Currently advancing backend skills with
            Node.js, Express.js, MongoDB, and building scalable MERN stack
            applications.
          </p>
        </div>
      </div>
      {/* rotating img */}
      <img src="/purple.png" alt="img" className="absolute size-48 bottom-0 right-0 animeImage" />
      {/* skills */}
      {/* extra */}
    </section>
  );
};
