import { useRef, useState } from "react"
import { MarqueeText } from "../../components/slider/Slider.jsx";
import { CursorPreview } from "../gsap/cursor/CursopPreview";
import { HoverItem } from "../gsap/cursor/HoverItem";
import { sketches } from "../../assets/api/data";
export const Extra = () => {
  const previewRef = useRef(null);
  const [activeImage, setActiveImage] = useState(sketches[0].image);

  return (
    <div className="text-white font-poppins">
      <div
        id="extra"
        className="h-fit  contain flex flex-col justify-around  md:h-screen"
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

        <p className="opacity-80 bg-neutral-950 border-y border-neutral-700 p-5 mt-10  italic tracking-wide text-center md:text-left">
           These sketches demonstrate my creativity, design sense, and attention
           to detail, complementing my technical skills with visual storytelling.
           Displaying them interactively allows visitors to engage with my work
           dynamically, highlighting both artistic and front-end development
           abilities.
         </p>
      </div>
    </div>
  );
};
