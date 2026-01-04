import { Button } from "@mui/material";

export const Home = () => {
  return (
    <section className="contain h-screen bg-black grid grid-cols-2 font-poppins relative">
      <div className="text-white  flex flex-col justify-center gap-5">
        <h1 className="text-7xl text-neutral-200 font-semibold tracking-wide ">MERN Stack Developer</h1>
        <p className="text-lg w-[70%] opacity-50 tracking-wide">
          Building scalable, full-stack web applications with MongoDB, Express,
          React, and Node.js. I design clean front-end interfaces, develop
          robust back-end APIs, and focus on performance, security, and
          maintainable code.
        </p>
        <Button variant="outlined" className="w-30 !text-purple-500 !font-semibold !border-purple-500 !rounded-2xl hover:!bg-purple-500 hover:!text-white hover:!font-semibold ">About</Button>
      </div>
      <div className="text-white flex justify-center items-center">
        <img src="./computerImage.png" alt="image" className="w-120 animate-[slowBounce_3s_ease-in-out_infinite]" />
        <img src="./purple.png" alt="image" className="absolute inset-0 w-50 top-110 left-150 animate-[slowBounce_3s_ease-in-out_infinite]" />
      </div>
    </section>
  );
};
