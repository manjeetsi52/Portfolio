export const EducationDecoration = () => {
  return (
    <>
      {/* Top right purple glow */}
      <img
        src="/purple.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-0 right-0 w-40 md:w-56 lg:w-48 pointer-events-none animeImage"
      />

      {/* DNA / gene icon */}
      <img
        src="/gene.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-120 right-100 w-16 md:w-20 pointer-events-none animeImage"
      />

      {/* Floating spheres */}
      <img
        src="/sphere.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-200 right-0 w-20 pointer-events-none animeImage"
      />
{/* 
      <img
        src="/sphere.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-200 left-0 w-20 pointer-events-none animeImage"
      /> */}

      {/* Decorative line */}
      <img
        src="/line.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-300 left-10 w-16 pointer-events-none animeImage"
      />
    </>
  );
};
