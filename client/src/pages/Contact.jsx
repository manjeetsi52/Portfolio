import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Button } from "@mui/material";
import { FaLongArrowAltRight } from "react-icons/fa";

import { MarqueeText } from "../slider/Slider.jsx";
import { useState } from "react";

export const Contact = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    })
    const handleClick = (e)=>{
        const {name,value} = e.target
        setFormData((prev)=>{
            return {...prev,[name]:value}
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        // send data to backend and send email to me
    }

  return (
    <section className="min-h-screen contain text-white font-poppins flex flex-col justify-between">
      
      {/* Top Marquee */}
      <div className="py-10">
        <MarqueeText text="SAY HELLO" />
      </div>

      {/* Main Content */}
      <div className="contain grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        
        {/* Left */}
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-6xl font-semibold tracking-wide bg-gradient-to-bl from-violet-100 via-fuchsia-500 to-fuchsia-700 bg-clip-text text-transparent">
            Manjeet Singh
          </h1>

          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/manjeet-singh-5987b027b/" target="_blank">
              <IoLogoLinkedin className="text-3xl text-zinc-400 hover:text-fuchsia-500 transition" />
            </a>
            <a href="https://github.com/manjeetsi52" target="_blank">
              <FaGithub className="text-3xl text-zinc-400 hover:text-fuchsia-500 transition" />
            </a>
            <a href="mailto:manjeetsinghyk@gmail.com">
              <MdEmail className="text-3xl text-zinc-400 hover:text-fuchsia-500 transition" />
            </a>
          </div>
          <img
            src="/purple.png"
            alt="image"
            className="absolute w-32 top-80 left-120 animate-[slowBounce_3s_ease-in-out_infinite]"
          />
         
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md p-10 rounded-2xl border border-zinc-700 flex flex-col gap-6 bg-black/40 backdrop-blur hover:border-zinc-500 transition">
            {/* <h2 className="text-2xl font-semibold text-center">
              Get in touch
            </h2> */}

            <input type="text" placeholder="Your name" className="input" value={formData.name} onChange={handleClick}/>
            <input type="email" placeholder="Your email" className="input" value={formData.email} onChange={handleClick}/>
            <textarea placeholder="Your message" rows="4" className="input resize-none" value={formData.message} onChange={handleClick}/>

            <Button
              variant="outlined"
              type="submit"
              className="!h-12 !rounded-2xl !border-purple-500 !text-purple-500 hover:!bg-purple-500 hover:!text-white transition"
            >
              Send
              <span className="pl-2">
                <FaLongArrowAltRight />
              </span>
            </Button>
          </form>
        </div>

      </div>

      {/* Bottom Marquee */}
      <div className="py-10">
        <MarqueeText text="SAY HELLO" />
      </div>
    </section>
  );
};
