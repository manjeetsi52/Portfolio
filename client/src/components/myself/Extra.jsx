import { useRef, useState } from "react";
import { MarqueeText } from "../../slider/Slider";
import { CursorPreview } from "../gsap/cursor/CursopPreview";
import { HoverItem } from "../gsap/cursor/HoverItem";
import { para, sketches } from "../../assets/api/data";
import { TypewriterText } from "../ui/TypewriterText";
export const Extra = () => {
  const previewRef = useRef(null);
  const [toggleType,setToggleType] = useState(true)
  const [activeImage, setActiveImage] = useState(sketches[0].image);
  const handleClick = (e)=>{
      setToggleType((prev)=>!prev)
  }
  return (
    <div className="text-white font-poppins">
      <div
        id="extra"
        className="h-screen border-white contain flex flex-col justify-around"
      >
        <MarqueeText text={"EXTRACURRICULAR"} />
        <CursorPreview ref={previewRef} activeImage={activeImage} />
        <div className="flex flex-col">
          {sketches.map((sketches) => (
            <HoverItem
              key={sketches.title}
              image={sketches.image}
              setActiveImage={setActiveImage}
              previewRef={previewRef}
            >
              <h2 className="text-4xl border-b pl-10 pt-10 opacity-80 hover:text-fuchsia-500 hover:border-white">
                {sketches.title}
              </h2>
            </HoverItem>
          ))}
        </div>

        <div onClick={handleClick} className="opacity-80 bg-neutral-950 border-y border-neutral-700 p-5 mt-10 cursor-pointer">
          <TypewriterText
            text={para}
            delay={100}
            start={toggleType}
            className={`font-poppins text-white  tracking-wide`}
            as="p"
          />
        </div>
        {/* <p className="opacity-80 bg-neutral-950 border-y border-neutral-700 p-5 mt-10  italic tracking-wide">
           These sketches demonstrate my creativity, design sense, and attention
           to detail, complementing my technical skills with visual storytelling.
           Displaying them interactively allows visitors to engage with my work
           dynamically, highlighting both artistic and front-end development
           abilities.
         </p> */}
      </div>
    </div>
  );
};
