export const MarqueeText = ({
  text ,
  speed = 10,
})=>{
    return (
        <div className="relative w-full overflow-hidden border-y border-neutral-800 ">      
        <div
        className="flex whitespace-nowrap py-5 animate-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
        >
        {[...Array(2)].map((_, i) =>
          Array.from({ length: 6 }).map((_, j) => (
              <span
              key={`${i}-${j}`}
              className="mx-10 text-5xl font-semibold tracking-[0.25em] text-neutral-500 uppercase"
              >
              {text}
            </span>
          ))
        )}
        </div>
        </div>
    );
    
    
} 